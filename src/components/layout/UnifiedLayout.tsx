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
    {/* Skip link: first focusable element on every page. Visually hidden
        until focused (keyboard Tab), then snaps in at top-left so keyboard
        users can jump past the marquee + header straight to content. WCAG
        2.4.1 (Bypass Blocks). */}
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:rounded focus:bg-foreground focus:text-background focus:font-semibold focus:text-sm focus:shadow-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-foreground"
    >
      Skip to main content
    </a>
    <TopInfoBar />
    <UnifiedHeader />
    {/* `pb-[calc(...)]` Tailwind arbitrary value: 5rem (80px) clears the
        sticky MobileBottomCTA, env() extends it by the iPhone home-indicator
        height so iOS users don't get content clipped. Reset to 0 on md+. */}
    <main
      id="main-content"
      tabIndex={-1}
      className="pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0 focus:outline-none"
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
