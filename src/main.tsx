import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { loadRouteForPath } from "./routeChunks";
import "./index.css";

/**
 * Hydration order:
 *  1. Resolve the current route's chunk via the dynamic-import map. JS module
 *     caches share state, so once the chunk lands, the matching React.lazy()
 *     inside App.client resolves synchronously without showing its Suspense
 *     fallback — that's what keeps hydration aligned with the SSR HTML.
 *  2. Load App.client (a tiny module — the route components are external chunks).
 *  3. Hydrate (or fresh-mount when no SSR DOM exists, e.g. in dev).
 *
 * If the chunk preload fails (offline, network), we still try to hydrate;
 * React will surface the lazy boundary and show the Suspense fallback.
 */
async function start() {
  const root = document.getElementById("root");
  if (!root) return;

  const pathname = window.location.pathname;
  const loadCurrent = loadRouteForPath(pathname);

  const [, mod] = await Promise.all([
    loadCurrent ?? Promise.resolve(),
    import("./App.client"),
  ]);
  const App = mod.default;

  const tree = (
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  );

  if (root.firstElementChild) {
    hydrateRoot(root, tree);
  } else {
    createRoot(root).render(tree);
  }
}

start();
