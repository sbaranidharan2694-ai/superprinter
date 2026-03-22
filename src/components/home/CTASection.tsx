import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/scroll";
import { BUSINESS } from "@/data/business";

const CTASection = () => (
  <section
    id="cta"
    className="relative py-20 overflow-hidden"
    style={{
      background: "#FFFFFF",
      borderTop: "1px solid var(--border-light)",
      boxShadow: "0 -4px 24px rgba(0,0,0,0.04)",
    }}
  >
    {/* Gold accent line */}
    <div
      className="absolute top-0 left-0 right-0 h-1"
      style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
      aria-hidden
    />
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-ui text-sm font-medium tracking-[0.2em] uppercase mb-4"
        style={{ color: "var(--gold)" }}
      >
        Ready to Print?
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-ink-black mb-5"
        style={{
          fontFamily: "var(--font-display)",
          lineHeight: 1.15,
        }}
      >
        Ready to Print? Let's Talk.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-ui text-lg text-gray-600 max-w-xl mx-auto mb-10"
      >
        WhatsApp us your requirements and get a quote in 30 minutes. Proof in 24 hours. Cards in your hands in 48 hours.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button
          type="button"
          onClick={() => scrollToSection("quote-form")}
          className="inline-flex items-center justify-center px-8 py-4 rounded-full font-ui font-semibold text-ink-black transition-all duration-300 ease-spring hover:scale-[1.02] hover:shadow-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          style={{ backgroundColor: "var(--gold)" }}
        >
          Get Instant Quote
        </button>
        <a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full font-ui font-semibold text-navy border-2 border-navy transition-all duration-300 ease-spring hover:scale-[1.02] hover:bg-navy hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          WhatsApp Us
        </a>
        <button
          type="button"
          onClick={() => scrollToSection("products")}
          className="inline-flex items-center justify-center px-8 py-4 rounded-full font-ui font-medium text-gray-600 hover:text-ink-black transition-all duration-300"
        >
          View Products
        </button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
