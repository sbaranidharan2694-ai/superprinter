import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";
import { WEDDING_IMAGES, WEDDING_FEATURES } from "@/data/v2";
import Picture from "@/components/ui/Picture";

const WeddingCardsSection = () => (
  <section
    id="wedding-cards"
    className="section-pad"
    // Was a pink/cream gradient (#FFF4F6 → #FFF0F3 → #FFF8F0) that clashed
    // with the rest of the site's navy/gold/cream palette. Replaced with a
    // cream-only gradient that reads as a "warm soft" backdrop without
    // introducing a new colour key.
    style={{
      background: "linear-gradient(135deg, #FFFCF5 0%, #FFF8EC 50%, #FFFCF5 100%)",
      borderTop: "1px solid rgba(201,168,76,0.18)",
      borderBottom: "1px solid rgba(201,168,76,0.18)",
    }}
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>WEDDING INVITATIONS PALLAVARAM</p>
          <h2 className="font-display font-bold text-3xl md:text-[42px] leading-tight mb-6" style={{ color: "var(--color-primary)", whiteSpace: "pre-line" }}>{"Chennai's Cheapest\nWedding Cards.\nFrom ₹5 per card."}</h2>
          <ul className="space-y-3 mb-8">
            {WEDDING_FEATURES.map((feat) => (
              <li key={feat} className="flex items-start gap-3 text-base" style={{ color: "#374151", fontFamily: "var(--font-body)" }}>
                <span style={{ color: "var(--gold)" }}>✅</span><span>{feat}</span>
              </li>
            ))}
          </ul>
          <a href={BUSINESS.whatsappWedding} target="_blank" rel="noopener noreferrer" className="btn-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base w-full sm:w-auto">💬 Get Free Design Proof on WhatsApp</a>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-3">
          <div className="space-y-3">
            <Picture src={WEDDING_IMAGES[0]} alt="Wedding card design" width={600} height={800} className="w-full rounded-2xl object-cover aspect-[3/4]" loading="lazy" decoding="async" />
          </div>
          <div className="space-y-3 pt-6">
            <Picture src={WEDDING_IMAGES[1]} alt="Wedding invitation suite" width={600} height={600} className="w-full rounded-2xl object-cover aspect-square" loading="lazy" decoding="async" />
            <Picture src={WEDDING_IMAGES[2]} alt="Floral wedding card" width={800} height={600} className="w-full rounded-2xl object-cover aspect-[4/3]" loading="lazy" decoding="async" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WeddingCardsSection;
