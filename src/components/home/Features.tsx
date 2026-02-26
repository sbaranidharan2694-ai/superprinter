import { useInView } from "@/hooks/useInView";

const WA_LINK = "https://wa.me/919840199878?text=Hi%20Super%20Printers%2C%20I%20need%20";

const features = [
  {
    emoji: "🖨️",
    title: "Innovative Prints",
    desc: "Super Printers is one of Chennai's leading print management companies. With 36 years of experience, we've removed the hassles of traditional printing — delivering fast, high-quality results every time.",
  },
  {
    emoji: "💰",
    title: "Best Quality, Low Cost",
    desc: "No matter where you are, what you need, or when you need it — our streamlined printing process delivers the best quality at the most affordable price in Chennai, every single time.",
  },
  {
    emoji: "🤝",
    title: "You Say, We Deliver",
    desc: "All you have to do is tell us what you need. From design to delivery, we handle everything. Contact us via WhatsApp, phone, or visit our Pallavaram shop.",
    link: { text: "Tell us what you need →", href: WA_LINK },
  },
];

const Features = () => {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`p-8 rounded-xl bg-card gold-border-hover transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-4xl mb-4">{f.emoji}</div>
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{f.desc}</p>
              {f.link && (
                <a href={f.link.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-secondary font-semibold text-sm font-body hover:underline">
                  {f.link.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
