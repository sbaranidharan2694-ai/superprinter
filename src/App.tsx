import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangProvider } from "@/contexts/LangContext";
import UnifiedLayout from "./components/layout/UnifiedLayout";
import Index from "./pages/Index";
import VisitingCardsPage from "./pages/VisitingCardsPage";
import ResellerPage from "./pages/ResellerPage";
import NotFound from "./pages/NotFound";

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
              <Route path="/visiting-cards" element={<VisitingCardsPage />} />
              <Route path="/brochures" element={<BrochuresPage />} />
              <Route path="/bill-books" element={<BillBooksPage />} />
              <Route path="/wedding-cards" element={<WeddingCardsPage />} />
              <Route path="/letterheads" element={<LetterheadsPage />} />
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
