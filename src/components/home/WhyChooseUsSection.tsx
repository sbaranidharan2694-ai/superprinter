import { motion } from "framer-motion";
import { V2_WHY_CHOOSE, V2_COMPARISON_ROWS } from "@/data/v2";
import { BUSINESS } from "@/data/business";

const cardBg = (highlight: string) => {
  switch (highlight) {
    case "gold":
      return "var(--gold)";
    case "navy":
      return "var(--navy-deep)";
    case "wedding":
      return "var(--wedding-deep)";
    default:
      return "var(--pure-white)";
  }
};

const cardBorder = (highlight: string) => {
  if (highlight === "white") return "1px solid var(--border-light)";
  return "none";
};

const cardText = (highlight: string) => {
  if (highlight === "navy" || highlight === "wedding") return "text-white";
  if (highlight === "gold") return "text-ink-black";
  return "text-ink-black";
};

const WhyChooseUsSection = () => (
  <section id="why-us" className="py-20 md:py-24" style={{ backgroundColor: "var(--paper-white)" }}>
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-14"
      >
        <p className="text-gold text-xs font-body font-medium uppercase tracking-[0.2em] mb-2" style={{ color: "var(--gold)" }}>
          WHY SUPER PRINTERS
        </p>
        <h2 className="font-display font-bold text-ink-black text-3xl md:text-4xl mb-3">
          35 Years Ahead of the Competition
        </h2>
        <p className="text-gray-text font-body text-base max-w-2xl mx-auto">
          Heritage, speed, and trust — why Chennai&apos;s businesses and couples choose us.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {V2_WHY_CHOOSE.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.06 }}
            className="rounded-2xl p-6 border shadow-md hover:shadow-lg transition-all duration-300"
            style={{
              backgroundColor: cardBg(card.highlight),
              border: cardBorder(card.highlight),
            }}
          >
            <span className="text-2xl mb-3 block">{card.icon}</span>
            <h3 className={`font-display font-semibold text-lg mb-2 ${cardText(card.highlight)}`}>
              {card.title}
            </h3>
            <p className={`font-body text-sm leading-relaxed ${card.highlight === "navy" || card.highlight === "wedding" ? "text-white/85" : card.highlight === "gold" ? "text-ink-black/90" : "text-gray-700"}`}>
              {card.body}
            </p>
            {card.id === "whatsapp" && (
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full text-sm font-body font-semibold text-white bg-whatsapp hover:opacity-90 transition-opacity"
              >
                💬 WhatsApp us
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Comparison table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="overflow-x-auto rounded-xl border border-border-light shadow-md"
        style={{ backgroundColor: "var(--pure-white)" }}
      >
        <table className="w-full min-w-[500px] text-left">
          <thead>
            <tr style={{ backgroundColor: "var(--gold)" }}>
              <th className="px-6 py-4 font-display font-semibold text-ink-black">Feature</th>
              <th className="px-6 py-4 font-display font-semibold text-ink-black">Super Printers</th>
              <th className="px-6 py-4 font-display font-semibold text-ink-black">Others</th>
            </tr>
          </thead>
          <tbody>
            {V2_COMPARISON_ROWS.map((row, i) => (
              <tr
                key={row.feature}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-3 font-body text-sm text-ink-black">{row.feature}</td>
                <td className="px-6 py-3 font-body text-sm text-gray-700">{row.super}</td>
                <td className="px-6 py-3 font-body text-sm text-gray-500">{row.others}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="px-6 py-3 text-xs font-body text-gray-500 border-t border-border-light">
          Super Printers vs. Other Chennai Printers
        </p>
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUsSection;
