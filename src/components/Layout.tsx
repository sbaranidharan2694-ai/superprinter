import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import FloatingWhatsApp from "./FloatingWhatsApp";
import ScrollToTop from "./ScrollToTop";

const Layout = () => (
  <div className="min-h-screen bg-background">
    <ScrollToTop />
    <TopBar />
    <SiteHeader />
    <Outlet />
    <SiteFooter />
    <FloatingWhatsApp />
  </div>
);

export default Layout;
