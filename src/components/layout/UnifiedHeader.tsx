import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BUSINESS } from "@/data/business";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Wedding Cards", to: "/wedding-cards" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const UnifiedHeader = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [logoImgFailed, setLogoImgFailed] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenu]);

  return (
    <header
      className="fixed top-11 left-0 right-0 z-[101] transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(26,26,46,0.95)" : "rgba(26,26,46,0.8)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between min-h-[72px] py-2">
        {/* Logo + Est. 1990 */}
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Super Printers Home">
          {!logoImgFailed ? (
            <img
              src="/super-printers-logo.png"
              alt="Super Printers — 35 Years Experience"
              className="h-12 sm:h-14 w-auto object-contain max-w-[180px] brightness-0 invert"
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
              style={{ width: 44, height: 44, borderColor: "var(--gold)", color: "var(--gold)" }}
              aria-hidden
            >
              SP
            </span>
          )}
          <div className="flex flex-col">
            {logoImgFailed && (
              <span className="font-display font-bold text-lg leading-tight text-white">
                Super Printers
              </span>
            )}
            <span className="text-[11px] font-medium tracking-wider" style={{ color: "var(--gold)" }}>
              Est. 1990
            </span>
          </div>
        </Link>

        {/* Center Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link px-4 py-2.5 text-[14px] font-medium rounded-full transition-all duration-300 ${
                location.pathname === link.to
                  ? "text-white bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneTel}
            className="hidden md:inline text-sm font-semibold hover:opacity-90"
            style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
          >
            +91 98401 99878
          </a>
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Super Printers, I need a quote for ")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "var(--color-cta)", fontFamily: "var(--font-accent)" }}
          >
            💬 WhatsApp
          </a>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 rounded-full bg-white transition-all ${mobileMenu ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 rounded-full bg-white transition-all ${mobileMenu ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 rounded-full bg-white transition-all ${mobileMenu ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      {mobileMenu && (
        <div
          className="lg:hidden fixed inset-0 top-[116px] z-50 flex flex-col items-center justify-start pt-8 gap-0 overflow-y-auto"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <button
            type="button"
            onClick={() => setMobileMenu(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <span className="text-2xl leading-none">×</span>
          </button>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenu(false)}
              className="w-full py-5 px-6 text-left font-display text-2xl text-white hover:text-gold transition-colors border-b border-white/10"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-3 px-6 w-full">
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Super Printers, I need a quote for ")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenu(false)}
              className="w-full py-4 rounded-full font-bold text-center text-white"
              style={{ backgroundColor: "var(--color-cta)", fontFamily: "var(--font-accent)" }}
            >
              💬 WhatsApp Order
            </a>
            <a
              href={BUSINESS.phoneTel}
              onClick={() => setMobileMenu(false)}
              className="w-full py-4 rounded-full font-semibold text-center border-2 text-white"
              style={{ borderColor: "var(--gold)", fontFamily: "var(--font-body)" }}
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default UnifiedHeader;
