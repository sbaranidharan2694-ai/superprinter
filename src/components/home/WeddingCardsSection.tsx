import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";
import { WEDDING_IMAGES, WEDDING_FEATURES } from "@/data/v2";

const WeddingCardsSection = () => (
  <section id="wedding-cards" className="section-pad" style={{ backgroundColor: "var(--color-primary)" }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>WEDDING INVITATIONS PALLAVARAM</p>
          <h2 className="font-display font-bold text-3xl md:text-[42px] leading-tight text-white mb-6" style={{ whiteSpace: "pre-line" }}>{"Beautiful Wedding Cards\nFrom ₹8 per card."}</h2>
          <ul className="space-y-3 mb-8">
            {WEDDING_FEATURES.map((feat) => (
              <li key={feat} className="flex items-start gap-3 text-white/80 text-base" style={{ fontFamily: "var(--font-body)" }}>
                <span style={{ color: "var(--gold)" }}>✅</span><span>{feat}</span>
              </li>
            ))}
          </ul>
          <a href={BUSINESS.whatsappWedding} target="_blank" rel="noopener noreferrer" className="btn-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base w-full sm:w-auto">💬 Get Free Design Proof on WhatsApp</a>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-3">
          <div className="space-y-3">
            <img src={WEDDING_IMAGES[0]} alt="Wedding card design" className="w-full rounded-2xl object-cover aspect-[3/4]" loading="lazy" />
          </div>
          <div className="space-y-3 pt-6">
            <img src={WEDDING_IMAGES[1]} alt="Wedding invitation suite" className="w-full rounded-2xl object-cover aspect-square" loading="lazy" />
            <img src={WEDDING_IMAGES[2]} alt="Floral wedding card" className="w-full rounded-2xl object-cover aspect-[4/3]" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WeddingCardsSection;
