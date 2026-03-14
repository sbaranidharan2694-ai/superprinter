import { useState, useEffect } from "react";

const SECTION_IDS = ["services", "wedding-cards", "process", "reviews", "portfolio", "quote-form", "about", "faq", "contact"] as const;

const NAV_LINKS: { label: string; id: string }[] = [
  { label: "Home", id: "" },
  { label: "Services", id: "services" },
  { label: "Wedding Cards", id: "wedding-cards" },
  { label: "Portfolio", id: "portfolio" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const scrollToSection = (id: string) => {
  if (id === "") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const UnifiedHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const scrollY = window.scrollY + 120;
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
    <nav
      className={`sticky top-10 z-[100] transition-all duration-300 ${
        isTransparent
          ? "bg-transparent text-white"
          : "bg-white text-navy shadow-[var(--shadow-card)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <button
          onClick={() => scrollToSection("")}
          className="flex flex-col items-start gap-0.5 text-left relative"
          aria-label="Super Printers Home"
        >
          <span className="font-display font-bold text-xl text-inherit">Super Printers</span>
          <span
            className={`hidden sm:block text-xs font-body ${isTransparent ? "text-white/80" : "text-gray-text"}`}
          >
            Est. 1990 · Pallavaram
          </span>
          <span className="absolute -bottom-0.5 left-0 w-10 h-0.5 rounded-full bg-gold" style={{ backgroundColor: "var(--color-gold)" }} />
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id || "home"}
              onClick={() => {
                scrollToSection(link.id);
                setMobileMenu(false);
              }}
              className={linkClass(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              scrollToSection("quote-form");
              setMobileMenu(false);
            }}
            className="bg-gold text-white font-body font-medium text-sm px-5 py-2 rounded-full hover:bg-gold-light hover:shadow-gold transition-all duration-200 hover:scale-[1.02]"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            Get a Quote →
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

      {mobileMenu && (
        <div className="lg:hidden fixed inset-0 top-[104px] bg-navy/98 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-4 py-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id || "home"}
              onClick={() => {
                scrollToSection(link.id);
                setMobileMenu(false);
              }}
              className="text-white font-body text-lg font-medium py-3 px-6 hover:text-gold transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              scrollToSection("quote-form");
              setMobileMenu(false);
            }}
            className="mt-4 bg-gold text-white font-medium px-8 py-3 rounded-full"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            Get a Quote →
          </button>
        </div>
      )}
    </nav>
  );
};

export default UnifiedHeader;
