import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";
import { WEDDING_CATEGORIES } from "@/data/landing";

const WeddingCardsSection = () => (
  <section id="wedding-cards" className="grid grid-cols-1 lg:grid-cols-2 min-h-0">
    <div
      className="py-16 md:py-20 px-6 md:px-14 flex flex-col justify-center"
      style={{
        background: "linear-gradient(160deg, #4A0E22 0%, #8B1A2F 50%, #C9973A 100%)",
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-gold text-xs font-body font-medium uppercase tracking-widest mb-4"
        style={{ color: "var(--color-gold)" }}
      >
        WEDDING & EVENT INVITATIONS
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-5xl lg:text-[60px] text-white leading-tight mb-6"
      >
        Invitations as
        <br />
        Beautiful as Your
        <br />
        Special Day.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-white/80 font-body text-base mb-6 max-w-md"
      >
        Crafted with love for over 35 years in Pallavaram. We print Hindu, Christian, Muslim, and non-religious wedding cards — all fully customisable in Tamil, English, or bilingual.
      </motion.p>
      <ul className="space-y-2 text-white font-body text-[15px] mb-8">
        {[
          "Hindu, Christian & Muslim designs",
          "Tamil & English printing",
          "Minimum order: 50 cards",
          "Ready in 3–5 working days",
          "Free design consultation",
          "Bulk discounts available",
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-gold">✓</span> {item}
          </li>
        ))}
      </ul>
      <a
        href={BUSINESS.whatsappWedding}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-gold text-white font-body font-medium px-8 py-4 rounded-full w-fit hover:bg-gold-light transition-colors"
        style={{ backgroundColor: "var(--color-gold)" }}
      >
        Book a Free Consultation
      </a>
    </div>
    <div className="bg-gold-pale py-12 md:py-16 px-6 md:px-10 flex flex-col" style={{ backgroundColor: "var(--color-gold-pale)" }}>
      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-semibold text-2xl text-navy mb-6"
      >
        Our Wedding Card Collections
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {WEDDING_CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl p-5 border-l-4 border-gray-200 hover:shadow-card transition-shadow"
            style={{ borderLeftColor: cat.borderColor }}
          >
            <div className="font-display font-semibold text-navy mb-1">{cat.emoji} {cat.name}</div>
            <p className="text-gray-text font-body text-sm mb-2">{cat.description}</p>
            <button className="text-gold text-sm font-medium hover:underline" style={{ color: "var(--color-gold)" }}>
              View Samples →
            </button>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 inline-flex w-fit px-4 py-2 rounded-full bg-gold/20 text-navy font-body text-sm" style={{ backgroundColor: "rgba(201,151,58,0.2)" }}>
        Wedding cards starting from ₹8 per card (minimum 50 cards)
      </p>
    </div>
  </section>
);

export default WeddingCardsSection;
