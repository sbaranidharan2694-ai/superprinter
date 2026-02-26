import { useState } from "react";
import { services } from "@/data/services";

interface SiteHeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const WA_LINK = "https://wa.me/919840199878?text=Hi%20Super%20Printers%2C%20I%27d%20like%20a%20quote%20for%20";

const SiteHeader = ({ activePage, setActivePage }: SiteHeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navigate = (page: string) => {
    setActivePage(page);
    setMobileOpen(false);
    setServicesOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Services", page: "services", hasDropdown: true },
    { label: "Portfolio", page: "portfolio" },
    { label: "FAQ", page: "faq" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => navigate("home")} className="flex items-center gap-2 group" aria-label="Super Printers Home">
          <span className="text-3xl">🖨️</span>
          <div>
            <span className="font-display text-xl font-bold text-foreground block leading-tight">Super Printers</span>
            <span className="text-xs text-muted-foreground font-body">Since 1989 · Pallavaram</span>
          </div>
        </button>

        {/* Trust Badge - desktop */}
        <div className="hidden lg:flex items-center gap-1 px-3 py-1 rounded-full bg-gold/10 border border-gold/30">
          <span className="text-sm">🏆</span>
          <span className="text-xs font-semibold text-secondary font-body">36 Years of Trust</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 font-body" aria-label="Main navigation">
          {navItems.map((item) => (
            <div key={item.page} className="relative group">
              <button
                onClick={() => !item.hasDropdown && navigate(item.page)}
                onMouseEnter={() => item.hasDropdown && setServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setServicesOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activePage === item.page ? "text-secondary bg-secondary/10" : "text-foreground hover:text-secondary hover:bg-secondary/5"
                }`}
              >
                {item.label}
                {item.hasDropdown && <span className="ml-1">▾</span>}
              </button>
              {item.hasDropdown && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className={`absolute top-full left-0 w-64 bg-card rounded-lg shadow-xl border border-border py-2 transition-all duration-200 ${
                    servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => navigate(s.id)}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors flex items-center gap-2"
                    >
                      <span>{s.emoji}</span>
                      <span>{s.name}</span>
                      {s.isNew && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-secondary text-secondary-foreground">NEW</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* WhatsApp CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex wa-button px-4 py-2 rounded-lg text-sm font-semibold items-center gap-2" aria-label="Chat on WhatsApp">
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
            <div key={item.page}>
              <button
                onClick={() => {
                  if (item.hasDropdown) setServicesOpen(!servicesOpen);
                  else navigate(item.page);
                }}
                className="w-full text-left py-2 px-3 text-sm font-medium text-foreground hover:text-secondary transition-colors"
              >
                {item.label} {item.hasDropdown && (servicesOpen ? "▴" : "▾")}
              </button>
              {item.hasDropdown && servicesOpen && (
                <div className="pl-6 pb-2">
                  {services.map((s) => (
                    <button key={s.id} onClick={() => navigate(s.id)} className="w-full text-left py-1.5 text-sm text-muted-foreground hover:text-secondary transition-colors flex items-center gap-2">
                      <span>{s.emoji}</span> {s.name} {s.isNew && <span className="text-[10px] font-bold px-1 rounded bg-secondary text-secondary-foreground">NEW</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-3 wa-button w-full py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
            💬 WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
