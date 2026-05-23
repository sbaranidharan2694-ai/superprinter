/**
 * Pathname → dynamic import map.
 *
 * Used by `main.tsx` to fetch the *current* route's chunk BEFORE calling
 * `hydrateRoot`. Because Vite/JS module caches share state across all
 * `import()` calls for the same specifier, the `React.lazy(...)` defined in
 * `App.client.tsx` resolves synchronously when React renders it (its loader
 * hits the already-resolved module). That preserves SSR/client DOM parity
 * and avoids hydration mismatches.
 *
 * Add a new entry here whenever a new route is added to App.client.tsx.
 */

type Loader = () => Promise<unknown>;

const exactRoutes: Record<string, Loader> = {
  "/": () => import("./pages/Index"),
  "/products": () => import("./pages/ProductsCatalogPage"),
  "/visiting-cards": () => import("./pages/VisitingCardsPage"),
  "/brochures": () => import("./pages/BrochuresPage"),
  "/bill-books": () => import("./pages/BillBooksPage"),
  "/wedding-cards": () => import("./pages/WeddingCardsPage"),
  "/letterheads": () => import("./pages/LetterheadsPage"),
  "/about": () => import("./pages/About"),
  "/contact": () => import("./pages/Contact"),
  "/gallery": () => import("./pages/Gallery"),
  "/services": () => import("./pages/Services"),
  "/get-quote": () => import("./pages/GetQuote"),
  "/orders": () => import("./pages/Orders"),
  "/banners": () => import("./pages/BannersPage"),
  "/stickers": () => import("./pages/StickersPage"),
  "/rubber-stamps": () => import("./pages/RubberStampsPage"),
  "/catalogues": () => import("./pages/CataloguesPage"),
  "/pvc-id-cards": () => import("./pages/PvcIdCardsPage"),
  "/reseller": () => import("./pages/ResellerPage"),
  "/blog": () => import("./pages/BlogIndex"),
  "/printing-guide": () => import("./pages/PrintingGuide"),
};

const prefixedRoutes: Array<[RegExp, Loader]> = [
  [/^\/printing-press-[a-z-]+$/, () => import("./pages/AreaPrintingPage")],
  [/^\/services\/[a-z-]+$/, () => import("./pages/ServiceDetail")],
  [/^\/blog\/[a-z-]+$/, () => import("./pages/BlogPost")],
  [/^\/products\/[a-z-]+$/, () => import("./pages/ProductsCatalogPage")],
];

export function loadRouteForPath(pathname: string): Promise<unknown> | null {
  if (exactRoutes[pathname]) return exactRoutes[pathname]();
  for (const [re, loader] of prefixedRoutes) {
    if (re.test(pathname)) return loader();
  }
  return null;
}
