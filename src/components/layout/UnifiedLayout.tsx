import { Outlet } from "react-router-dom";
import TopInfoBar from "./TopInfoBar";
import UnifiedHeader from "./UnifiedHeader";
import UnifiedFooter from "./UnifiedFooter";
import MobileBottomCTA from "./MobileBottomCTA";
import FloatingWhatsApp from "../FloatingWhatsApp";
import ScrollToTop from "../ScrollToTop";
import { SCROLL_OFFSET } from "@/utils/scroll";

const UnifiedLayout = () => (
  <div className="min-h-screen bg-background">
    <ScrollToTop />
    <TopInfoBar />
    <UnifiedHeader />
    <main className="pb-20 md:pb-0" style={{ paddingTop: SCROLL_OFFSET }}>
      <Outlet />
    </main>
    <UnifiedFooter />
    <MobileBottomCTA />
    {/* Floating buttons: on mobile they sit above the 64px bottom bar; layout hides overlap via padding-bottom on main */}
    <FloatingWhatsApp />
  </div>
);

export default UnifiedLayout;
