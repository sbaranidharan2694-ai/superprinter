import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";
import { V2_REVIEWS, V2_FEATURED_QUOTE } from "@/data/v2";
import { CLIENTS } from "@/data/clients";

const SocialProofSection = () => (
  <section id="reviews" className="py-20 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex overflow-x-auto gap-8 pb-6 mb-10 -mx-6 px-6 scrollbar-hide items-center">
        {CLIENTS.map((c) => (
          <div
            key={c.name}
            className="shrink-0 w-28 h-14 flex items-center justify-center rounded-3xl border border-border-light bg-white shadow-sm overflow-hidden p-2"
          >
            <img
              src={c.logo}
              alt={`${c.name} logo`}
              className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all"
              loading="lazy"
            />
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
        className="review-card relative rounded-r-2xl pl-[56px] pr-12 py-12 mb-10 border-l-4 shadow-card"
        style={{
          background: "#FFFFFF",
          borderLeftColor: "var(--gold)",
        }}
      >
        <span className="absolute left-6 top-8 font-display text-[160px] leading-none select-none" style={{ color: "rgba(212,168,67,0.12)" }}>&ldquo;</span>
        <p className="font-display italic font-semibold text-navy text-2xl md:text-[28px] leading-snug relative z-10 max-w-3xl">
          {V2_FEATURED_QUOTE.quote}
        </p>
        <div className="flex items-center gap-4 mt-6">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-ink-black font-display font-bold text-sm shrink-0"
            style={{ backgroundColor: "var(--gold)" }}
          >
            {V2_FEATURED_QUOTE.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
          <div>
            <p className="font-ui font-semibold text-[15px] text-ink-black">{V2_FEATURED_QUOTE.author}</p>
            <p className="font-ui text-[13px] font-light text-gray-500">Verified customer</p>
          </div>
        </div>
      </motion.div>

      {/* Review cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {V2_REVIEWS.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 28, delay: i * 0.05 }}
            className="review-card bg-white rounded-2xl p-6 border border-border-light shadow-card hover:shadow-hover transition-all duration-300 ease-spring hover:-translate-y-0.5 relative"
            style={{ border: "1px solid rgba(26,44,91,0.08)", borderRadius: "16px", padding: "24px" }}
          >
            <div className="flex items-center gap-1 mb-3">
              <svg width="14" height="14" viewBox="0 0 24 24" className="shrink-0">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-[11px] font-ui" style={{ color: "#6B7280" }}>Verified Google Review</span>
            </div>
            <div className="flex gap-0.5 mb-3" style={{ color: "var(--gold)" }} aria-label={`${review.stars} stars`}>
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              ))}
            </div>
            <p className="font-ui text-[14px] italic leading-relaxed mb-4 line-clamp-4 text-ink-black" style={{ lineHeight: 1.8 }}>
              &ldquo;{review.quote}&rdquo;
            </p>
            <div className="border-t border-border-light pt-4 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-ink-black font-display font-bold text-sm shrink-0"
                style={{ backgroundColor: "var(--gold)" }}
              >
                {review.initials}
              </div>
              <div className="min-w-0">
                <p className="font-ui font-semibold text-sm text-ink-black">{review.name}</p>
                <p className="font-ui text-xs text-gray-500 truncate">{review.role}</p>
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
