import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const UnifiedHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenu(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <nav className={`sticky top-0 z-[100] transition-all duration-500 ${
      scrolled
        ? "bg-background/98 backdrop-blur-xl shadow-lg border-b border-border"
        : isHome
          ? "bg-[hsl(220,26%,14%)] border-b border-border/50"
          : "bg-background border-b border-border"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[68px]">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
            <span className="font-display font-bold text-lg text-primary-foreground">SP</span>
          </div>
          <div>
            <div className="font-display font-bold text-lg text-foreground">Super Printers</div>
            <div className="font-tamil text-[10px] text-muted-foreground">சுப்பர் பிரிண்டர்ஸ் • Est. 1990</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all ${
                location.pathname === l.to
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/orders"
            className="hidden sm:block text-xs font-semibold px-4 py-2 rounded-full text-muted-foreground border border-border hover:bg-accent transition-all"
          >
            My Orders
          </Link>
          <Link
            to="/get-quote"
            className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold text-xs px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            Get Quote
          </Link>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-accent transition-colors"
          >
            <span className={`w-5 h-0.5 rounded-full bg-foreground transition-all duration-300 ${mobileMenu ? "rotate-45 translate-y-[4px]" : ""}`} />
            <span className={`w-5 h-0.5 rounded-full bg-foreground transition-all duration-300 ${mobileMenu ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 rounded-full bg-foreground transition-all duration-300 ${mobileMenu ? "-rotate-45 -translate-y-[4px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenu && (
        <div className="lg:hidden border-t border-border bg-background shadow-xl">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  location.pathname === l.to
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-accent"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/orders"
              className="block w-full text-left px-4 py-3 text-sm font-medium rounded-xl text-foreground hover:bg-accent transition-colors"
            >
              My Orders
            </Link>
            <Link
              to="/get-quote"
              className="block text-center mt-2 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold text-sm py-3 rounded-full"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default UnifiedHeader;
