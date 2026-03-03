import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IMG } from "@/data/images";

const NAV_ITEMS = [
  { label: "Home", to: "/", thumb: IMG.P01 },
  { label: "Services", to: "/services", thumb: IMG.P02 },
  { label: "Products", to: "/services", thumb: IMG.P09 },
  { label: "Gallery", to: "/gallery", thumb: IMG.P18 },
  { label: "About", to: "/about", thumb: IMG.P03 },
  { label: "Contact", to: "/contact", thumb: IMG.P24 },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="gradient-bar fixed top-0 left-0 right-0 z-[60]" />
      <header
        className={`fixed top-[5px] left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <img
              src={IMG.P02}
              alt="Super Printers press"
              className="w-11 h-11 rounded-full object-cover border-2 border-brand-red"
              loading="lazy"
              width="44"
              height="44"
            />
            <span className="font-display text-xl font-bold text-brand-red">Super Printers</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 font-body" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="nav-link-underline px-3 py-2 text-sm font-medium text-brand-dark hover:text-brand-red transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/get-quote"
              className="hidden sm:inline-flex bg-brand-red text-white font-body text-sm font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-brand-dark"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-brand-dark transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 w-full bg-brand-dark transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-full bg-brand-dark transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-border py-4 px-4 font-body">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 py-3 px-3 text-sm font-medium text-brand-dark hover:text-brand-red transition-colors"
              >
                <img
                  src={item.thumb}
                  alt={item.label}
                  className="w-[60px] h-[40px] rounded-lg object-cover"
                  loading="lazy"
                  width="60"
                  height="40"
                />
                {item.label}
              </Link>
            ))}
            <Link
              to="/get-quote"
              onClick={() => setMobileOpen(false)}
              className="mt-3 block text-center bg-brand-red text-white font-semibold py-3 rounded-full"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default SiteHeader;