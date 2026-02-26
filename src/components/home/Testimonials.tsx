import { testimonials } from "@/data/services";
import { useInView } from "@/hooks/useInView";

const Testimonials = () => {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="py-16 md:py-20 navy-gradient">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">What Our Customers Say</h2>
          <p className="text-primary-foreground/60 font-body">Trusted by 1000+ happy customers across Chennai</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="text-gold-light text-sm mb-3">{"★".repeat(t.stars)}</div>
              <p className="text-primary-foreground/80 text-sm font-body leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <div className="text-primary-foreground font-semibold text-sm font-body">{t.name}</div>
                <div className="text-primary-foreground/50 text-xs font-body">{t.title}{t.title && ", "}{t.area}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
