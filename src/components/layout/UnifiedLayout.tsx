import { Outlet } from "react-router-dom";
import TopInfoBar from "./TopInfoBar";
import UnifiedHeader from "./UnifiedHeader";
import UnifiedFooter from "./UnifiedFooter";
import FloatingWhatsApp from "../FloatingWhatsApp";
import ScrollToTop from "../ScrollToTop";

const UnifiedLayout = () => (
  <div className="min-h-screen bg-background">
    <ScrollToTop />
    <TopInfoBar />
    <UnifiedHeader />
    <Outlet />
    <UnifiedFooter />
    <FloatingWhatsApp />
  </div>
);

export default UnifiedLayout;
