import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { services } from "@/data/services";
import { useInView } from "@/hooks/useInView";

const Services = () => {
  const { ref, isVisible } = useInView();

  return (
    <>
      <SEOHead
        title="Printing Services in Chennai | Super Printers Pallavaram"
        description="Offset printing, visiting cards, banners, brochures, letterheads, bill books, rubber stamps, T-shirt printing and more in Chennai."
        canonical="/services"
        keywords="printing services chennai, offset printing chennai, visiting card printing chennai, banner printing chennai, brochure printing chennai, super printers pallavaram"
      />
      <main>
        <section className="navy-gradient-hero dot-pattern py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-display text-3xl md:text-5xl font-black text-primary-foreground mb-4">
              Printing Services in Chennai
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg">
              From visiting cards to large-format banners — Super Printers has you covered with {services.length}+ professional printing services.
            </p>
          </div>
        </section>

        <section ref={ref} className={`py-16 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <Link
                  key={s.id}
                  to={`/services/${s.slug}`}
                  className="relative p-6 bg-card rounded-xl border border-border card-lift gold-border-hover group"
                  style={{ transitionDelay: `${(i % 6) * 80}ms` }}
                >
                  {s.isNew && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-1 rounded-full bg-secondary text-secondary-foreground">NEW</span>
                  )}
                  <div className="text-4xl mb-3">{s.emoji}</div>
                  <h2 className="font-display text-lg font-bold text-card-foreground mb-2">{s.name}</h2>
                  <p className="text-muted-foreground text-sm font-body mb-3">{s.shortDesc}</p>
                  {s.startingPrice && (
                    <p className="text-secondary font-semibold text-sm font-body mb-2">From {s.startingPrice}</p>
                  )}
                  <span className="text-secondary text-sm font-semibold font-body group-hover:underline">
                    View Details →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
