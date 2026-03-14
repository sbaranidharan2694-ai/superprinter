import { motion } from "framer-motion";
import { LANDING_SERVICES } from "@/data/landing";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24 bg-cream">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <p
          className="text-gold text-xs font-body font-medium uppercase tracking-[0.15em] mb-2"
          style={{ color: "var(--color-gold)" }}
        >
          WHAT WE PRINT
        </p>
        <h2 className="font-display font-semibold text-3xl md:text-[40px] text-navy mb-3">
          Everything Your Business Needs
        </h2>
        <p className="text-gray-text font-body text-base max-w-2xl mx-auto">
          From 100 to 100,000 copies — offset, digital, or screen printing. Starting from just ₹149.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {LANDING_SERVICES.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            onClick={() => scrollToSection(card.scrollTo)}
            className={`group bg-white rounded-2xl p-6 border border-gray-200 hover:-translate-y-1 hover:shadow-hover transition-all duration-250 cursor-pointer overflow-hidden ${
              card.isWedding ? "" : "hover:border-t-[3px] hover:border-t-gold"
            }`}
            style={
              card.isWedding
                ? {
                    background: "linear-gradient(135deg, #8B1A2F, #4A0E22)",
                    borderColor: "transparent",
                  }
                : undefined
            }
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4 ${
                card.isWedding ? "bg-white/20" : "bg-gold/15"
              }`}
              style={!card.isWedding ? { backgroundColor: "rgba(201,151,58,0.15)" } : undefined}
            >
              {card.emoji}
            </div>
            <h3
              className={`font-display font-semibold text-lg mb-2 ${
                card.isWedding ? "text-white" : "text-navy"
              }`}
            >
              {card.name}
              {card.isNew && (
                <span className="ml-2 text-xs font-body font-medium text-gold">✨ New</span>
              )}
            </h3>
            <p className={`font-body text-sm mb-4 line-clamp-2 ${card.isWedding ? "text-white/80" : "text-gray-text"}`}>
              {card.description}
            </p>
            <span
              className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${
                card.isWedding ? "bg-gold/30 text-white" : "bg-gold text-white"
              }`}
              style={card.isWedding ? undefined : { backgroundColor: "var(--color-gold)" }}
            >
              {card.price}
            </span>
            <button
              className={`mt-3 text-sm font-medium ${
                card.isWedding ? "text-gold hover:underline" : "text-gold hover:underline"
              }`}
              style={{ color: "var(--color-gold)" }}
            >
              Learn More →
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
