import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";
import { LANDING_TESTIMONIALS } from "@/data/landing";

const CLIENT_LOGOES = [
  { name: "Wipro", short: "Wipro" },
  { name: "TTK Healthcare", short: "TTK" },
  { name: "Reckitt Benckiser", short: "RB" },
  { name: "Local Business", short: "LB1" },
  { name: "Local Business", short: "LB2" },
  { name: "Local Business", short: "LB3" },
];

const SocialProofSection = () => (
  <section id="reviews" className="py-16 md:py-24 bg-cream">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-gold text-xs font-body font-medium uppercase tracking-widest mb-2" style={{ color: "var(--color-gold)" }}>
          TRUSTED BY INDIA&apos;S BEST BRANDS
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
          {CLIENT_LOGOES.map((client) => (
            <div
              key={client.short}
              className="w-24 h-12 flex items-center justify-center bg-white rounded-lg border border-gray-200 text-navy font-display font-bold text-sm"
            >
              {client.short}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-gold text-xs font-body font-medium uppercase tracking-widest mb-2" style={{ color: "var(--color-gold)" }}>
          WHAT OUR CUSTOMERS SAY
        </p>
        <h2 className="font-display font-semibold text-3xl md:text-[40px] text-navy mb-2">
          10,000+ Happy Clients
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LANDING_TESTIMONIALS.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl p-7 border border-gray-200 shadow-card"
          >
            <div className="text-gold text-xl mb-3" style={{ color: "var(--color-gold)" }}>
              ★★★★★
            </div>
            <p className="font-body text-charcoal text-[15px] italic leading-relaxed mb-4">
              &ldquo;{review.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-sm"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                {review.initials}
              </div>
              <div>
                <p className="font-body font-medium text-sm text-navy">{review.name}</p>
                <p className="font-body text-xs text-gray-text">{review.service}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <a
          href={BUSINESS.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-text font-body text-sm hover:text-gold transition-colors"
        >
          <span>Google</span>
          <span className="text-gold" style={{ color: "var(--color-gold)" }}>4.8 ★</span>
          <span>on Google Reviews</span>
          <span>View all reviews →</span>
        </a>
      </motion.div>
    </div>
  </section>
);

export default SocialProofSection;
