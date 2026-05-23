import { Outlet } from "react-router-dom";
import TopInfoBar from "./TopInfoBar";
import UnifiedHeader from "./UnifiedHeader";
import UnifiedFooter from "./UnifiedFooter";
import MobileBottomCTA from "./MobileBottomCTA";
import DesktopStickyCTA from "./DesktopStickyCTA";
import FloatingWhatsApp from "../FloatingWhatsApp";
import ScrollToTop from "../ScrollToTop";
import { SCROLL_OFFSET } from "@/utils/scroll";

const UnifiedLayout = () => (
  <div className="min-h-screen bg-background">
    <ScrollToTop />
    <TopInfoBar />
    <UnifiedHeader />
    {/* `pb-[calc(...)]` Tailwind arbitrary value: 5rem (80px) clears the
        sticky MobileBottomCTA, env() extends it by the iPhone home-indicator
        height so iOS users don't get content clipped. Reset to 0 on md+. */}
    <main
      className="pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0"
      style={{ paddingTop: SCROLL_OFFSET }}
    >
      <Outlet />
    </main>
    <UnifiedFooter />
    <MobileBottomCTA />
    <DesktopStickyCTA />
    {/* Floating buttons: on mobile they sit above the 64px bottom bar; layout hides overlap via padding-bottom on main */}
    <FloatingWhatsApp />
  </div>
);

export default UnifiedLayout;
