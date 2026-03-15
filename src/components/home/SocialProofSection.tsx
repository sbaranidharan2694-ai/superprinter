import { motion } from "framer-motion";
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
        <h2 className="font-display font-bold text-3xl md:text-4xl" style={{ color: "var(--color-primary)" }}>
          What Our Customers Say
        </h2>
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
            {/* Stars */}
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: review.rating }).map((_, s) => (
                <span key={s} style={{ color: "var(--gold)" }}>★</span>
              ))}
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}
            >
              {review.text}
            </p>
            <div>
              <p className="font-bold text-sm" style={{ color: "var(--color-primary)", fontFamily: "var(--font-accent)" }}>
                {review.name}
              </p>
              <p className="text-xs" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
                {review.location} · {review.product}
              </p>
            </div>
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
          href="https://g.page/r/super-printers/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 text-sm font-semibold transition-colors hover:bg-white"
          style={{
            borderColor: "var(--gold)",
            color: "var(--gold)",
            fontFamily: "var(--font-accent)",
          }}
        >
          ⭐ Read All 147 Reviews on Google →
        </a>
      </motion.div>
    </div>
  </section>
);

export default SocialProofSection;
