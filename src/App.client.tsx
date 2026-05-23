/**
 * Client-only App: identical routing table to `App.tsx` but each non-Index
 * route is loaded via `React.lazy`. The main entry (`main.tsx`) preloads the
 * current route's chunk before `hydrateRoot` so hydration sees the resolved
 * module synchronously — no Suspense fallback flash, no SSR/client DOM diff.
 *
 * `App.tsx` (eager imports) is still used by the SSR build via
 * `entry-server.tsx` so prerendered HTML contains full markup.
 */
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { LangProvider } from "@/contexts/LangContext";
import UnifiedLayout from "./components/layout/UnifiedLayout";
import Index from "./pages/Index"; // Keep eager — most common landing.

const VisitingCardsPage = lazy(() => import("./pages/VisitingCardsPage"));
const BrochuresPage = lazy(() => import("./pages/BrochuresPage"));
const BillBooksPage = lazy(() => import("./pages/BillBooksPage"));
const WeddingCardsPage = lazy(() => import("./pages/WeddingCardsPage"));
const LetterheadsPage = lazy(() => import("./pages/LetterheadsPage"));
const ResellerPage = lazy(() => import("./pages/ResellerPage"));
const BannersPage = lazy(() => import("./pages/BannersPage"));
const StickersPage = lazy(() => import("./pages/StickersPage"));
const RubberStampsPage = lazy(() => import("./pages/RubberStampsPage"));
const CataloguesPage = lazy(() => import("./pages/CataloguesPage"));
const PvcIdCardsPage = lazy(() => import("./pages/PvcIdCardsPage"));
const PrintingGuide = lazy(() => import("./pages/PrintingGuide"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const ProductsCatalogPage = lazy(() => import("./pages/ProductsCatalogPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const GetQuote = lazy(() => import("./pages/GetQuote"));
const AreaPrintingPage = lazy(() => import("./pages/AreaPrintingPage"));
const Orders = lazy(() => import("./pages/Orders"));

const queryClient = new QueryClient();

// `fallback={null}` — for the *initial* route, main.tsx has already loaded
// the chunk so the lazy resolves synchronously and the fallback is never
// shown. For in-page navigation to a not-yet-loaded route, briefly showing
// nothing is preferable to a spinner flash.
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LangProvider>
        <Suspense fallback={null}>
          <Routes>
            <Route element={<UnifiedLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<ProductsCatalogPage />} />
              <Route path="/products/:categorySlug" element={<ProductsCatalogPage />} />
              <Route path="/visiting-cards" element={<VisitingCardsPage />} />
              <Route path="/brochures" element={<BrochuresPage />} />
              <Route path="/bill-books" element={<BillBooksPage />} />
              <Route path="/wedding-cards" element={<WeddingCardsPage />} />
              <Route path="/letterheads" element={<LetterheadsPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/get-quote" element={<GetQuote />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/banners" element={<BannersPage />} />
              <Route path="/stickers" element={<StickersPage />} />
              <Route path="/rubber-stamps" element={<RubberStampsPage />} />
              <Route path="/catalogues" element={<CataloguesPage />} />
              <Route path="/pvc-id-cards" element={<PvcIdCardsPage />} />
              <Route path="/printing-press-pallavaram" element={<AreaPrintingPage />} />
              <Route path="/printing-press-tambaram" element={<AreaPrintingPage />} />
              <Route path="/printing-press-chromepet" element={<AreaPrintingPage />} />
              <Route path="/printing-press-pammal" element={<AreaPrintingPage />} />
              <Route path="/printing-press-perungalathur" element={<AreaPrintingPage />} />
              <Route path="/printing-press-velachery" element={<AreaPrintingPage />} />
              <Route path="/printing-press-nanganallur" element={<AreaPrintingPage />} />
              <Route path="/printing-press-medavakkam" element={<AreaPrintingPage />} />
              <Route path="/printing-press-guindy" element={<AreaPrintingPage />} />
              <Route path="/printing-press-adyar" element={<AreaPrintingPage />} />
              <Route path="/reseller" element={<ResellerPage />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/printing-guide" element={<PrintingGuide />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </LangProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
