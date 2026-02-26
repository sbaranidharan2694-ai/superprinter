import { useState } from "react";
import { faqData } from "@/data/services";
import { useInView } from "@/hooks/useInView";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} id="faq" className={`py-16 md:py-20 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
          <p className="text-muted-foreground font-body">Everything you need to know about printing with Super Printers, Pallavaram</p>
        </div>
        <div className="space-y-3">
          {faqData.map((faq, i) => (
            <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-sm text-card-foreground font-body">{faq.q}</span>
                <span className={`text-secondary text-xl shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-4 px-6" : "max-h-0"}`}>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
