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
            {AREA_PAGE_SLUGS.map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<AreaPrintingPage />} />
            ))}
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
