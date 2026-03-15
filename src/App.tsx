import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangProvider } from "@/contexts/LangContext";
import UnifiedLayout from "./components/layout/UnifiedLayout";
import Index from "./pages/Index";
import VisitingCardsPage from "./pages/VisitingCardsPage";
import BrochuresPage from "./pages/BrochuresPage";
import BillBooksPage from "./pages/BillBooksPage";
import WeddingCardsPage from "./pages/WeddingCardsPage";
import LetterheadsPage from "./pages/LetterheadsPage";
import ResellerPage from "./pages/ResellerPage";
import BlogPost from "./pages/BlogPost";
import ProductsCatalogPage from "./pages/ProductsCatalogPage";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import GetQuote from "./pages/GetQuote";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LangProvider>
        <BrowserRouter>
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
              <Route path="/get-quote" element={<GetQuote />} />
              <Route path="/reseller" element={<ResellerPage />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LangProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
