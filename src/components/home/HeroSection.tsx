import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BUSINESS } from "@/data/business";
import { IMAGE_PATHS } from "@/data/imagePaths";
import { HERO } from "@/data/v2";

/**
 * Hero — editorial print-shop, not SaaS. One headline, one body line, one
 * primary CTA, one secondary CTA, one inline proof line, one editorial image.
 *
 * Was: H1 + 3-line body + 2 CTAs + 3 badge pills + 4-product mosaic grid
 * (which duplicated ProductsSection right below). That's 7 visual layers
 * competing for the first viewport. New: 5 layers, clearer hierarchy.
 */
const HeroSection = () => (
  <section
    className="relative overflow-hidden"
    style={{ background: "linear-gradient(180deg, #FFFDF7 0%, #FFFAF0 100%)" }}
  >
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32 w-full">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Copy column */}
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5 font-ui"
            style={{ color: "var(--gold-dark)" }}
          >
            {HERO.microLabel}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="font-display font-bold text-[40px] sm:text-5xl lg:text-[64px] leading-[1.04] tracking-[-0.01em] mb-5"
            style={{ color: "var(--ink-black)" }}
          >
            {HERO.h1}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display italic text-lg md:text-xl mb-5 max-w-xl"
            style={{ color: "var(--gold-dark)" }}
          >
            {HERO.accent}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}
          >
            {HERO.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 mb-7"
          >
            <Link
              to="/get-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-transform hover:scale-[1.02] active:scale-[0.99]"
              style={{ backgroundColor: "var(--ink-black)", color: "white", fontFamily: "var(--font-accent)" }}
            >
              {HERO.ctaPrimary}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <a
              href={BUSINESS.whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold border-2 transition-colors hover:bg-white/60"
              style={{ borderColor: "var(--ink-black)", color: "var(--ink-black)", fontFamily: "var(--font-accent)" }}
            >
              <svg viewBox="0 0 24 24" fill="#25D366" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
              </svg>
              {HERO.ctaSecondary}
            </a>
          </motion.div>

          {/* Single proof line — replaces 3 badge pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-ui"
            style={{ color: "var(--gray-text)" }}
          >
            {HERO.badges.map((b, i) => (
              <span key={b.label} className="inline-flex items-center gap-1.5">
                {i > 0 && <span aria-hidden className="text-gray-300">&middot;</span>}
                <span aria-hidden>{b.icon}</span>
                <span>{b.label}</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Single editorial image — replaces 4-product grid that duplicated ProductsSection */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.55 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-50 to-rose-50 shadow-[0_24px_80px_-32px_rgba(26,26,46,0.35)]">
            <img
              src={IMAGE_PATHS.hero.wedding}
              alt="Wedding card with gold foil printed by Super Printers, Pallavaram"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                const t = e.currentTarget;
                if (t.dataset.fallback) return;
                t.dataset.fallback = "1";
                t.src = IMAGE_PATHS.placeholder;
              }}
            />
            {/* Caption tab — handmade-press feel */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 border border-border-light">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase font-ui" style={{ color: "var(--gold-dark)" }}>
                Featured work
              </p>
              <p className="text-sm font-display font-semibold mt-0.5" style={{ color: "var(--ink-black)" }}>
                Tamil wedding card &mdash; foil + laser-cut
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
