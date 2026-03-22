import { motion } from "framer-motion";
import { IMAGE_PATHS } from "@/data/imagePaths";
import { TESTIMONIALS } from "@/data/v2";

const SocialProofSection = () => (
  <section id="reviews" className="section-pad" style={{ backgroundColor: "var(--color-cream)" }}>
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-xs font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>
          CUSTOMER REVIEWS
        </p>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-3" style={{ color: "var(--color-primary)" }}>
          What Chennai Customers Say About Us
        </h2>
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-sm font-bold" style={{ color: "var(--color-primary)" }}>
          ⭐ 4.8 on Google · 147 Verified Reviews
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="review-card bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-start gap-4 mb-4">
              <img
                src={review.avatar}
                alt=""
                className="w-14 h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-amber-100"
                loading="lazy"
                onError={(e) => { const t = e.currentTarget; if (t.dataset.fallback) return; t.dataset.fallback = "1"; t.src = IMAGE_PATHS.placeholder; }}
              />
              <div className="min-w-0 flex-1">
                <p className="font-bold text-sm" style={{ color: "var(--color-primary)", fontFamily: "var(--font-accent)" }}>
                  {review.name}
                </p>
                <p className="text-xs mb-2" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
                  {review.location} · {review.product}
                </p>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <span key={s} style={{ color: "var(--gold)" }}>★</span>
                  ))}
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}
            >
              {review.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <a
          href="https://www.google.com/maps/search/?api=1&query=Super+printers+and+wedding+cards"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 text-sm font-semibold transition-colors hover:bg-white"
          style={{
            borderColor: "var(--gold)",
            color: "var(--gold)",
            fontFamily: "var(--font-accent)",
          }}
        >
          View All 147 Reviews on Google →
        </a>
      </motion.div>
    </div>
  </section>
);

export default SocialProofSection;
