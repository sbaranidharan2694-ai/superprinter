/**
 * Pathname → dynamic import map.
 *
 * Used by `main.tsx` to fetch the *current* route's chunk BEFORE calling
 * `hydrateRoot`. Because Vite/JS module caches share state across all
 * `import()` calls for the same specifier, the `React.lazy(...)` defined in
 * `App.client.tsx` resolves synchronously when React renders it (its loader
 * hits the already-resolved module). That preserves SSR/client DOM parity and
 * avoids hydration mismatches.
 *
 * The exact-path map is derived from the shared `ROUTES` manifest, so it can
 * never miss a fixed route again. Only genuinely dynamic (`:param`) families
 * need regex matching, listed below.
 */
import { ROUTES } from "./routes";

type Loader = () => Promise<unknown>;

// Every fixed (non-param) route, straight from the manifest.
const exactRoutes: Record<string, Loader> = {};
for (const r of ROUTES) {
  if (!r.dynamic) exactRoutes[r.path] = r.load;
}

// Param routes only — match by prefix/regex. (Head-keyword, area, and industry
// pages are now exact lookups above, so the previous head-vs-area ordering
// hazard is gone.)
const prefixedRoutes: Array<[RegExp, Loader]> = [
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
