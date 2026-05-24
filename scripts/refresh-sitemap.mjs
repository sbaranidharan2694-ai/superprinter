/**
 * Refresh dist/sitemap.xml so each <url>'s <lastmod> reflects the actual
 * last-modified date of the source file that backs the route.
 *
 * The original sitemap in public/sitemap.xml hardcodes 2026-05-11 across
 * every URL — a stale date hurts freshness ranking signals under the
 * May 2026 Core Update. This script:
 *
 *  1. Reads the deployed sitemap from dist/sitemap.xml (Vite copies it
 *     there from public/).
 *  2. For each <loc>, maps the path to the React source file that
 *     renders it.
 *  3. Runs `git log -1 --format=%cI <file>` to get the ISO date of the
 *     latest commit touching that file. Falls back to today's date if
 *     the route maps to no file or git has no history.
 *  4. Writes the updated XML back to dist/sitemap.xml.
 *
 * Runs after prerender as part of `npm run build`.
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const sitemapPath = path.join(root, "dist", "sitemap.xml");

if (!fs.existsSync(sitemapPath)) {
  console.error(`[refresh-sitemap] dist/sitemap.xml not found — did prerender run?`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);

/**
 * Map a sitemap URL path to the React source file that renders it. We use
 * the source file's git mtime as a proxy for "when did this page's content
 * last meaningfully change", which is what Google actually cares about for
 * the freshness signal.
 *
 * Returns the relative path under src/ or null if no obvious mapping
 * exists (in which case we fall back to today's date).
 */
function fileForPath(p) {
  // Strip the host and any trailing slash
  const clean = p.replace(/^https?:\/\/[^/]+/, "").replace(/\/$/, "");

  // Exact matches
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
    "/llm.html": "public/llm.html",
  };
  if (clean in exact) return exact[clean];

  // Dynamic-route prefixes — fall back to the renderer file.
  if (clean.startsWith("/printing-press-")) return "src/pages/AreaPrintingPage.tsx";
  if (clean.startsWith("/services/")) return "src/pages/ServiceDetail.tsx";
  if (clean.startsWith("/products/")) return "src/pages/ProductsCatalogPage.tsx";
  if (clean.startsWith("/blog/")) return "src/pages/BlogPost.tsx";

  return null;
}

/** Cache git mtimes so we don't shell out N times per page. */
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

const xml = fs.readFileSync(sitemapPath, "utf8");

let updated = 0;
let stale = 0;
const out = xml.replace(/<url>([\s\S]*?)<\/url>/g, (block) => {
  const locMatch = block.match(/<loc>([^<]+)<\/loc>/);
  if (!locMatch) return block;
  const url = locMatch[1];

  const file = fileForPath(url);
  const date = (file && gitMtime(file)) || today;

  const next = block.replace(/<lastmod>[^<]+<\/lastmod>/, `<lastmod>${date}</lastmod>`);
  if (next !== block) {
    updated++;
  } else {
    stale++;
  }
  return next;
});

fs.writeFileSync(sitemapPath, out, "utf8");
console.log(`[refresh-sitemap] updated ${updated} lastmod entries (${stale} unchanged).`);
