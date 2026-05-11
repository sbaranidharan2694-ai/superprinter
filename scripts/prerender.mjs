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

let ok = 0;
let failed = 0;
for (const route of routes) {
  try {
    const { html, head } = render(route);
    const out = template
      .replace("<!--ssg-head-->", head ?? "")
      .replace("<!--ssg-app-->", html ?? "");

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
  const out = template
    .replace("<!--ssg-head-->", head ?? "")
    .replace("<!--ssg-app-->", html ?? "");
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
}

console.log(
  `\n[prerender] done — ${ok} ok, ${failed} failed (of ${routes.length}); ${assertionFailures} post-render assertion failures`
);
process.exit(failed > 0 || assertionFailures > 0 ? 1 : 0);
