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

  const isTransparent = !scrolled;
  const linkClass = (id: string) =>
    `px-4 py-2 text-[13px] font-medium rounded-full transition-all ${
      activeId === id ? "text-gold border-b-2 border-gold" : "text-inherit hover:text-gold"
    }`;

  return (
    <header
      className={`fixed top-11 left-0 right-0 z-[101] transition-all duration-300 ${
        isTransparent
          ? "bg-transparent text-white"
          : "bg-white text-ink-black shadow-md backdrop-blur-sm"
      }`}
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
            <span className={`text-[11px] font-body ${isTransparent ? "text-gold" : "text-gold-muted"}`}>
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
                      className="absolute top-full left-0 pt-2 w-full min-w-[640px]"
                      onMouseEnter={() => setProductsOpen(true)}
                      onMouseLeave={() => setProductsOpen(false)}
                    >
                      <div className="bg-white rounded-xl shadow-lg border border-gray-200 py-4 px-6 grid grid-cols-4 gap-6 text-left">
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
                                    className="text-sm text-gray-700 hover:text-gold transition-colors block w-full text-left"
                                  >
                                    {item.name}
                                    {item.fromPrice && <span className="text-gray-500 ml-1">— {item.fromPrice}</span>}
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
            {isTransparent ? "📞 Call" : "📞 +91 98401 99878"}
          </a>
          <button
            onClick={() => {
              scrollToSection("quote-form");
              setMobileMenu(false);
            }}
            className="bg-gold text-ink-black font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-gold transition-all duration-200 hover:scale-[1.02]"
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
              className="w-full py-4 rounded-full font-body font-semibold text-center text-ink-black bg-gold"
              style={{ backgroundColor: "var(--gold)" }}
            >
              WhatsApp Order
            </a>
            <a href="tel:+919840199878" className="w-full py-4 rounded-full font-body font-semibold text-center text-white border-2 border-gold">
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default UnifiedHeader;
