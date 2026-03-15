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
        backgroundColor: "#FFFFFF",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201,168,76,0.25)",
        boxShadow: "0 1px 12px rgba(26,26,46,0.08)",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between min-h-[72px] py-2"
        style={{ color: "#1A1A2E" }}
      >
        {/* Logo + brand text — always visible with dark text */}
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Super Printers Home" style={{ color: "#1A1A2E" }}>
          {!logoImgFailed ? (
            <img
              src="/super-printers-logo.svg"
              alt="Super Printers — 35 Years Experience"
              className="h-12 sm:h-14 w-auto object-contain max-w-[180px]"
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
              style={{ width: 44, height: 44, borderColor: "var(--gold)", color: "#1A1A2E" }}
              aria-hidden
            >
              SP
            </span>
          )}
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm sm:text-base leading-tight" style={{ color: "#1A1A2E" }}>
              Super Printers
            </span>
            <span className="text-[11px] font-medium tracking-wider" style={{ color: "#4B5563" }}>
              Est. 1990
            </span>
          </div>
        </Link>

        {/* Center Nav — visible from 600px up so header links show on medium-small screens */}
        <nav className="hidden min-[600px]:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link px-4 py-2.5 text-[14px] font-medium rounded-full transition-all duration-300 ${
                  isActive ? "bg-amber-50 font-semibold" : "hover:bg-gray-50"
                }`}
                style={{
                  color: isActive ? "#1A1A2E" : "#4B5563",
                  fontFamily: "var(--font-body)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side — phone and WhatsApp visible when nav is; hamburger when nav is hidden */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={BUSINESS.phoneTel}
            className="hidden min-[600px]:inline text-sm font-semibold hover:opacity-90"
            style={{ color: "#1A1A2E", fontFamily: "var(--font-body)" }}
          >
            +91 98401 99878
          </a>
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Super Printers, I need a quote for ")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-[480px]:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-bold text-white transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "var(--color-cta)", fontFamily: "var(--font-accent)" }}
          >
            💬 WhatsApp
          </a>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="min-[600px]:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 rounded-full transition-all ${mobileMenu ? "rotate-45 translate-y-2" : ""}`} style={{ backgroundColor: "var(--color-primary)" }} />
            <span className={`w-5 h-0.5 rounded-full transition-all ${mobileMenu ? "opacity-0" : ""}`} style={{ backgroundColor: "var(--color-primary)" }} />
            <span className={`w-5 h-0.5 rounded-full transition-all ${mobileMenu ? "-rotate-45 -translate-y-2" : ""}`} style={{ backgroundColor: "var(--color-primary)" }} />
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      {mobileMenu && (
        <div
          className="min-[600px]:hidden fixed inset-0 top-[116px] z-50 flex flex-col items-center justify-start pt-8 gap-0 overflow-y-auto"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <button
            type="button"
            onClick={() => setMobileMenu(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            style={{ color: "var(--color-primary)" }}
            aria-label="Close menu"
          >
            <span className="text-2xl leading-none">×</span>
          </button>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenu(false)}
              className="w-full py-5 px-6 text-left font-display text-2xl hover:opacity-70 transition-opacity border-b"
              style={{ color: "var(--color-primary)", borderColor: "rgba(26,26,46,0.08)" }}
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
              className="w-full py-4 rounded-full font-semibold text-center border-2"
              style={{ borderColor: "var(--gold)", color: "var(--color-primary)", fontFamily: "var(--font-body)" }}
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
