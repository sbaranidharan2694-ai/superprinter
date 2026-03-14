import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { scrollToSection } from "@/utils/scroll";
import { CATALOG_CATEGORIES } from "@/data/catalog";
import WhatsAppStatus from "@/components/WhatsAppStatus";
import SuperPrintersLogo from "@/components/SuperPrintersLogo";
import { useLang } from "@/contexts/LangContext";

const SECTION_IDS = ["products", "why-us", "wedding-cards", "process", "reviews", "portfolio", "finishes", "quote-form", "about", "faq", "contact"] as const;

/** Nav items that scroll to section on home page */
const SCROLL_NAV: { label: string; id: string }[] = [
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeId, setActiveId] = useState("");
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
  const linkClass = (id: string) =>
    `nav-link px-4 py-2.5 text-[14px] font-ui font-medium rounded-full transition-all duration-300 ease-spring ${
      activeId === id ? "text-gold bg-gold/10" : "text-inherit hover:text-gold hover:bg-white/5"
    }`;

  return (
    <header
      className={`fixed top-11 left-0 right-0 z-[101] transition-all duration-300 ${
        atTop
          ? "text-white backdrop-blur-md border-b border-white/10"
          : "bg-white/98 backdrop-blur-md border-b border-gray-100"
      }`}
      style={
        atTop
          ? { backgroundColor: "rgba(17,19,24,0.92)" }
          : { boxShadow: "0 2px 20px rgba(26,44,91,0.08), inset 0 1px 0 rgba(255,255,255,0.9)" }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link
          to="/"
          onClick={(e) => { if (isHome) { e.preventDefault(); scrollToSection(""); } }}
          className="flex items-center gap-3 text-left"
          aria-label="Super Printers Home"
        >
          <SuperPrintersLogo variant="header" size="md" />
          <div className="flex flex-col">
            <span className={`font-display font-semibold text-[20px] leading-tight ${atTop ? "text-white" : "text-navy"}`}>
              Super Printers
            </span>
            <span className="font-ui text-[12px] font-normal" style={{ color: "#D4A843" }}>
              Est. 1990 · Pallavaram
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <button
            onClick={() => (isHome ? scrollToSection("") : window.location.assign("/"))}
            className={linkClass("")}
          >
            {t("Home")}
          </button>
          <Link
            to="/products"
            className={`px-4 py-2.5 text-[14px] font-ui font-medium rounded-full transition-all duration-300 ${
              location.pathname === "/products" ? "text-gold bg-gold/10" : "text-inherit hover:text-gold hover:bg-white/5"
            }`}
          >
            {t("All Products")}
          </Link>
          {CATALOG_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="relative"
              onMouseEnter={() => setOpenDropdown(cat.slug)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {cat.subcategories.length > 0 ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === cat.slug ? null : cat.slug)}
                    className={`${linkClass("")} flex items-center gap-1`}
                  >
                    {cat.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === cat.slug && (
                    <div className="absolute top-full left-0 pt-2 min-w-[200px]">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 text-left">
                        {cat.subcategories.map((sub) => (
                          <Link
                            key={sub.slug}
                            to={`/products?category=${encodeURIComponent(cat.slug)}&sub=${encodeURIComponent(sub.slug)}`}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2 text-sm font-ui text-gray-700 hover:bg-gold/10 hover:text-gold transition-colors"
                          >
                            {sub.label}
                            {sub.badge === "NEW" && (
                              <span className="ml-1.5 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-500 text-white">
                                NEW
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={`/products?category=${encodeURIComponent(cat.slug)}`}
                  className={linkClass("")}
                >
                  {cat.label}
                </Link>
              )}
            </div>
          ))}
          {SCROLL_NAV.filter((l) => l.id).map((link) => (
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
          <a href="tel:+919840199878" className="hidden md:inline text-sm font-medium hover:opacity-90">
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
          className="lg:hidden fixed inset-0 top-[108px] bottom-0 bg-ink-black z-50 flex flex-col items-center justify-start pt-12 gap-0 overflow-y-auto"
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
          {CATALOG_CATEGORIES.map((cat) => {
            const href = cat.subcategories.length > 0
              ? `/products?category=${encodeURIComponent(cat.slug)}&sub=${encodeURIComponent(cat.subcategories[0].slug)}`
              : `/products?category=${encodeURIComponent(cat.slug)}`;
            return (
              <Link
                key={cat.id}
                to={href}
                onClick={() => setMobileMenu(false)}
                className="w-full py-5 px-6 text-left font-display text-2xl text-white hover:text-gold transition-colors border-b border-white/10"
              >
                {cat.label}
              </Link>
            );
          })}
          {SCROLL_NAV.filter((l) => l.id).map((link) => (
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
          <button
            onClick={() => {
              setMobileMenu(false);
              if (isHome) scrollToSection("why-us");
              else window.location.assign("/#why-us");
            }}
            className="w-full py-5 px-6 text-left font-display text-2xl text-white hover:text-gold transition-colors border-b border-white/10"
          >
            Why Choose Us
          </button>
          <button
            onClick={() => {
              setMobileMenu(false);
              if (isHome) scrollToSection("finishes");
              else window.location.assign("/#finishes");
            }}
            className="w-full py-5 px-6 text-left font-display text-2xl text-white hover:text-gold transition-colors border-b border-white/10"
          >
            Paper & Finishes
          </button>
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
