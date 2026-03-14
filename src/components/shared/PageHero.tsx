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
    {!image && <div className="absolute inset-0 bg-[hsl(220,26%,10%)]" />}
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      {breadcrumbs && (
        <div className="flex items-center justify-center gap-2 mb-6 text-sm">
          {breadcrumbs.map((bc, i) => (
            <span key={bc.to} className="flex items-center gap-2">
              {i > 0 && <span className="text-muted-foreground">/</span>}
              <Link to={bc.to} className="text-muted-foreground hover:text-foreground transition-colors">{bc.label}</Link>
            </span>
          ))}
        </div>
      )}
      <h1 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">{title}</h1>
      {subtitle && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
