import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import type { ComponentType } from "react";
import { LangProvider } from "@/contexts/LangContext";
import UnifiedLayout from "./components/layout/UnifiedLayout";
import { ROUTES } from "./routes";

// Eager component bindings for SSR / renderToString — kept here (NOT in
// routes.tsx) because routes.tsx is imported by the client bundle, where
// static page imports would defeat code-splitting. Keyed by RouteDef.id.
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
import AreaPrintingPage from "./pages/AreaPrintingPage";
import HeadKeywordPage from "./pages/HeadKeywordPage";
import IndustriesIndexPage from "./pages/IndustriesIndexPage";
import IndustryPage from "./pages/IndustryPage";
import ChennaiPrintingGuidePage from "./pages/ChennaiPrintingGuidePage";
import OurPressPage from "./pages/OurPressPage";
import ClientsPage from "./pages/ClientsPage";
import Orders from "./pages/Orders";
import WeddingStylePage from "./pages/WeddingStylePage";

const EAGER_COMPONENTS: Record<string, ComponentType<unknown>> = {
  Index,
  VisitingCardsPage,
  BrochuresPage,
  BillBooksPage,
  WeddingCardsPage,
  LetterheadsPage,
  ResellerPage,
  BannersPage,
  StickersPage,
  RubberStampsPage,
  CataloguesPage,
  PvcIdCardsPage,
  PrintingGuide,
  BlogPost,
  BlogIndex,
  ProductsCatalogPage,
  NotFound,
  About,
  Contact,
  Gallery,
  Services,
  ServiceDetail,
  GetQuote,
  AreaPrintingPage,
  HeadKeywordPage,
  IndustriesIndexPage,
  IndustryPage,
  ChennaiPrintingGuidePage,
  OurPressPage,
  ClientsPage,
  Orders,
  WeddingStylePage,
};

// Fail loudly in dev if routes.tsx references an id with no eager binding.
if (import.meta.env.DEV) {
  for (const r of ROUTES) {
    if (!EAGER_COMPONENTS[r.id]) {
      throw new Error(`App.tsx: no eager component registered for route id "${r.id}" (path ${r.path})`);
    }
  }
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LangProvider>
        <LazyMotion features={domAnimation}>
          <Routes>
            <Route element={<UnifiedLayout />}>
              {ROUTES.map((r) => {
                const Component = EAGER_COMPONENTS[r.id];
                return <Route key={r.path} path={r.path} element={<Component />} />;
              })}
            </Route>
          </Routes>
        </LazyMotion>
      </LangProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
