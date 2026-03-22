import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: { label: string; to: string }[];
}

const PageHero = ({ title, subtitle, breadcrumbs }: PageHeroProps) => (
  <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #252545 60%, #1E1E38 100%)", minHeight: "280px" }}>

    {/* Dot pattern overlay */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%23C9A84C'/%3E%3C/svg%3E")` }}
      aria-hidden
    />

    {/* Gold top line */}
    <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />

    {/* Decorative circles */}
    <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full opacity-10" style={{ backgroundColor: "#C9A84C" }} />
    <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full opacity-5" style={{ backgroundColor: "#C9A84C" }} />

    <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 lg:py-20">

      {/* Breadcrumbs */}
      {breadcrumbs && (
        <div className="flex items-center justify-center gap-2 mb-5 text-xs font-medium uppercase tracking-widest">
          {breadcrumbs.map((bc, i) => (
            <span key={bc.to} className="flex items-center gap-2">
              {i > 0 && <span style={{ color: "rgba(201,168,76,0.5)" }}>/</span>}
              <Link
                to={bc.to}
                className="hover:opacity-100 transition-opacity"
                style={{ color: i === breadcrumbs.length - 1 ? "#C9A84C" : "rgba(255,255,255,0.5)" }}
              >
                {bc.label}
              </Link>
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <div className="text-center">
        <h1
          className="font-display font-extrabold text-4xl md:text-6xl text-white mb-5 leading-tight"
          style={{ letterSpacing: "-0.01em" }}
        >
          {title}
        </h1>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-16" style={{ backgroundColor: "rgba(201,168,76,0.4)" }} />
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C9A84C" }} />
          <div className="h-px w-16" style={{ backgroundColor: "rgba(201,168,76,0.4)" }} />
        </div>

        {subtitle && (
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>

    {/* Gold bottom line */}
    <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }} />
  </section>
);

export default PageHero;
