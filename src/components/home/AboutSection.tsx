import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";
import { TIMELINE } from "@/data/v2";

const AboutSection = () => (
  <section id="about" className="section-pad" style={{ backgroundColor: "var(--bg-white)" }}>
    <div className="max-w-5xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <p className="text-xs font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>OUR STORY</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl" style={{ color: "var(--color-primary)" }}>About Super Printers</h2>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col sm:flex-row items-center gap-6 mb-14 p-6 rounded-2xl border" style={{ borderColor: "var(--border-light)" }}>
        <div className="w-20 h-20 rounded-full flex items-center justify-center shrink-0 font-display font-bold text-2xl" style={{ backgroundColor: "var(--gold)", color: "var(--color-primary)" }}>NB</div>
        <div>
          <h3 className="font-display font-bold text-xl mb-1" style={{ color: "var(--color-primary)" }}>{BUSINESS.founder}</h3>
          <p className="text-xs font-medium mb-2" style={{ color: "var(--gold)", fontFamily: "var(--font-accent)" }}>{BUSINESS.founderTitle}</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>{BUSINESS.founderBio}</p>
        </div>
      </motion.div>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5" style={{ backgroundColor: "var(--gold)" }} />
        <div className="space-y-10">
          {TIMELINE.map((item, i) => (
            <motion.div key={item.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}>
              <div className="absolute left-2 md:left-auto w-5 h-5 rounded-full border-4" style={{ borderColor: "var(--gold)", backgroundColor: "var(--bg-white)", top: "4px", ...(i % 2 === 0 ? { right: "-10px" } : { left: "-10px" }) }} />
              <span className="font-display font-bold text-xl" style={{ color: "var(--gold)" }}>{item.year}</span>
              <h3 className="font-display font-bold text-lg mt-1" style={{ color: "var(--color-primary)" }}>{item.title}</h3>
              <p className="text-sm mt-1" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
