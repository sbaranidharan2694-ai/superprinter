import { motion } from "framer-motion";
import { IMG } from "@/data/images";
import { TIMELINE } from "@/data/landing";

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-gold-pale" style={{ backgroundColor: "var(--color-gold-pale)" }}>
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={IMG.aboutUnsplash}
            alt="Super Printers workshop"
            className="w-full rounded-3xl shadow-card border-[3px] border-gold/30"
            style={{ borderColor: "rgba(201,151,58,0.3)" }}
            loading="lazy"
            width={800}
            height={500}
          />
          <div
            className="absolute bottom-4 left-4 bg-gold text-white font-display font-medium text-base px-5 py-3 rounded-xl"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            Est. 1990 · Pallavaram
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-xs font-body font-medium uppercase tracking-widest mb-2"
            style={{ color: "var(--color-gold)" }}
          >
            OUR STORY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-semibold text-3xl md:text-[40px] text-navy mb-6"
          >
            35 Years of Ink, Craft & Community
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-charcoal text-base leading-relaxed space-y-4"
            style={{ color: "var(--color-charcoal)", lineHeight: "1.8" }}
          >
            <p>
              Founded in 1990 by N. Baranidharan in the heart of Pallavaram, Super Printers began as a single-press workshop with a single mission: deliver quality printing that local businesses could actually afford.
            </p>
            <p>
              Over three and a half decades, we&apos;ve grown into one of Chennai&apos;s most trusted printing partners — but we&apos;ve never lost the values that started it all: craftsmanship, reliability, and treating every client like family.
            </p>
            <p>
              From Wipro&apos;s corporate stationery to a neighbour&apos;s daughter&apos;s wedding invitations, every job gets our full attention.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-8">
            {TIMELINE.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <span
                  className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "var(--color-gold)" }}
                />
                <div>
                  <span className="font-display font-semibold text-navy">{milestone.year}</span>
                  <span className="text-charcoal font-body text-sm ml-2">{milestone.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
