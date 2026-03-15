import { Link, useLocation } from "react-router-dom";

/* WhatsApp & Call are in the header on mobile — no duplicate here */
const TABS = [
  { label: "Home", icon: "🏠", to: "/" },
  { label: "Services", icon: "📋", to: "/services" },
  { label: "Gallery", icon: "📸", to: "/gallery" },
  { label: "Contact", icon: "✉️", to: "/contact" },
];

const MobileBottomCTA = () => {
  const location = useLocation();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[100] md:hidden h-[60px] flex items-stretch border-t border-gray-200 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)]"
      aria-label="Mobile navigation"
    >
      {TABS.map((tab) => {
        const isActive = !tab.external && tab.to === location.pathname;
        const className = `flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-xs font-medium transition-colors ${
          isActive ? "text-[var(--color-primary)]" : "text-gray-600 hover:bg-gray-50"
        }`;
        if (tab.external && tab.href) {
          return (
            <a
              key={tab.label}
              href={tab.href}
              target={tab.href.startsWith("http") ? "_blank" : undefined}
              rel={tab.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={className}
              aria-label={tab.label}
            >
              <span className="text-lg leading-none">{tab.icon}</span>
              <span>{tab.label}</span>
            </a>
          );
        }
        return (
          <Link key={tab.label} to={tab.to as string} className={className} aria-label={tab.label}>
            <span className="text-lg leading-none">{tab.icon}</span>
            <span>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileBottomCTA;
