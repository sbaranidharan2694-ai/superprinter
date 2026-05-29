import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type FilledContext } from "react-helmet-async";
import App from "./App";
import { BLOG_POSTS } from "./data/blog";
import { services as SERVICES } from "./data/services";
import { CATALOG_CATEGORIES as CATALOG } from "./data/catalog";
import { AREA_PAGE_SLUGS } from "./pages/AreaPrintingPage";

export function render(url: string) {
  const helmetContext = {} as Partial<FilledContext>;

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const helmet = (helmetContext as FilledContext).helmet;
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

// Route manifest exposed to scripts/prerender.mjs so dynamic routes
// (`/blog/:slug`, `/services/:slug`, `/products/:categorySlug`) are emitted as
// static HTML alongside the fixed marketing pages.
export const STATIC_ROUTES = [
  "/",
  "/products",
  "/visiting-cards",
  "/brochures",
  "/bill-books",
  "/wedding-cards",
  "/letterheads",
  "/about",
  "/contact",
  "/gallery",
  "/services",
  "/get-quote",
  // "/orders" intentionally excluded from prerender — the page itself is
  // marked noindex/nofollow via SEOHead, and emitting a static HTML copy
  // wastes crawl budget and risks accidental indexation.
  "/banners",
  "/stickers",
  "/rubber-stamps",
  "/catalogues",
  "/pvc-id-cards",
  ...AREA_PAGE_SLUGS.map((slug) => `/${slug}`),
  // Head-keyword exact-match pages.
  "/printing-press-chennai",
  "/offset-printing-press-in-chennai",
  "/digital-printing-press-in-chennai",
  // Industry-vertical pages.
  "/industries/pharma-printing-chennai",
  "/industries/automotive-printing-chennai",
  "/industries/hospital-printing-chennai",
  "/industries/hospitality-printing-chennai",
  "/industries/education-printing-chennai",
  "/industries/it-printing-chennai",
  // High-intent service deep-dives.
  "/business-cards-chennai",
  "/large-format-signage-chennai",
  "/custom-packaging-printing-chennai",
  // Pillar guide.
  "/chennai-printing-guide",
  "/reseller",
  "/blog",
  "/printing-guide",
];

export function allRoutes(): string[] {
  const dynamic = [
    ...BLOG_POSTS.map((p) => `/blog/${p.slug}`),
    ...SERVICES.map((s) => `/services/${s.slug}`),
    ...CATALOG.map((c) => `/products/${c.slug}`),
  ];
  return Array.from(new Set([...STATIC_ROUTES, ...dynamic]));
}
