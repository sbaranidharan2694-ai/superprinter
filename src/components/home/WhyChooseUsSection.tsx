import { motion } from "framer-motion";
import { WHY_ITEMS } from "@/data/v2";

const WhyChooseUsSection = () => (
  <section id="why-us" className="section-pad" style={{ backgroundColor: "var(--color-cream)" }}>
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p
          className="text-xs font-bold tracking-[0.15em] uppercase mb-2"
          style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
        >
          WHY CHOOSE US
        </p>
        <h2
          className="font-display font-bold text-3xl md:text-4xl"
          style={{ color: "var(--color-primary)" }}
        >
          Why 10,000+ Chennai Customers Choose Us
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHY_ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-white rounded-2xl p-6 shadow-sm border"
            style={{ borderColor: "var(--border-light)" }}
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3
              className="font-display font-bold text-lg mb-2"
              style={{ color: "var(--color-primary)", fontFamily: "var(--font-accent)" }}
            >
              {item.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
