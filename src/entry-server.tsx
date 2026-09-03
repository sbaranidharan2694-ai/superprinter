import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App";
import { BLOG_POSTS } from "./data/blog";
import { services as SERVICES } from "./data/services";
import { CATALOG_CATEGORIES as CATALOG } from "./data/catalog";
import { BUSINESS } from "./data/business";
import { staticRoutePaths } from "./routes";

// Re-exported for scripts/refresh-sitemap.mjs so the sitemap host stays
// single-sourced with the rest of the app.
export const SITE_URL = BUSINESS.siteUrl;

export function render(url: string) {
  const helmetContext = {} as { helmet?: HelmetServerState };

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet;
  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join("\n    ")
    : "";

  return { html, head };
}

// Fixed-route prerender manifest, derived from the shared ROUTES table.
// Excludes param routes (`/blog/:slug`, `/services/:slug`,
// `/products/:categorySlug`) and `prerender: false` routes (`/orders` is
// noindex; the catch-all). Dynamic routes are expanded from data in
// allRoutes() below.
export const STATIC_ROUTES = staticRoutePaths();

// Service slugs that .htaccess permanently 301s onto a flat product URL
// (/services/visiting-cards/ → /visiting-cards/). They must not be prerendered
// or listed in the sitemap: a sitemap that advertises redirects erodes the
// trust Google places in it, and Search Console counted all ten under "Page
// with redirect" in September 2026. Keep this in sync with the
// "Legacy /services/<slug> → flat product URL" block in public/.htaccess.
export const REDIRECTED_SERVICE_SLUGS = new Set([
  "visiting-cards",
  "wedding-invitations",
  "brochure-printing",
  "bill-books",
  "letterheads",
  "banner-printing",
  "stickers-labels",
  "rubber-stamps",
  "catalogues",
  "id-cards",
]);

export function allRoutes(): string[] {
  const dynamic = [
    ...BLOG_POSTS.map((p) => `/blog/${p.slug}`),
    ...SERVICES.filter((s) => !REDIRECTED_SERVICE_SLUGS.has(s.slug)).map(
      (s) => `/services/${s.slug}`,
    ),
    ...CATALOG.map((c) => `/products/${c.slug}`),
  ];
  return Array.from(new Set([...STATIC_ROUTES, ...dynamic]));
}
