import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";
import { PROCESS_STEPS } from "@/data/v2";

const HowItWorksSection = () => (
  <section id="process" className="py-20 md:py-24 relative bg-white" style={{ backgroundColor: "#FFFFFF" }}>
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-gold font-ui text-sm font-medium mb-2 flex items-center justify-center gap-2" style={{ color: "var(--gold)" }}>
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current" />
          Simple ordering
        </p>
        <h2 className="font-display font-bold text-ink-black text-3xl md:text-4xl">
          Ready in 4 Steps
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
        {PROCESS_STEPS.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative flex flex-col items-center text-center pt-8"
          >
            <div className="step-number font-display leading-none" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "96px", color: "rgba(212,168,67,0.12)", lineHeight: 1, position: "absolute", top: "-16px", left: "50%", transform: "translateX(-50%)", pointerEvents: "none", userSelect: "none" }}>
              {step.step}
            </div>
            <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-2xl mb-3" style={{ backgroundColor: "var(--gold)" }}>{[...step.title][0]}</div>
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full mb-2"
              style={{ backgroundColor: "var(--gold)", color: "var(--color-primary)", fontFamily: "var(--font-accent)" }}
            >
              {step.time}
            </span>
            <h3 className="font-ui font-semibold text-[20px] text-ink-black mb-2">{step.title}</h3>
            <p className="font-ui text-[15px] leading-relaxed max-w-[200px]" style={{ color: "#6B7280" }}>
              {step.desc}
            </p>
            {i < PROCESS_STEPS.length - 1 && (
              <div className="hidden md:block absolute top-16 left-[55%] w-[90%] h-px border-t border-dashed border-gold/40" style={{ borderColor: "rgba(212,168,67,0.4)" }} />
            )}
          </motion.div>
        ))}
      </div>

      <p
        className="text-center text-sm mt-8"
        style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}
      >
        Average turnaround: <strong>24 hours from approval.</strong> Same-day printing available — WhatsApp before 12PM.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-14"
      >
        <a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-gold text-ink-black font-ui font-semibold text-lg px-10 py-4 rounded-full hover:shadow-gold hover:scale-[1.02] transition-all duration-300 ease-spring"
          style={{ backgroundColor: "var(--gold)", color: "var(--ink-black)" }}
        >
          Start Your Order on WhatsApp
        </a>
        <p className="text-gray-text font-body text-sm mt-3">Quote in 30 minutes · No obligation</p>
      </motion.div>
    </div>
  </section>
);

export default HowItWorksSection;
