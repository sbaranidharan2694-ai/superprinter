/**
 * Generate dist/sitemap.xml from the canonical route list.
 *
 * Previously the sitemap was hand-maintained in public/sitemap.xml and this
 * script only patched <lastmod>, so any new route silently missed the sitemap
 * (the same drift class the route table had). Now the sitemap is GENERATED
 * from `allRoutes()` — the exact set prerender.mjs renders — so it can never
 * drift from the routes again. Add a route, it appears in the sitemap.
 *
 *   1. Imports allRoutes() + SITE_URL from the built SSR bundle.
 *   2. Adds a few static non-React URLs (e.g. /llm.html).
 *   3. Derives <lastmod> from the git date (or filesystem mtime, when the
 *      checkout has no usable history) of the source file backing each
 *      route, and a <priority>/<changefreq> from a path heuristic.
 *   4. Writes dist/sitemap.xml.
 *
 * Runs after prerender as part of `npm run build`.
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const today = new Date().toISOString().slice(0, 10);

const serverEntry = pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href;
const { allRoutes, SITE_URL } = await import(serverEntry);

// Static, non-React files that should still be indexed.
const EXTRA_URLS = ["/llm.html"];

// All indexable route paths (no leading host), de-duped, + extras.
const paths = Array.from(new Set([...allRoutes(), ...EXTRA_URLS]));

/** Map a route path to the source file whose git mtime best represents its
 *  content freshness. Falls back to today's date when unmapped. */
function fileForPath(clean) {
  const exact = {
    "": "src/pages/Index.tsx",
    "/about": "src/pages/About.tsx",
    "/contact": "src/pages/Contact.tsx",
    "/gallery": "src/pages/Gallery.tsx",
    "/services": "src/pages/Services.tsx",
    "/get-quote": "src/pages/GetQuote.tsx",
    "/blog": "src/pages/BlogIndex.tsx",
    "/printing-guide": "src/pages/PrintingGuide.tsx",
    "/reseller": "src/pages/ResellerPage.tsx",
    "/products": "src/pages/ProductsCatalogPage.tsx",
    "/wedding-cards": "src/pages/WeddingCardsPage.tsx",
    "/visiting-cards": "src/pages/VisitingCardsPage.tsx",
    "/brochures": "src/pages/BrochuresPage.tsx",
    "/bill-books": "src/pages/BillBooksPage.tsx",
    "/banners": "src/pages/BannersPage.tsx",
    "/stickers": "src/pages/StickersPage.tsx",
    "/rubber-stamps": "src/pages/RubberStampsPage.tsx",
    "/catalogues": "src/pages/CataloguesPage.tsx",
    "/pvc-id-cards": "src/pages/PvcIdCardsPage.tsx",
    "/letterheads": "src/pages/LetterheadsPage.tsx",
    "/our-press": "src/pages/OurPressPage.tsx",
    "/clients": "src/pages/ClientsPage.tsx",
    "/industries": "src/pages/IndustriesIndexPage.tsx",
    "/chennai-printing-guide": "src/pages/ChennaiPrintingGuidePage.tsx",
    "/llm.html": "public/llm.html",
  };
  if (clean in exact) return exact[clean];
  if (clean.endsWith("-wedding-cards-chennai")) return "src/data/weddingStyles.ts";
  if (clean.startsWith("/industries/")) return "src/pages/IndustryPage.tsx";
  if (clean.startsWith("/printing-press-")) return "src/data/areaProfiles.ts"; // area + head-keyword cluster content
  if (clean.startsWith("/services/")) return "src/data/services.ts";
  if (clean.startsWith("/products/")) return "src/pages/ProductsCatalogPage.tsx";
  if (clean.startsWith("/blog/")) return "src/data/blog.ts";
  if (clean.endsWith("-chennai")) return "src/data/headKeywordPages.ts"; // head-keyword landing pages
  return null;
}

/** Path-based priority + changefreq heuristic. */
function rank(clean) {
  if (clean === "") return { priority: "1.0", changefreq: "weekly" };
  if (/^\/(offset-|digital-)?printing-press-(in-)?chennai$|^\/(business-cards|large-format-signage|custom-packaging-printing|stationery-printing|online-printing|digital-printing|flex-banner-printing)-chennai$/.test(clean))
    return { priority: "0.95", changefreq: "weekly" };
  if (clean.endsWith("-wedding-cards-chennai")) return { priority: "0.9", changefreq: "weekly" };
  if (["/wedding-cards", "/visiting-cards", "/brochures", "/bill-books", "/banners", "/stickers", "/rubber-stamps", "/catalogues", "/pvc-id-cards", "/letterheads"].includes(clean))
    return { priority: "0.9", changefreq: "weekly" };
  if (clean.startsWith("/industries/")) return { priority: "0.8", changefreq: "monthly" };
  if (["/services", "/products", "/gallery", "/clients", "/our-press", "/chennai-printing-guide"].includes(clean))
    return { priority: "0.8", changefreq: "weekly" };
  if (clean.startsWith("/printing-press-")) return { priority: "0.75", changefreq: "monthly" };
  if (clean.startsWith("/services/") || clean.startsWith("/products/")) return { priority: "0.75", changefreq: "monthly" };
  if (clean.startsWith("/blog/")) return { priority: "0.65", changefreq: "monthly" };
  if (clean === "/blog") return { priority: "0.7", changefreq: "weekly" };
  return { priority: "0.7", changefreq: "monthly" };
}

const mtimeCache = new Map();

// Per-file <lastmod> dates, committed to the repo.
//
// Why a manifest instead of just asking git: the production build does not run
// where usable git history exists (a shallow `--depth 1` clone reports one
// identical commit date for every file; a build from an uploaded artifact has
// no .git at all). Filesystem mtime is no better — on a fresh checkout every
// file's mtime is the checkout time. Both failure modes emit the SAME
// <lastmod> for all 117 URLs, which is exactly what shipped between June and
// September 2026, and a uniform lastmod teaches crawlers to ignore the field.
//
// So: when git IS available (a developer's working copy) we read the real
// dates and rewrite this manifest. When it is not, we read the manifest that
// was committed alongside the code. Keep the regenerated file in your commit.
const MANIFEST_PATH = path.join(root, "sitemap-lastmod.json");

/** True only when this build has real, non-shallow git history. */
const gitUsable = (() => {
  try {
    const shallow = execSync("git rev-parse --is-shallow-repository", {
      cwd: root,
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    }).trim();
    return shallow === "false";
  } catch {
    return false;
  }
})();

const manifest = (() => {
  try {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
  } catch {
    return {};
  }
})();

if (!gitUsable && Object.keys(manifest).length === 0) {
  console.warn(
    "[sitemap] no git history AND no sitemap-lastmod.json — every <lastmod> " +
      "will fall back to today's date. Run this script from a full checkout " +
      "and commit sitemap-lastmod.json.",
  );
}

/**
 * Last-modified date for a source file, as YYYY-MM-DD.
 * Prefers real git history; otherwise reads the committed manifest.
 * Returns null when neither source knows the file.
 */
function lastModified(file) {
  if (!file) return null;
  if (mtimeCache.has(file)) return mtimeCache.get(file);

  let date = null;

  if (gitUsable) {
    try {
      const iso = execSync(`git log -1 --format=%cI -- "${file}"`, {
        cwd: root,
        encoding: "utf8",
        stdio: ["pipe", "pipe", "ignore"],
      }).trim();
      if (iso) date = iso.slice(0, 10);
    } catch {
      // fall through to the manifest
    }
  }

  if (!date && typeof manifest[file] === "string") date = manifest[file];

  mtimeCache.set(file, date);
  return date;
}

const urls = paths
  .map((p) => {
    const clean = p === "/" ? "" : p.replace(/\/$/, "");
    const loc = clean.endsWith(".html")
      ? `${SITE_URL}${clean}`
      : `${SITE_URL}${clean}/`; // trailing slash matches canonical form
    const date = (fileForPath(clean) && lastModified(fileForPath(clean))) || today;
    const { priority, changefreq } = rank(clean);
    return { loc, date, priority, changefreq, sort: Number(priority) };
  })
  .sort((a, b) => b.sort - a.sort || a.loc.localeCompare(b.loc));

const body = urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><lastmod>${u.date}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

const outPath = path.join(root, "dist", "sitemap.xml");
fs.writeFileSync(outPath, xml, "utf8");
console.log(`[refresh-sitemap] generated dist/sitemap.xml from allRoutes() — ${urls.length} URLs.`);

// Refresh the committed date manifest whenever this build had real git history,
// so the next build in a history-less environment still emits per-file dates.
// Commit the result alongside your code changes.
if (gitUsable) {
  const next = Object.fromEntries(
    [...mtimeCache.entries()]
      .filter(([, date]) => date)
      .sort(([a], [b]) => a.localeCompare(b)),
  );
  const serialized = `${JSON.stringify(next, null, 2)}\n`;
  const previous = fs.existsSync(MANIFEST_PATH)
    ? fs.readFileSync(MANIFEST_PATH, "utf8")
    : null;
  if (serialized !== previous) {
    fs.writeFileSync(MANIFEST_PATH, serialized, "utf8");
    console.log(
      `[refresh-sitemap] updated sitemap-lastmod.json (${Object.keys(next).length} files) — commit this file.`,
    );
  }
}

// ---- .htaccess redirect-target integrity ----------------------------------
// Every 301 in public/.htaccess must land on something this build actually
// produces. A redirect to a missing target is worse than the 404 it replaces:
// Google follows it, finds nothing, and records a "Redirect error".
//
// This runs here, in the last build step, rather than in prerender.mjs —
// sitemap.xml is written above, so a redirect pointing at it only resolves
// once this script has run.
{
  const htaccessPath = path.join(root, "public", ".htaccess");
  const distDir = path.join(root, "dist");
  if (fs.existsSync(htaccessPath)) {
    const missing = new Set();
    for (const [, target] of fs
      .readFileSync(htaccessPath, "utf8")
      .matchAll(/^\s*RewriteRule\s+\S+\s+(\/\S*)\s+\[R=301/gm)) {
      const clean = target.split(/[?#]/)[0];
      if (clean === "/") continue;
      const bare = clean.replace(/^\//, "");
      const asFile = path.join(distDir, bare);
      const asRoute = path.join(distDir, bare, "index.html");
      if (!fs.existsSync(asFile) && !fs.existsSync(asRoute)) missing.add(target);
    }
    if (missing.size > 0) {
      console.error(
        `[refresh-sitemap] ✗ .htaccess redirects to ${missing.size} target(s) ` +
          `with no built page: ${[...missing].join(", ")}`,
      );
      process.exit(1);
    }
    console.log("[refresh-sitemap] ✓ all .htaccess 301 targets resolve to built pages.");
  }
}

// ---- No index-less directories in the published tree ----------------------
// Apache serves a directory via DirectoryIndex; when the directory has no
// index.html and listings are off, it answers 403 — not 404. Google reads that
// as "forbidden, stop asking" rather than "gone". /industries/ did exactly this
// for months: the six /industries/<slug>/ pages created the directory, nothing
// created its index, and Search Console logged it under "Blocked due to access
// forbidden". Asset directories are excluded — they are never requested as
// directories, only as files beneath them.
{
  const distDir = path.join(root, "dist");
  const ASSET_DIRS = new Set([
    "assets",
    "images",
    "fonts",
    "clients",
    "visiting-cards",
    ".well-known",
  ]);

  const offenders = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const full = path.join(dir, entry.name);
      const rel = path.relative(distDir, full);
      if (ASSET_DIRS.has(rel.split(path.sep)[0])) continue;
      if (!fs.existsSync(path.join(full, "index.html"))) offenders.push(`/${rel}/`);
      walk(full);
    }
  };
  walk(distDir);

  if (offenders.length > 0) {
    console.error(
      `[refresh-sitemap] ✗ ${offenders.length} director(ies) in dist/ have no ` +
        `index.html and will answer 403 in production: ${offenders.join(", ")}`,
    );
    process.exit(1);
  }
  console.log("[refresh-sitemap] ✓ every published directory has an index.html.");
}
