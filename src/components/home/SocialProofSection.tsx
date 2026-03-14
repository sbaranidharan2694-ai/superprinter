import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";
import { V2_REVIEWS, V2_FEATURED_QUOTE } from "@/data/v2";

const CLIENT_LOGOES = ["Wipro", "TTK Healthcare", "Reckitt", "Local Business", "Local Business", "Local Business"];

const SocialProofSection = () => (
  <section id="reviews" className="py-20 md:py-24" style={{ backgroundColor: "var(--paper-white)" }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex overflow-x-auto gap-8 pb-6 mb-10 -mx-6 px-6 scrollbar-hide">
        {CLIENT_LOGOES.map((name) => (
          <div
            key={name}
            className="shrink-0 w-28 h-14 flex items-center justify-center rounded-3xl border border-border-light bg-white font-display font-bold text-sm text-ink-black/70 shadow-sm"
          >
            {name}
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-gold font-ui text-sm font-medium mb-2 flex items-center justify-center gap-2" style={{ color: "var(--gold)" }}>
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current" />
          What clients say
        </p>
        <h2 className="font-display font-bold text-ink-black text-3xl md:text-4xl">
          10,000+ Satisfied Customers
        </h2>
      </motion.div>

      {/* Featured quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl p-8 md:p-10 mb-10 text-center shadow-card"
        style={{ backgroundColor: "var(--navy-deep)" }}
      >
        <span className="text-6xl text-gold/40 font-serif leading-none" style={{ color: "var(--gold)" }}>&ldquo;</span>
        <p className="font-display text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto -mt-4">
          {V2_FEATURED_QUOTE.quote}
        </p>
        <p className="font-body text-white/70 text-sm mt-3">{V2_FEATURED_QUOTE.author}</p>
      </motion.div>

      {/* Masonry-style grid of review cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {V2_REVIEWS.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 28, delay: i * 0.05 }}
            className="bg-white rounded-3xl p-6 border border-border-light shadow-card hover:shadow-hover transition-all duration-300 ease-spring hover:-translate-y-0.5"
          >
            <div className="text-gold text-lg mb-2" style={{ color: "var(--gold)" }}>
              {"★".repeat(review.stars)}
            </div>
            <p className="font-body text-charcoal text-[15px] leading-relaxed mb-4 line-clamp-4">
              &ldquo;{review.quote}&rdquo;
            </p>
            <div className="border-t border-border-light pt-4 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-sm shrink-0"
                style={{ backgroundColor: "var(--gold)" }}
              >
                {review.initials}
              </div>
              <div>
                <p className="font-body font-semibold text-sm text-ink-black">{review.name}</p>
                <p className="font-body text-xs text-gray-text">{review.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <a
          href={BUSINESS.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 font-body text-sm hover:border-gold hover:text-gold transition-colors"
          style={{ borderColor: "var(--border-light)", color: "var(--ink-black)" }}
        >
          <span className="text-gold" style={{ color: "var(--gold)" }}>⭐ 4.8</span>
          on Google Reviews — View all
        </a>
      </motion.div>
    </div>
  </section>
);

export default SocialProofSection;
