/**
 * Static-site generation pass for the Vite SPA.
 *
 * Reads the built client `dist/index.html` template, calls `render(url)` from
 * the SSR bundle for every route returned by `allRoutes()`, and writes a
 * route-specific `dist/<route>/index.html` containing both the server-rendered
 * DOM and the Helmet-emitted <head> tags. This is what makes the site
 * crawlable without depending on client-side JavaScript.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const serverEntry = pathToFileURL(path.join(root, "dist", "server", "entry-server.js")).href;

const templatePath = path.join(distDir, "index.html");
const template = fs.readFileSync(templatePath, "utf8");

const mod = await import(serverEntry);
const { render, allRoutes } = mod;

const routes = allRoutes();

// ---- Internal href normalisation -------------------------------------------
// The canonical URL form is *with* a trailing slash (see SEOHead + .htaccess),
// but internal links are authored as <Link to="/about">, which renders
// href="/about". Apache then 301s /about → /about/, so historically EVERY
// internal link cost Googlebot two requests instead of one — 103 of 116 links
// in the September 2026 crawl. On a low-authority domain that halves the
// effective crawl budget and is what filled Search Console's "Page with
// redirect" bucket (36 URLs).
//
// Rewriting here rather than at ~97 <Link> call sites is deliberate: this also
// covers hrefs baked into content data (blog.ts post bodies), and it cannot
// silently regress when someone adds a new link.
//
// Skipped: the root "/", anything already slash-terminated, and any path whose
// last segment contains a dot (assets like /logo.png, /assets/app.js).
const INTERNAL_HREF = /href="(\/[^"]*)"/g;

function normalizeHref(target) {
  const cut = target.search(/[?#]/);
  const pathPart = cut === -1 ? target : target.slice(0, cut);
  const suffix = cut === -1 ? "" : target.slice(cut);
  if (pathPart === "/" || pathPart.endsWith("/")) return target;
  const lastSegment = pathPart.slice(pathPart.lastIndexOf("/") + 1);
  if (lastSegment.includes(".")) return target;
  return `${pathPart}/${suffix}`;
}

// Same defect in structured data: Service/Product nodes emitted
// "url":"https://superprinters.net/wedding-cards", which 301s. Only "url" is
// rewritten — "@id" values are node identifiers that other nodes reference by
// exact string, so changing them would break the entity graph.
const SCHEMA_URL = /"url"(\s*):(\s*)"https:\/\/superprinters\.net(\/[^"]*)"/g;

function normalizeInternalLinks(html) {
  return html
    .replace(INTERNAL_HREF, (_m, target) => `href="${normalizeHref(target)}"`)
    .replace(
      SCHEMA_URL,
      (_m, s1, s2, target) =>
        `"url"${s1}:${s2}"https://superprinters.net${normalizeHref(target)}"`,
    );
}

let ok = 0;
let failed = 0;
for (const route of routes) {
  try {
    const { html, head } = render(route);
    const out = normalizeInternalLinks(
      template
        .replace("<!--ssg-head-->", head ?? "")
        .replace("<!--ssg-app-->", html ?? ""),
    );

    const outPath =
      route === "/"
        ? path.join(distDir, "index.html")
        : path.join(distDir, route.replace(/^\//, ""), "index.html");

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, out, "utf8");
    ok++;
    console.log(`[prerender] ✓ ${route}`);
  } catch (err) {
    failed++;
    console.error(`[prerender] ✗ ${route}:`, err.message);
  }
}

// Hostinger ErrorDocument target — rendered NotFound page with noindex.
try {
  const { html, head } = render("/__sp_not_found__");
  const out = normalizeInternalLinks(
    template
      .replace("<!--ssg-head-->", head ?? "")
      .replace("<!--ssg-app-->", html ?? ""),
  );
  fs.writeFileSync(path.join(distDir, "404.html"), out, "utf8");
  console.log("[prerender] ✓ /404.html");
} catch (err) {
  console.error("[prerender] ✗ 404.html:", err.message);
}

// ---- Post-render assertions ------------------------------------------------
// Catch regressions that historically broke SEO: duplicate <link rel="canonical">,
// duplicate <title>, or duplicate <meta name="description">. Failing the build
// here is cheaper than re-running an external SEO crawl.
let assertionFailures = 0;
/**
 * Fail the build if a page still links to a non-canonical internal URL.
 * Every such link costs Googlebot a 301 hop before it reaches the real page;
 * 103 of them were live in September 2026 and drained the crawl budget.
 */
function assertNoRedirectingLinks(file) {
  const html = fs.readFileSync(file, "utf8");
  const offenders = new Set();
  for (const [, target] of html.matchAll(INTERNAL_HREF)) {
    if (normalizeHref(target) !== target) offenders.add(target);
  }
  for (const [, , , target] of html.matchAll(SCHEMA_URL)) {
    if (normalizeHref(target) !== target) offenders.add(`schema:${target}`);
  }
  if (offenders.size > 0) {
    console.error(
      `[prerender] ✗ ${path.relative(distDir, file)} links to ${offenders.size} ` +
        `non-canonical URL(s): ${[...offenders].slice(0, 5).join(", ")}` +
        (offenders.size > 5 ? ", …" : ""),
    );
    assertionFailures++;
  }
}

function assertSingle(file, tagDescriber, pattern) {
  const html = fs.readFileSync(file, "utf8");
  const count = (html.match(pattern) || []).length;
  if (count !== 1) {
    console.error(`[prerender] ✗ ${path.relative(distDir, file)} has ${count} ${tagDescriber} — expected 1`);
    assertionFailures++;
  }
}

for (const route of routes) {
  const file =
    route === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route.replace(/^\//, ""), "index.html");
  if (!fs.existsSync(file)) continue;
  assertSingle(file, '<link rel="canonical">', /rel="canonical"/g);
  assertSingle(file, "<title>", /<title[\s>]/g);
  assertSingle(file, '<meta name="description">', /name="description"/g);
  assertSingle(file, '<meta name="robots">', /name="robots"/g);
  assertNoRedirectingLinks(file);
}

console.log(
  `\n[prerender] done — ${ok} ok, ${failed} failed (of ${routes.length}); ${assertionFailures} post-render assertion failures`
);
process.exit(failed > 0 || assertionFailures > 0 ? 1 : 0);
