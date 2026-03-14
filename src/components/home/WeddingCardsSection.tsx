import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/scroll";
import { BUSINESS } from "@/data/business";
import { V2_WEDDING_COLLECTIONS, V2_WEDDING_PROCESS } from "@/data/v2";

const HERO_IMG_LEFT = "https://images.unsplash.com/photo-1607000975631-4bd2e12d00da?w=600&q=80";
const HERO_IMG_RIGHT = "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80";

const WeddingCardsSection = () => (
  <>
    {/* Hero strip */}
    <section className="relative grid grid-cols-1 lg:grid-cols-5 min-h-[500px] lg:min-h-[600px]">
      <div className="relative lg:col-span-2 h-64 lg:h-auto">
        <img src={HERO_IMG_LEFT} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-wedding-deep/80" style={{ backgroundColor: "rgba(74,14,34,0.8)" }} />
      </div>
      <div className="relative lg:col-span-3 h-64 lg:h-auto">
        <img src={HERO_IMG_RIGHT} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-wedding-deep/70" style={{ backgroundColor: "rgba(74,14,34,0.7)" }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="text-center max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-xs font-body font-medium uppercase tracking-[0.2em] mb-3"
            style={{ color: "var(--gold)" }}
          >
            WEDDING & EVENT INVITATIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4"
          >
            Invitations as Unforgettable as Your Special Day.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/85 font-body text-base mb-6"
          >
            Hindu, Christian, Muslim & modern designs. Tamil, English & bilingual. From ₹8 per card. Free proof in 24 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href={BUSINESS.whatsappWedding}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gold text-ink-black font-body font-semibold px-8 py-3.5 rounded-full hover:shadow-gold transition-all"
              style={{ backgroundColor: "var(--gold)", color: "var(--ink-black)" }}
            >
              Get Free Design Proof
            </a>
            <button
              onClick={() => scrollToSection("quote-form")}
              className="inline-flex items-center justify-center border-2 border-white text-white font-body font-medium px-8 py-3.5 rounded-full hover:bg-white hover:text-wedding-deep transition-all"
            >
              Request Quote
            </button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Collections grid */}
    <section className="py-20 md:py-24" style={{ backgroundColor: "var(--paper-white)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-2xl md:text-3xl text-ink-black mb-10 text-center"
        >
          Our Wedding Collections
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {V2_WEDDING_COLLECTIONS.map((card, i) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl overflow-hidden bg-white border border-border-light shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={card.image} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                {card.badge && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-body font-semibold text-ink-black" style={{ backgroundColor: "var(--gold)" }}>
                    {card.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h4 className="font-display font-semibold text-lg text-ink-black mb-2">{card.name}</h4>
                <p className="font-body text-sm text-gray-600 mb-3 line-clamp-2">{card.description}</p>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-body font-semibold bg-gold/20 text-ink-black mb-3" style={{ backgroundColor: "var(--gold-bg)" }}>
                  {card.price}
                </span>
                <a
                  href={BUSINESS.whatsappWedding}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-body font-medium text-gold hover:underline"
                  style={{ color: "var(--gold)" }}
                >
                  View Designs →
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {V2_WEDDING_PROCESS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="inline-flex w-12 h-12 rounded-full bg-gold/20 text-gold font-display font-bold text-lg items-center justify-center mb-3" style={{ backgroundColor: "var(--gold-bg)", color: "var(--gold)" }}>
                {step.step}
              </span>
              <h4 className="font-display font-semibold text-ink-black mb-2">{step.title}</h4>
              <p className="font-body text-sm text-gray-600">{step.body}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={BUSINESS.whatsappWedding}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gold text-ink-black font-body font-semibold px-8 py-4 rounded-full hover:shadow-gold transition-all"
            style={{ backgroundColor: "var(--gold)", color: "var(--ink-black)" }}
          >
            WhatsApp us now
          </a>
        </div>
      </div>
    </section>
  </>
);

export default WeddingCardsSection;
