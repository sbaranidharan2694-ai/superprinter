/**
 * Single source of truth for the app's route table.
 *
 * Consumed by all four places that previously hand-maintained their own copy:
 *   - App.tsx          (eager <Route> table for SSR / renderToString)
 *   - App.client.tsx   (React.lazy <Route> table for the hydrated client)
 *   - routeChunks.ts   (pathname → chunk preload map)
 *   - entry-server.tsx (STATIC_ROUTES prerender manifest)
 *
 * Adding a route (or a suburb) now means editing ONE list — which removes the
 * "first 10 area pages work, the rest 404" class of bug that came from these
 * four lists drifting out of sync.
 *
 * IMPORTANT: this module is imported by the *client* bundle (App.client.tsx),
 * so it must NOT statically import page components — that would eager-bundle
 * every page and defeat code-splitting. It exposes dynamic-import `load`
 * functions instead. The eager component bindings SSR needs live in App.tsx,
 * keyed by `id` (see EAGER_COMPONENTS there).
 */
import type { ComponentType } from "react";
import { AREA_PAGE_SLUGS } from "./pages/AreaPrintingPage";
import { WEDDING_STYLE_SLUGS } from "./data/weddingStyles";

type Loader = () => Promise<{ default: ComponentType<unknown> }>;

export interface RouteDef {
  /** react-router path, e.g. "/visiting-cards", "/services/:slug", "*". */
  path: string;
  /** Stable id → eager component registry in App.tsx. */
  id: string;
  /** Dynamic import for client lazy() + routeChunks preload. */
  load: Loader;
  /** Path has a param or is the catch-all — never prerendered as a static file. */
  dynamic?: boolean;
  /** Emit a static HTML file at build time. Defaults to true for non-dynamic routes. */
  prerender?: boolean;
}

// Head-keyword exact-match landing pages — all render <HeadKeywordPage/>,
// which derives its content from the pathname.
const HEAD_KEYWORD_SLUGS = [
  "printing-press-chennai",
  "offset-printing-press-in-chennai",
  "digital-printing-press-in-chennai",
  "business-cards-chennai",
  "large-format-signage-chennai",
  "custom-packaging-printing-chennai",
  "stationery-printing-chennai",
  "online-printing-chennai",
  "digital-printing-chennai",
  "flex-banner-printing-chennai",
];

// Industry-vertical pages — all render <IndustryPage/>.
const INDUSTRY_SLUGS = [
  "pharma-printing-chennai",
  "automotive-printing-chennai",
  "hospital-printing-chennai",
  "hospitality-printing-chennai",
  "education-printing-chennai",
  "it-printing-chennai",
];

const loadArea: Loader = () => import("./pages/AreaPrintingPage");
const loadHead: Loader = () => import("./pages/HeadKeywordPage");
const loadIndustry: Loader = () => import("./pages/IndustryPage");
const loadWeddingStyle: Loader = () => import("./pages/WeddingStylePage");

export const ROUTES: RouteDef[] = [
  { path: "/", id: "Index", load: () => import("./pages/Index") },
  { path: "/products", id: "ProductsCatalogPage", load: () => import("./pages/ProductsCatalogPage") },
  { path: "/products/:categorySlug", id: "ProductsCatalogPage", load: () => import("./pages/ProductsCatalogPage"), dynamic: true },
  { path: "/visiting-cards", id: "VisitingCardsPage", load: () => import("./pages/VisitingCardsPage") },
  { path: "/brochures", id: "BrochuresPage", load: () => import("./pages/BrochuresPage") },
  { path: "/bill-books", id: "BillBooksPage", load: () => import("./pages/BillBooksPage") },
  { path: "/wedding-cards", id: "WeddingCardsPage", load: () => import("./pages/WeddingCardsPage") },
  { path: "/letterheads", id: "LetterheadsPage", load: () => import("./pages/LetterheadsPage") },
  { path: "/about", id: "About", load: () => import("./pages/About") },
  { path: "/contact", id: "Contact", load: () => import("./pages/Contact") },
  { path: "/gallery", id: "Gallery", load: () => import("./pages/Gallery") },
  { path: "/services", id: "Services", load: () => import("./pages/Services") },
  { path: "/services/:slug", id: "ServiceDetail", load: () => import("./pages/ServiceDetail"), dynamic: true },
  { path: "/get-quote", id: "GetQuote", load: () => import("./pages/GetQuote") },
  // /orders is noindex (SEOHead) — kept routable but excluded from prerender.
  { path: "/orders", id: "Orders", load: () => import("./pages/Orders"), prerender: false },
  { path: "/banners", id: "BannersPage", load: () => import("./pages/BannersPage") },
  { path: "/stickers", id: "StickersPage", load: () => import("./pages/StickersPage") },
  { path: "/rubber-stamps", id: "RubberStampsPage", load: () => import("./pages/RubberStampsPage") },
  { path: "/catalogues", id: "CataloguesPage", load: () => import("./pages/CataloguesPage") },
  { path: "/pvc-id-cards", id: "PvcIdCardsPage", load: () => import("./pages/PvcIdCardsPage") },

  // Suburb area pages — single source: AREA_PAGE_SLUGS.
  ...AREA_PAGE_SLUGS.map((slug): RouteDef => ({
    path: `/${slug}`,
    id: "AreaPrintingPage",
    load: loadArea,
  })),

  // Head-keyword exact-match landing pages.
  ...HEAD_KEYWORD_SLUGS.map((slug): RouteDef => ({
    path: `/${slug}`,
    id: "HeadKeywordPage",
    load: loadHead,
  })),

  // Wedding-card tradition/style landing pages (Hindu/Christian/Muslim/Tamil).
  ...WEDDING_STYLE_SLUGS.map((slug): RouteDef => ({
    path: `/${slug}`,
    id: "WeddingStylePage",
    load: loadWeddingStyle,
  })),

  { path: "/chennai-printing-guide", id: "ChennaiPrintingGuidePage", load: () => import("./pages/ChennaiPrintingGuidePage") },
  { path: "/our-press", id: "OurPressPage", load: () => import("./pages/OurPressPage") },
  { path: "/clients", id: "ClientsPage", load: () => import("./pages/ClientsPage") },

  // Industry-vertical pages.
  ...INDUSTRY_SLUGS.map((slug): RouteDef => ({
    path: `/industries/${slug}`,
    id: "IndustryPage",
    load: loadIndustry,
  })),

  { path: "/reseller", id: "ResellerPage", load: () => import("./pages/ResellerPage") },
  { path: "/blog", id: "BlogIndex", load: () => import("./pages/BlogIndex") },
  { path: "/blog/:slug", id: "BlogPost", load: () => import("./pages/BlogPost"), dynamic: true },
  { path: "/printing-guide", id: "PrintingGuide", load: () => import("./pages/PrintingGuide") },
  { path: "*", id: "NotFound", load: () => import("./pages/NotFound"), dynamic: true, prerender: false },
];

/** Fixed (non-param) routes to emit as static HTML at build time. */
export function staticRoutePaths(): string[] {
  return ROUTES.filter((r) => !r.dynamic && r.prerender !== false).map((r) => r.path);
}
