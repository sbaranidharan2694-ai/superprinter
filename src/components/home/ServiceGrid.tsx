import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { useInView } from "@/hooks/useInView";

const ServiceGrid = () => {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="py-16 md:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Printing Services in Chennai</h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">Explore our full range of printing services for businesses and individuals across Pallavaram and Chennai.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((s, i) => (
            <Link
              key={s.id}
              to={`/services/${s.slug}`}
              className={`relative card-lift p-6 rounded-xl bg-card text-left border border-border hover:border-secondary/30 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i % 8) * 80}ms` }}
            >
              {s.isNew && (
                <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">⭐ NEW</span>
              )}
              <div className="text-3xl mb-3">{s.emoji}</div>
              <h3 className="font-display text-base font-bold text-card-foreground mb-1">{s.name}</h3>
              <p className="text-muted-foreground text-xs font-body mb-3">{s.shortDesc}</p>
              <span className="text-secondary text-xs font-semibold font-body">View Details →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
