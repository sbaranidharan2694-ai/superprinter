import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/scroll";
import { BUSINESS } from "@/data/business";

const CTASection = () => (
  <section
    id="cta"
    className="relative py-20 overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #0F1B3A 0%, #1A2C5B 50%, #111318 100%)",
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
        className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-5"
        style={{
          fontFamily: "var(--font-display)",
          lineHeight: 1.15,
          color: "#FFFFFF",
        }}
      >
        Get Your Quote Today
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-ui text-lg text-white/80 max-w-xl mx-auto mb-10"
      >
        Quality printing in 48 hours. Share your requirements and we&apos;ll send a quick quote.
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
          className="inline-flex items-center justify-center px-8 py-4 rounded-full font-ui font-semibold text-ink-black transition-all duration-300 ease-spring hover:scale-[1.02] hover:shadow-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#111318]"
          style={{ backgroundColor: "var(--gold)" }}
        >
          Get Instant Quote
        </button>
        <a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full font-ui font-semibold text-white border-2 transition-all duration-300 ease-spring hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#111318]"
          style={{ borderColor: "var(--gold)", color: "#FFFFFF" }}
        >
          WhatsApp Us
        </a>
        <button
          type="button"
          onClick={() => scrollToSection("products")}
          className="inline-flex items-center justify-center px-8 py-4 rounded-full font-ui font-medium text-white/90 hover:text-white transition-all duration-300"
        >
          View Products
        </button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
