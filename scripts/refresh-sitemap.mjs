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
 *   3. Derives <lastmod> from the git mtime of the source file backing each
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

const serverEntry = pathToFileURL(path.join(root, "dist", "server", "entry-server.js")).href;
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
function gitMtime(file) {
  if (!file) return null;
  if (mtimeCache.has(file)) return mtimeCache.get(file);
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${file}"`, {
      cwd: root,
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    }).trim();
    const date = iso ? iso.slice(0, 10) : null;
    mtimeCache.set(file, date);
    return date;
  } catch {
    mtimeCache.set(file, null);
    return null;
  }
}

const urls = paths
  .map((p) => {
    const clean = p === "/" ? "" : p.replace(/\/$/, "");
    const loc = clean.endsWith(".html")
      ? `${SITE_URL}${clean}`
      : `${SITE_URL}${clean}/`; // trailing slash matches canonical form
    const date = (fileForPath(clean) && gitMtime(fileForPath(clean))) || today;
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
