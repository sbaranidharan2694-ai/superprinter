import { motion } from "framer-motion";
import { FAQ_ITEMS } from "@/data/v2";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSectionNew = () => (
  <section id="faq" className="section-pad" style={{ backgroundColor: "var(--color-cream)" }}>
    <div className="max-w-3xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <p className="text-xs font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>FREQUENTLY ASKED</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl" style={{ color: "var(--color-primary)" }}>Common Questions</h2>
      </motion.div>
      <Accordion type="single" collapsible className="space-y-3">
        {FAQ_ITEMS.map((faq, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <AccordionItem value={`faq-${i}`} className="bg-white rounded-xl border-none shadow-sm px-5">
              <AccordionTrigger className="text-left font-semibold text-sm py-4 hover:no-underline" style={{ color: "var(--color-primary)", fontFamily: "var(--font-body)" }}>{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm pb-4 leading-relaxed" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>{faq.a}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSectionNew;
