import { Outlet } from "react-router-dom";
import TopInfoBar from "./TopInfoBar";
import UnifiedHeader from "./UnifiedHeader";
import UnifiedFooter from "./UnifiedFooter";
import MobileBottomCTA from "./MobileBottomCTA";
import FloatingWhatsApp from "../FloatingWhatsApp";
import ScrollToTop from "../ScrollToTop";

const UnifiedLayout = () => (
  <div className="min-h-screen bg-background">
    <ScrollToTop />
    <TopInfoBar />
    <UnifiedHeader />
    <main className="pb-14 md:pb-0">
      <Outlet />
    </main>
    <UnifiedFooter />
    <MobileBottomCTA />
    <FloatingWhatsApp />
  </div>
);

export default UnifiedLayout;
