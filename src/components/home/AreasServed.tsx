import { useInView } from "@/hooks/useInView";
import { BUSINESS } from "@/data/business";

const AreasServed = () => {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className={`py-12 md:py-16 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Areas We Serve in Chennai</h2>
        <p className="text-muted-foreground font-body text-sm mb-6">
          Super Printers delivers quality printing services across Greater Chennai. Free delivery for bulk orders.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {BUSINESS.areas.map((area) => (
            <span key={area} className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-body border border-border">
              📍 {area}
            </span>
          ))}
          <span className="px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-body font-semibold border border-secondary/30">
            + All of Greater Chennai
          </span>
        </div>
      </div>
    </section>
  );
};

export default AreasServed;
