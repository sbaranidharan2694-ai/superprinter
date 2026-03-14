import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS } from "@/data/business";
import { V2_FAQ } from "@/data/v2";

const FAQSectionNew = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-24 bg-white border-t border-border-light" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold font-ui text-sm font-medium mb-2 flex items-center justify-center gap-2" style={{ color: "var(--gold)" }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current" />
            Common questions
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink-black mb-2">
            Everything You Need to Know
          </h2>
        </motion.div>

        <div className="space-y-0 border-t border-border-light">
          {V2_FAQ.map((faq, i) => (
            <div key={i} className="border-b border-border-light">
              <button
                id={`faq-question-${i}`}
                aria-controls={`faq-answer-${i}`}
                aria-expanded={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left py-5 flex items-center justify-between gap-4 font-body font-medium text-ink-black text-[17px] hover:text-gold transition-colors"
              >
                {faq.q}
                <span
                  className={`shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  style={{ color: "var(--gold)" }}
                >
                  ▼
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-gray-text text-[15px] leading-relaxed pb-5 pr-8">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-text font-body text-sm mb-4">Still have a question?</p>
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi, I have a question about your printing services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-ui font-semibold text-ink-black hover:shadow-gold hover:scale-[1.02] transition-all duration-300 ease-spring"
            style={{ backgroundColor: "var(--gold)" }}
          >
            Ask us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSectionNew;
