import { useInView } from "@/hooks/useInView";

const checklist = [
  "36 Years Experience", "Best Prices Guaranteed", "Fast 2–5 Day Turnaround", "Premium Quality Output",
  "Free Design Assistance", "1000+ Happy Customers", "Pamphlet & Leaflet Printing", "Wedding Specialists",
  "Bulk Discounts", "Delivery Across Chennai",
];

const stats = [
  { num: "36+", label: "Years" },
  { num: "1000+", label: "Customers" },
  { num: "14+", label: "Services" },
  { num: "₹₹", label: "Best Price" },
];

const WhyUs = () => {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className={`py-16 md:py-20 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Chennai Trusts Super Printers for 36 Years
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Ordering high-quality prints should be simple — and with Super Printers, it is. Tell us what you need via WhatsApp or phone, and we handle the rest. From design assistance to final delivery, we make printing effortless for businesses and individuals across Chennai.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-body text-card-foreground">
                  <span className="text-secondary">✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="navy-gradient p-6 rounded-xl text-center">
                <div className="font-display text-3xl font-black text-gold-light">{s.num}</div>
                <div className="text-primary-foreground/70 text-sm font-body mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
