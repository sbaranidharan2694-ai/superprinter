import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: { label: string; to: string }[];
}

const PageHero = ({ title, subtitle, image, breadcrumbs }: PageHeroProps) => (
  <section className="relative py-20 lg:py-28 overflow-hidden">
    {image && (
      <>
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.15)" }} loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </>
    )}
    {!image && (
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #FFFDF7 0%, #FFF8EC 100%)" }}
      />
    )}
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      {breadcrumbs && (
        <div className="flex items-center justify-center gap-2 mb-6 text-sm">
          {breadcrumbs.map((bc, i) => (
            <span key={bc.to} className="flex items-center gap-2">
              {i > 0 && <span className="text-gray-400">/</span>}
              <Link to={bc.to} className={`hover:opacity-80 transition-colors ${image ? "text-primary-foreground/70" : "text-gray-400"}`} style={!image ? { color: "var(--color-primary)" } : undefined}>{bc.label}</Link>
            </span>
          ))}
        </div>
      )}
      <h1 className={`font-display text-3xl md:text-5xl font-black mb-4 ${image ? "text-primary-foreground" : ""}`} style={!image ? { color: "var(--color-primary)" } : undefined}>{title}</h1>
      {subtitle && <p className={`text-lg max-w-2xl mx-auto ${image ? "text-primary-foreground/80" : ""}`} style={!image ? { color: "#4B5563" } : undefined}>{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
