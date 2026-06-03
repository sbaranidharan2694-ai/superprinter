/**
 * Client-only App: same routing table as `App.tsx` but every non-Index route
 * is loaded via `React.lazy`. The route list itself comes from the shared
 * `ROUTES` manifest (./routes), so it can no longer drift from the eager SSR
 * table, the preload map, or the prerender manifest.
 *
 * `main.tsx` preloads the current route's chunk (see routeChunks.ts) before
 * `hydrateRoot`, so the lazy component resolves synchronously on first paint —
 * no Suspense fallback flash, no SSR/client DOM diff.
 */
import { Suspense, lazy, type ComponentType } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { LangProvider } from "@/contexts/LangContext";
import UnifiedLayout from "./components/layout/UnifiedLayout";
import Index from "./pages/Index"; // Keep eager — most common landing.
import { ROUTES } from "./routes";

// Build the lazy components once, deduped by id so routes that share a
// component (the 31 area pages, head-keyword pages, industry pages) reuse a
// single lazy wrapper instead of creating one per path.
const lazyById: Record<string, ComponentType<unknown>> = {};
for (const r of ROUTES) {
  if (r.id === "Index") continue;
  if (!lazyById[r.id]) lazyById[r.id] = lazy(r.load);
}

const queryClient = new QueryClient();

// `fallback={null}` — for the *initial* route, main.tsx has already loaded the
// chunk so the lazy resolves synchronously and the fallback is never shown.
// For in-page navigation to a not-yet-loaded route, briefly showing nothing is
// preferable to a spinner flash.
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LangProvider>
        <Suspense fallback={null}>
          <Routes>
            <Route element={<UnifiedLayout />}>
              {ROUTES.map((r) => {
                const Component = r.id === "Index" ? Index : lazyById[r.id];
                return <Route key={r.path} path={r.path} element={<Component />} />;
              })}
            </Route>
          </Routes>
        </Suspense>
      </LangProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
