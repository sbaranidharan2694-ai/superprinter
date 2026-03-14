import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { scrollToSection } from "@/utils/scroll";
import WhatsAppStatus from "@/components/WhatsAppStatus";
import { useLang } from "@/contexts/LangContext";

const SECTION_IDS = ["products", "why-us", "wedding-cards", "process", "reviews", "portfolio", "finishes", "quote-form", "about", "faq", "contact"] as const;

/** Main nav: scroll-to-section on home, or hash on other pages */
const MAIN_NAV: { label: string; id: string }[] = [
  { label: "Home", id: "" },
  { label: "Portfolio", id: "portfolio" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const UnifiedHeader = () => {
  const { t } = useLang();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [logoImgFailed, setLogoImgFailed] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
      const scrollY = window.scrollY + 140;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveId(SECTION_IDS[i]);
          return;
        }
      }
      setActiveId("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenu]);

  const atTop = !scrolled;
  const baseNavClass = "nav-link px-4 py-2.5 text-[14px] font-ui font-medium rounded-full transition-all duration-300 ease-spring";
  const inactiveClass = atTop
    ? "text-white/90 hover:text-gold hover:bg-white/5"
    : "text-inherit hover:text-gold hover:bg-white/5";
  const linkClass = (id: string) =>
    `${baseNavClass} ${activeId === id ? "text-gold bg-gold/10" : inactiveClass}`;
  const isProducts = location.pathname === "/products";

  return (
    <header
      className={`fixed top-11 left-0 right-0 z-[101] transition-all duration-300 ${
        atTop
          ? "text-white backdrop-blur-md border-b border-white/10"
          : "bg-white/98 backdrop-blur-md border-b border-gray-100 text-ink-black"
      }`}
      style={
        atTop
          ? { backgroundColor: "rgba(17,19,24,0.92)" }
          : { boxShadow: "0 2px 20px rgba(26,44,91,0.08), inset 0 1px 0 rgba(255,255,255,0.9)" }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between min-h-[72px] py-2">
        <Link
          to="/"
          onClick={(e) => { if (isHome) { e.preventDefault(); scrollToSection(""); } }}
          className="flex items-center gap-3 text-left shrink-0"
          aria-label="Super Printers Home"
        >
          {!logoImgFailed ? (
            <img
              src="/super-printers-logo.png"
              alt="Super Printers — 35 Years Experience"
              className="h-14 sm:h-16 w-auto object-contain"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.getAttribute("data-fallback") !== "done") {
                  target.setAttribute("data-fallback", "done");
                  target.src = "/super-printers-logo.svg";
                  target.onerror = () => setLogoImgFailed(true);
                } else {
                  setLogoImgFailed(true);
                }
              }}
            />
          ) : (
            <span
              className="flex items-center justify-center rounded-full border-2 font-display font-bold text-lg shrink-0"
              style={{
                width: 48,
                height: 48,
                borderColor: "var(--gold)",
                color: "var(--gold)",
              }}
              aria-hidden
            >
              SP
            </span>
          )}
          <span className={`font-display font-bold text-xl sm:text-2xl leading-tight tracking-tight ${atTop ? "text-white" : "text-navy"}`}>
            Super Printers
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => (isHome ? scrollToSection("") : window.location.assign("/"))}
            className={linkClass("")}
          >
            {t("Home")}
          </button>
          <Link
            to="/products"
            className={`${baseNavClass} ${isProducts ? "text-gold bg-gold/10" : inactiveClass}`}
          >
            {t("All Products")}
          </Link>
          {MAIN_NAV.filter((l) => l.id).map((link) => (
            <button
              key={link.id}
              onClick={() => {
                if (isHome) scrollToSection(link.id);
                else window.location.assign(`/#${link.id}`);
                setMobileMenu(false);
              }}
              className={linkClass(link.id)}
            >
              {t(link.label)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex">
            <WhatsAppStatus />
          </div>
          <a href="tel:+919840199878" className={`hidden md:inline text-sm font-medium hover:opacity-90 ${atTop ? "text-white/90" : "text-ink-black"}`}>
            {atTop ? "📞 Call" : "📞 +91 98401 99878"}
          </a>
          <button
            onClick={() => {
              scrollToSection("quote-form");
              setMobileMenu(false);
            }}
            className="btn-gold font-ui font-semibold text-sm px-5 py-2.5 rounded-full"
          >
            WhatsApp Order
          </button>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-black/10 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 rounded-full bg-current transition-all ${mobileMenu ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 rounded-full bg-current transition-all ${mobileMenu ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 rounded-full bg-current transition-all ${mobileMenu ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      {mobileMenu && (
        <div
          className="lg:hidden fixed inset-0 top-[116px] bottom-0 bg-ink-black z-50 flex flex-col items-center justify-start pt-12 gap-0 overflow-y-auto"
          style={{ backgroundColor: "var(--ink-black)" }}
        >
          <button
            type="button"
            onClick={() => setMobileMenu(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <span className="text-2xl leading-none">×</span>
          </button>
          <Link
            to="/"
            onClick={(e) => { setMobileMenu(false); if (isHome) { e.preventDefault(); scrollToSection(""); } }}
            className="w-full py-5 px-6 text-left font-display text-2xl text-white hover:text-gold transition-colors border-b border-white/10"
          >
            {t("Home")}
          </Link>
          <Link
            to="/products"
            onClick={() => setMobileMenu(false)}
            className="w-full py-5 px-6 text-left font-display text-2xl text-white hover:text-gold transition-colors border-b border-white/10"
          >
            {t("All Products")}
          </Link>
          {MAIN_NAV.filter((l) => l.id).map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setMobileMenu(false);
                if (isHome) scrollToSection(link.id);
                else window.location.assign(`/#${link.id}`);
              }}
              className="w-full py-5 px-6 text-left font-display text-2xl text-white hover:text-gold transition-colors border-b border-white/10"
            >
              {t(link.label)}
            </button>
          ))}
          <div className="mt-8 flex flex-col gap-3 px-6 w-full">
            <a
              href="https://wa.me/919840199878?text=Hi%20Super%20Printers!%20I%20need%20a%20printing%20quote."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenu(false)}
              className="w-full py-4 rounded-full font-ui font-semibold text-center text-ink-black bg-gold"
              style={{ backgroundColor: "var(--gold)" }}
            >
              WhatsApp Order
            </a>
            <a href="tel:+919840199878" onClick={() => setMobileMenu(false)} className="w-full py-4 rounded-full font-ui font-semibold text-center text-white border-2 border-gold">
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default UnifiedHeader;
