import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BUSINESS } from "@/data/business";
import { trackWhatsAppClick, trackPhoneClick } from "@/utils/analytics";

const WHATSAPP_URL = `${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Super Printers! I need a printing quote.")}`;

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
      data-critical-header
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
        className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between min-h-[96px] md:min-h-[115px] py-3"
        style={{ color: "#1A1A2E" }}
      >
        {/* Logo only — large and prominent */}
        <Link to="/" className="flex items-center shrink-0" aria-label="Super Printers Home">
          {!logoImgFailed ? (
            <img
              src="/super-printers-logo.png?v=2"
              alt="Super Printers — 35 Years Experience"
              className="h-[96px] sm:h-[115px] md:h-[134px] lg:h-[132px] w-auto object-contain object-left max-w-[408px] sm:max-w-[480px] md:max-w-[552px] drop-shadow-sm"
              style={{ minHeight: 96 }}
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
              className="flex items-center justify-center rounded-xl border-2 font-display font-bold text-2xl sm:text-3xl shrink-0 bg-amber-50/50"
              style={{ width: 64, height: 64, borderColor: "var(--gold)", color: "#1A1A2E" }}
              aria-hidden
            >
              SP
            </span>
          )}
        </Link>

        {/* Center Nav — visible from 600px up so header links show on medium-small screens */}
        <nav className="hidden min-[600px]:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link px-4 py-2.5 text-[14px] font-bold rounded-full transition-all duration-300 ${
                  isActive ? "bg-amber-50" : "hover:bg-gray-50"
                }`}
                style={{
                  color: isActive ? "#1A1A2E" : "#1A1A2E",
                  fontFamily: "var(--font-body)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side — phone, Get Quote, WhatsApp (desktop); on mobile same CTAs inline like desktop */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={BUSINESS.phoneTel}
            onClick={() => trackPhoneClick("header")}
            className="hidden min-[600px]:inline text-sm font-semibold hover:opacity-90"
            style={{ color: "#1A1A2E", fontFamily: "var(--font-body)" }}
          >
            +91 98401 99878
          </a>
          <Link
            to="/get-quote"
            className="hidden min-[600px]:inline-flex items-center justify-center px-4 py-2.5 rounded-md text-sm font-bold text-white transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: "var(--color-primary)", fontFamily: "var(--font-accent)" }}
          >
            Get Quote
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("header")}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white transition-transform hover:scale-[1.03] shrink-0"
            style={{ backgroundColor: "#25D366", fontFamily: "var(--font-accent)" }}
            aria-label="Chat on WhatsApp"
          >
            <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="hidden min-[400px]:inline">WhatsApp</span>
          </a>
          <a
            href={BUSINESS.phoneTel}
            onClick={() => trackPhoneClick("header_mobile")}
            className="inline-flex min-[600px]:hidden items-center justify-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold border-2 shrink-0 transition-transform hover:scale-[1.03]"
            style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)", fontFamily: "var(--font-accent)" }}
            aria-label="Call now"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1v3.15c0 .25.1.49.27.67.17.18.42.28.67.28.12 0 .24-.02.35-.05z" />
            </svg>
            <span className="hidden min-[380px]:inline">Call</span>
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
          className="min-[600px]:hidden fixed inset-0 top-[132px] z-50 flex flex-col items-center justify-start pt-8 gap-0 overflow-y-auto"
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
              className="w-full py-5 px-6 text-left font-display text-2xl font-bold hover:opacity-70 transition-opacity border-b"
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
