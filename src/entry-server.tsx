import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type FilledContext } from "react-helmet-async";
import App from "./App";
import { BLOG_POSTS } from "./data/blog";
import { services as SERVICES } from "./data/services";
import { CATALOG_CATEGORIES as CATALOG } from "./data/catalog";

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
  "/orders",
  "/banners",
  "/stickers",
  "/rubber-stamps",
  "/catalogues",
  "/pvc-id-cards",
  "/printing-press-pallavaram",
  "/printing-press-tambaram",
  "/printing-press-chromepet",
  "/printing-press-pammal",
  "/printing-press-perungalathur",
  "/printing-press-velachery",
  "/printing-press-nanganallur",
  "/printing-press-medavakkam",
  "/printing-press-guindy",
  "/printing-press-adyar",
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
