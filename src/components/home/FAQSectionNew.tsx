import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LANDING_FAQ } from "@/data/landing";

const FAQSectionNew = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-semibold text-3xl md:text-[40px] text-navy mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-text font-body text-base">
            Everything you need to know before placing your order
          </p>
        </motion.div>

        <div className="space-y-0 border-t border-gray-200">
          {LANDING_FAQ.map((faq, i) => (
            <div
              key={i}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-0 py-5 flex items-center justify-between gap-4 font-body font-medium text-navy text-[17px] hover:text-gold transition-colors"
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <span
                  className={`shrink-0 text-gold transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  style={{ color: "var(--color-gold)" }}
                >
                  ▼
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
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
      </div>
    </section>
  );
};

export default FAQSectionNew;
