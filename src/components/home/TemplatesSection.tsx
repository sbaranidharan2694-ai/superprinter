import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";
import { V3_TEMPLATES } from "@/data/v2";

const TEMPLATES_IMG = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80";

const TemplatesSection = () => (
  <section
    id="templates"
    className="py-20 md:py-24 scroll-mt-[108px]"
    style={{ backgroundColor: "#FFFFFF" }}
  >
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-gold font-ui text-sm font-medium mb-2 flex items-center justify-center gap-2" style={{ color: "var(--gold)" }}>
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current" />
          Free Print-Ready Templates
        </p>
        <h2 className="font-display font-bold text-ink-black text-3xl md:text-4xl mb-3">
          Download, fill in your details, and send us the file.
        </h2>
        <p className="font-ui text-gray-600 max-w-2xl mx-auto">
          We&apos;ll print it perfectly — guaranteed.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {V3_TEMPLATES.map((tpl, i) => (
          <motion.article
            key={tpl.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl border border-border-light shadow-card p-6 hover:shadow-hover transition-all duration-300"
          >
            <div className="aspect-[4/3] rounded-xl mb-4 overflow-hidden bg-gray-100">
              <img src={TEMPLATES_IMG} alt="" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display font-semibold text-lg text-navy mb-1" style={{ color: "var(--navy-deep)" }}>
              {tpl.name}
            </h3>
            <p className="font-ui text-sm text-gray-600 mb-3">{tpl.specs}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tpl.formats.map((fmt) => (
                <span
                  key={fmt}
                  className="px-2.5 py-1 rounded-full text-xs font-ui font-medium bg-gold/10 text-amber-800"
                  style={{ backgroundColor: "rgba(212,168,67,0.15)", color: "#854F0B" }}
                >
                  {fmt}
                </span>
              ))}
            </div>
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hi! I'd like the ${tpl.name} print template. Please send me the PDF/AI file.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-2.5 rounded-full font-ui font-semibold text-sm border-2 transition-all hover:scale-[1.02]"
              style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
            >
              Download Template
            </a>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl p-6 text-center"
        style={{ backgroundColor: "var(--gold-bg)" }}
      >
        <p className="font-ui text-ink-black text-sm mb-2">
          Using Adobe Illustrator, Photoshop, or CorelDraw? Share your file via WhatsApp and we&apos;ll check it for free before printing.
        </p>
        <p className="font-ui text-gray-600 text-xs">
          Accepted formats: PDF (preferred) · AI · EPS · CDR · PSD · PNG (300 DPI min)
        </p>
      </motion.div>
    </div>
  </section>
);

export default TemplatesSection;
