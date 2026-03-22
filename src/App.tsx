import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangProvider } from "@/contexts/LangContext";
import UnifiedLayout from "./components/layout/UnifiedLayout";
import Index from "./pages/Index";

const VisitingCardsPage = lazy(() => import("./pages/VisitingCardsPage"));
const BrochuresPage = lazy(() => import("./pages/BrochuresPage"));
const BillBooksPage = lazy(() => import("./pages/BillBooksPage"));
const WeddingCardsPage = lazy(() => import("./pages/WeddingCardsPage"));
const LetterheadsPage = lazy(() => import("./pages/LetterheadsPage"));
const ResellerPage = lazy(() => import("./pages/ResellerPage"));
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

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div
    className="min-h-[50vh] flex flex-col items-center justify-center gap-3"
    style={{ background: "var(--background, #fff)", color: "var(--foreground, #1a1a2e)" }}
  >
    <div
      className="h-9 w-9 rounded-full border-2 border-t-transparent animate-spin shrink-0"
      style={{ borderColor: "var(--gold, #c9a84c)", borderTopColor: "transparent" }}
      aria-hidden
    />
    <p className="text-sm opacity-70" style={{ fontFamily: "var(--font-body)" }}>
      Loading…
    </p>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LangProvider>
        <BrowserRouter>
          <Suspense fallback={<RouteFallback />}>
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
                <Route path="/tambaram-printing" element={<AreaPrintingPage />} />
                <Route path="/chromepet-printing" element={<AreaPrintingPage />} />
                <Route path="/pammal-printing" element={<AreaPrintingPage />} />
                <Route path="/perungalathur-printing" element={<AreaPrintingPage />} />
                <Route path="/velachery-printing" element={<AreaPrintingPage />} />
                <Route path="/nanganallur-printing" element={<AreaPrintingPage />} />
                <Route path="/medavakkam-printing" element={<AreaPrintingPage />} />
                <Route path="/guindy-printing" element={<AreaPrintingPage />} />
                <Route path="/adyar-printing" element={<AreaPrintingPage />} />
                <Route path="/reseller" element={<ResellerPage />} />
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LangProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
