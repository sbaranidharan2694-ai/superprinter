import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { LangProvider } from "@/contexts/LangContext";
import UnifiedLayout from "./components/layout/UnifiedLayout";
import Index from "./pages/Index";
import VisitingCardsPage from "./pages/VisitingCardsPage";
import BrochuresPage from "./pages/BrochuresPage";
import BillBooksPage from "./pages/BillBooksPage";
import WeddingCardsPage from "./pages/WeddingCardsPage";
import LetterheadsPage from "./pages/LetterheadsPage";
import ResellerPage from "./pages/ResellerPage";
import BannersPage from "./pages/BannersPage";
import StickersPage from "./pages/StickersPage";
import RubberStampsPage from "./pages/RubberStampsPage";
import CataloguesPage from "./pages/CataloguesPage";
import PvcIdCardsPage from "./pages/PvcIdCardsPage";
import PrintingGuide from "./pages/PrintingGuide";
import BlogPost from "./pages/BlogPost";
import BlogIndex from "./pages/BlogIndex";
import ProductsCatalogPage from "./pages/ProductsCatalogPage";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import GetQuote from "./pages/GetQuote";
import AreaPrintingPage, { AREA_PAGE_SLUGS } from "./pages/AreaPrintingPage";
import HeadKeywordPage from "./pages/HeadKeywordPage";
import IndustryPage from "./pages/IndustryPage";
import ChennaiPrintingGuidePage from "./pages/ChennaiPrintingGuidePage";
import Orders from "./pages/Orders";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LangProvider>
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
            {/* All 30 suburb routes listed explicitly. React Router v6
                does accept `.map()` arrays inside <Routes>, but in this
                project's setup the mapped routes failed to register at
                runtime for slugs added after the initial 10 (Pallavaram
                worked, T. Nagar 404'd). Keeping the source of truth in
                AREA_PAGE_SLUGS for sitemap + prerender + ChennaiAreasSection;
                only the route list itself is duplicated here. */}
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
            <Route path="/printing-press-alandur" element={<AreaPrintingPage />} />
            <Route path="/printing-press-t-nagar" element={<AreaPrintingPage />} />
            <Route path="/printing-press-anna-nagar" element={<AreaPrintingPage />} />
            <Route path="/printing-press-porur" element={<AreaPrintingPage />} />
            <Route path="/printing-press-omr" element={<AreaPrintingPage />} />
            <Route path="/printing-press-sholinganallur" element={<AreaPrintingPage />} />
            <Route path="/printing-press-vadapalani" element={<AreaPrintingPage />} />
            <Route path="/printing-press-mylapore" element={<AreaPrintingPage />} />
            <Route path="/printing-press-saidapet" element={<AreaPrintingPage />} />
            <Route path="/printing-press-ekkattuthangal" element={<AreaPrintingPage />} />
            <Route path="/printing-press-ashok-nagar" element={<AreaPrintingPage />} />
            <Route path="/printing-press-egmore" element={<AreaPrintingPage />} />
            <Route path="/printing-press-anna-salai" element={<AreaPrintingPage />} />
            <Route path="/printing-press-manapakkam" element={<AreaPrintingPage />} />
            <Route path="/printing-press-thiruvanmiyur" element={<AreaPrintingPage />} />
            <Route path="/printing-press-mogappair" element={<AreaPrintingPage />} />
            <Route path="/printing-press-kodambakkam" element={<AreaPrintingPage />} />
            <Route path="/printing-press-nungambakkam" element={<AreaPrintingPage />} />
            <Route path="/printing-press-ambattur" element={<AreaPrintingPage />} />
            <Route path="/printing-press-avadi" element={<AreaPrintingPage />} />
            {/* Head-keyword exact-match landing pages (May 2026 — built to
                compete with imprintwings.com's /printing-press-in-chennai.php
                pattern for the head commercial query). */}
            <Route path="/printing-press-chennai" element={<HeadKeywordPage />} />
            <Route path="/offset-printing-press-in-chennai" element={<HeadKeywordPage />} />
            <Route path="/digital-printing-press-in-chennai" element={<HeadKeywordPage />} />
            {/* Specific high-intent service deep-dives. */}
            <Route path="/business-cards-chennai" element={<HeadKeywordPage />} />
            <Route path="/large-format-signage-chennai" element={<HeadKeywordPage />} />
            <Route path="/custom-packaging-printing-chennai" element={<HeadKeywordPage />} />
            {/* Pillar guide (broad-query authority hub). */}
            <Route path="/chennai-printing-guide" element={<ChennaiPrintingGuidePage />} />
            {/* Industry-vertical pages — B2B intent positioning. */}
            <Route path="/industries/pharma-printing-chennai" element={<IndustryPage />} />
            <Route path="/industries/automotive-printing-chennai" element={<IndustryPage />} />
            <Route path="/industries/hospital-printing-chennai" element={<IndustryPage />} />
            <Route path="/industries/hospitality-printing-chennai" element={<IndustryPage />} />
            <Route path="/industries/education-printing-chennai" element={<IndustryPage />} />
            <Route path="/industries/it-printing-chennai" element={<IndustryPage />} />
            <Route path="/reseller" element={<ResellerPage />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/printing-guide" element={<PrintingGuide />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LangProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
