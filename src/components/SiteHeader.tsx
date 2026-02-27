import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { services } from "@/data/services";
import { BUSINESS } from "@/data/business";

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services", hasDropdown: true },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMobile} className="flex items-center gap-2 group" aria-label="Super Printers Home">
          <span className="text-3xl">🖨️</span>
          <div>
            <span className="font-display text-xl font-bold text-foreground block leading-tight">Super Printers</span>
            <span className="text-xs text-muted-foreground font-body">Since 1989 · Pallavaram</span>
          </div>
        </Link>

        {/* Trust Badge */}
        <div className="hidden lg:flex items-center gap-1 px-3 py-1 rounded-full bg-gold/10 border border-gold/30">
          <span className="text-sm">🏆</span>
          <span className="text-xs font-semibold text-secondary font-body">36 Years of Trust</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 font-body" aria-label="Main navigation">
          {navItems.map((item) => (
            <div key={item.to} className="relative group">
              <Link
                to={item.to}
                onMouseEnter={() => item.hasDropdown && setServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setServicesOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.to) ? "text-secondary bg-secondary/10" : "text-foreground hover:text-secondary hover:bg-secondary/5"
                }`}
              >
                {item.label}
                {item.hasDropdown && <span className="ml-1">▾</span>}
              </Link>
              {item.hasDropdown && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className={`absolute top-full left-0 w-64 bg-card rounded-lg shadow-xl border border-border py-2 transition-all duration-200 ${
                    servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {services.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors flex items-center gap-2"
                    >
                      <span>{s.emoji}</span>
                      <span>{s.name}</span>
                      {s.isNew && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-secondary text-secondary-foreground">NEW</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* WhatsApp CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a href={BUSINESS.whatsappQuote} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex wa-button px-4 py-2 rounded-lg text-sm font-semibold items-center gap-2" aria-label="Chat on WhatsApp">
            💬 WhatsApp Us
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border py-4 px-4 font-body">
          {navItems.map((item) => (
            <div key={item.to}>
              {item.hasDropdown ? (
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full text-left py-2 px-3 text-sm font-medium text-foreground hover:text-secondary transition-colors"
                >
                  {item.label} {servicesOpen ? "▴" : "▾"}
                </button>
              ) : (
                <Link
                  to={item.to}
                  onClick={closeMobile}
                  className="block py-2 px-3 text-sm font-medium text-foreground hover:text-secondary transition-colors"
                >
                  {item.label}
                </Link>
              )}
              {item.hasDropdown && servicesOpen && (
                <div className="pl-6 pb-2">
                  <Link to="/services" onClick={closeMobile} className="block py-1.5 text-sm text-secondary font-medium hover:underline">
                    All Services →
                  </Link>
                  {services.map((s) => (
                    <Link key={s.id} to={`/services/${s.slug}`} onClick={closeMobile} className="block py-1.5 text-sm text-muted-foreground hover:text-secondary transition-colors flex items-center gap-2">
                      <span>{s.emoji}</span> {s.name} {s.isNew && <span className="text-[10px] font-bold px-1 rounded bg-secondary text-secondary-foreground">NEW</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href={BUSINESS.whatsappQuote} target="_blank" rel="noopener noreferrer" className="mt-3 wa-button w-full py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
            💬 WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
