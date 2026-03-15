import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = ({ items, className = "" }: BreadcrumbProps) => (
  <nav aria-label="Breadcrumb" className={`text-sm ${className}`} style={{ fontFamily: "var(--font-body)" }}>
    {items.map((item, i) => (
      <span key={item.label}>
        {i > 0 && <span className="mx-2 text-gray-400">›</span>}
        {item.to ? (
          <Link to={item.to} className="hover:opacity-80 transition-opacity" style={{ color: "var(--color-primary)" }}>
            {item.label}
          </Link>
        ) : (
          <span className="font-semibold" style={{ color: "var(--color-primary)" }}>{item.label}</span>
        )}
      </span>
    ))}
  </nav>
);

export default Breadcrumb;
