import { useState, useEffect } from "react";
import { scrollToSection } from "@/utils/scroll";
import { V2_MEGA_MENU } from "@/data/v2";

const SECTION_IDS = ["products", "why-us", "wedding-cards", "process", "reviews", "portfolio", "finishes", "quote-form", "about", "faq", "contact"] as const;

const NAV_LINKS: { label: string; id: string }[] = [
  { label: "Home", id: "" },
  { label: "Products", id: "products" },
  { label: "Wedding Cards", id: "wedding-cards" },
  { label: "Portfolio", id: "portfolio" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const UnifiedHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

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
    `px-4 py-2.5 text-[14px] font-ui font-medium rounded-full transition-all duration-300 ease-spring ${
      activeId === id ? "text-gold bg-gold/10" : "text-inherit hover:text-gold hover:bg-white/5"
    }`;

  return (
    <header
      className={`fixed top-11 left-0 right-0 z-[101] transition-all duration-300 ${
        atTop
          ? "text-white backdrop-blur-md border-b border-white/10"
          : "bg-white/95 text-ink-black shadow-lg backdrop-blur-md border-b border-gray-100"
      }`}
      style={atTop ? { backgroundColor: "rgba(17,17,17,0.92)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <button
          onClick={() => scrollToSection("")}
          className="flex items-center gap-3 text-left"
          aria-label="Super Printers Home"
        >
          <span
            className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg shrink-0"
            style={{ backgroundColor: "var(--gold)", color: "var(--ink-black)" }}
          >
            SP
          </span>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl text-inherit leading-tight">Super Printers</span>
            <span className={`text-[12px] font-ui ${atTop ? "text-gold" : "text-gold-muted"}`}>
              Est. 1990 · Pallavaram
            </span>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <div key={link.id || "home"} className="relative">
              {link.id === "products" ? (
                <>
                  <button
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                    onClick={() => setProductsOpen(!productsOpen)}
                    className={`${linkClass("products")} flex items-center gap-1`}
                  >
                    {link.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {productsOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-full min-w-[320px] max-w-[min(640px,calc(100vw-2rem))]"
                      onMouseEnter={() => setProductsOpen(true)}
                      onMouseLeave={() => setProductsOpen(false)}
                    >
                      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 py-4 px-6 grid grid-cols-4 gap-6 text-left">
                        {V2_MEGA_MENU.map((col) => (
                          <div key={col.title}>
                            <h4 className="font-display font-semibold text-ink-black text-sm mb-3">{col.title}</h4>
                            <ul className="space-y-2">
                              {col.items.map((item) => (
                                <li key={item.name}>
                                  <button
                                    onClick={() => {
                                      scrollToSection(item.scrollTo);
                                      setProductsOpen(false);
                                    }}
                                    className="text-sm font-ui text-gray-700 hover:text-gold transition-colors duration-300 block w-full text-left"
                                  >
                                    {item.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => {
                    scrollToSection(link.id);
                    setMobileMenu(false);
                  }}
                  className={linkClass(link.id)}
                >
                  {link.label}
                </button>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+919840199878" className="hidden md:inline text-sm font-medium hover:opacity-90">
            {atTop ? "📞 Call" : "📞 +91 98401 99878"}
          </a>
          <button
            onClick={() => {
              scrollToSection("quote-form");
              setMobileMenu(false);
            }}
            className="bg-gold text-ink-black font-ui font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-gold transition-all duration-300 ease-spring hover:scale-[1.02]"
            style={{ backgroundColor: "var(--gold)", color: "var(--ink-black)" }}
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
          {NAV_LINKS.map((link) => (
            <button
              key={link.id || "home"}
              onClick={() => {
                scrollToSection(link.id || "");
                setMobileMenu(false);
              }}
              className="w-full py-5 px-6 text-left font-display text-2xl text-white hover:text-gold transition-colors border-b border-white/10"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              scrollToSection("why-us");
              setMobileMenu(false);
            }}
            className="w-full py-5 px-6 text-left font-display text-2xl text-white hover:text-gold transition-colors border-b border-white/10"
          >
            Why Choose Us
          </button>
          <button
            onClick={() => {
              scrollToSection("finishes");
              setMobileMenu(false);
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
              className="w-full py-4 rounded-full font-ui font-semibold text-center text-ink-black bg-gold"
              style={{ backgroundColor: "var(--gold)" }}
            >
              WhatsApp Order
            </a>
            <a href="tel:+919840199878" className="w-full py-4 rounded-full font-ui font-semibold text-center text-white border-2 border-gold">
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default UnifiedHeader;
