import { motion } from "framer-motion";
import { IMG } from "@/data/images";
import { V2_TIMELINE } from "@/data/v2";

const AboutSection = () => (
  <section id="about" className="py-20 md:py-24" style={{ backgroundColor: "var(--paper-white)" }}>
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
            className="w-full rounded-xl shadow-lg border border-border-light"
            loading="lazy"
            width={800}
            height={500}
          />
          <div
            className="absolute -bottom-3 -left-2 px-5 py-2.5 rounded-xl font-display font-semibold text-sm shadow-md"
            style={{ backgroundColor: "var(--gold)", color: "var(--ink-black)" }}
          >
            Est. 1990 · Pallavaram, Chennai
          </div>
          <div className="absolute -right-4 top-1/4 w-1/3 rounded-xl overflow-hidden border-2 border-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=80"
              alt="Print quality"
              className="w-full h-32 object-cover"
            />
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-xs font-body font-medium uppercase tracking-[0.2em] mb-2"
            style={{ color: "var(--gold)" }}
          >
            OUR STORY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl md:text-4xl text-ink-black mb-6"
          >
            35 Years of Ink, Craft & Community
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-charcoal text-base leading-relaxed space-y-4 mb-10"
          >
            <p>
              Founded in 1990 by N. Baranidharan in Pallavaram, Super Printers started as a single-press workshop with one mission: quality printing that local businesses could afford.
            </p>
            <p>
              Over 35 years we&apos;ve become one of Chennai&apos;s most trusted print partners — without losing the values we started with: craftsmanship, reliability, and treating every client like family.
            </p>
            <p>
              From Wipro&apos;s corporate stationery to wedding invitations next door, every job gets our full attention.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative pl-5 border-l-2 mb-10" style={{ borderColor: "var(--gold)" }}>
            {V2_TIMELINE.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative pb-6 last:pb-0"
              >
                <span
                  className="absolute left-0 w-3 h-3 rounded-full -translate-x-[calc(0.5rem+5px)] top-0.5"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                <span className="font-display font-semibold text-ink-black">{milestone.year}</span>
                <span className="text-charcoal font-body text-sm ml-2">{milestone.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Printing tech", desc: "Offset, digital & screen" },
              { title: "Family business", desc: "Run by the same family since 1990" },
              { title: "Pallavaram native", desc: "Serving Chennai from day one" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border-light bg-white p-4"
              >
                <p className="font-display font-semibold text-ink-black text-sm">{item.title}</p>
                <p className="font-body text-gray-600 text-xs mt-0.5">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
