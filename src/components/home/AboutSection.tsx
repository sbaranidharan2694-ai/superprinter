import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";
import { TIMELINE } from "@/data/v2";

const STATS = [
  { value: "35+", label: "Years in Business" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "4.8 ★", label: "Google Rating" },
  { value: "24hr", label: "Turnaround" },
];

const AboutSection = () => (
  <section id="about" className="section-pad overflow-hidden" style={{ backgroundColor: "var(--bg-white)" }}>
    <div className="max-w-6xl mx-auto px-6">

      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>
          OUR STORY
        </p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4" style={{ color: "var(--color-primary)" }}>
          Pallavaram's Most Trusted<br />Printing Press Since 1990
        </h2>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
          Three generations of Chennai families and businesses have trusted us with their most important print work — from first visiting cards to children's wedding invitations.
        </p>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center p-6 rounded-2xl"
            style={{ backgroundColor: "var(--color-cream, #FFFDF7)", border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <div className="font-display font-extrabold text-4xl mb-1" style={{ color: "var(--color-primary)" }}>
              {stat.value}
            </div>
            <div className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Founder Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl p-8 md:p-10 mb-16 overflow-hidden"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: "var(--gold)" }} />
        <div className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: "var(--gold)" }} />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 font-display font-extrabold text-2xl"
            style={{ backgroundColor: "var(--gold)", color: "var(--color-primary)" }}
          >
            NB
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-70" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>
              FOUNDER'S MESSAGE
            </p>
            <blockquote className="font-display text-xl md:text-2xl font-bold text-white leading-snug mb-3">
              "We treat every print job as if it carries our own name on it — because our reputation has been built one order at a time since 1990."
            </blockquote>
            <p className="font-bold text-white/90" style={{ fontFamily: "var(--font-body)" }}>
              {BUSINESS.founder}
              <span className="font-normal text-white/60 ml-2">— Founder, Super Printers</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-xs font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>
          OUR JOURNEY
        </p>
        <h3 className="font-display font-bold text-3xl" style={{ color: "var(--color-primary)" }}>
          35 Years of Excellence
        </h3>
      </motion.div>

      <div className="relative">
        <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-px" style={{ backgroundColor: "rgba(201,168,76,0.3)" }} />

        <div className="space-y-8">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative pl-14 md:pl-0 md:w-[46%] ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:ml-[54%] md:pl-10"}`}
            >
              <div
                className="absolute left-[10px] md:left-auto w-5 h-5 rounded-full border-4 z-10"
                style={{
                  borderColor: "var(--gold)",
                  backgroundColor: "#fff",
                  top: "6px",
                  ...(i % 2 === 0
                    ? { right: "-42px" }
                    : { left: "-42px" }),
                }}
              />

              <div
                className="p-5 rounded-2xl"
                style={{ backgroundColor: "var(--color-cream, #FFFDF7)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <span
                  className="inline-block font-display font-extrabold text-2xl mb-1"
                  style={{ color: "var(--gold)" }}
                >
                  {item.year}
                </span>
                <h4
                  className="font-display font-bold text-lg mb-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-lg mb-6 font-medium" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
          Ready to experience 35 years of printing expertise?
        </p>
        <a
          href={BUSINESS.whatsappGeneral}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base transition-transform hover:scale-[1.03]"
          style={{ backgroundColor: "#25D366", fontFamily: "var(--font-accent)" }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us for a Quote
        </a>
      </motion.div>

    </div>
  </section>
);

export default AboutSection;
