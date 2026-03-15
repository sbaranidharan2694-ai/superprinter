import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BUSINESS } from "@/data/business";
import { HERO, HERO_PRODUCTS } from "@/data/v2";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #FFFDF7 0%, #FFF8EC 60%, #FFF3E0 100%)" }}>
    <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%23C9A84C'/%3E%3C/svg%3E")` }} aria-hidden />
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-3">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xs font-bold tracking-[0.15em] uppercase mb-4" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>{HERO.microLabel}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] mb-4" style={{ color: "var(--color-primary)", whiteSpace: "pre-line" }}>{HERO.h1}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="font-display italic text-lg md:text-xl mb-6" style={{ color: "var(--gold-dark, #9E7A2A)" }}>{HERO.accent}</motion.p>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="text-base leading-relaxed mb-8 max-w-lg font-medium" style={{ color: "var(--color-text)", fontFamily: "var(--font-body)", whiteSpace: "pre-line" }}>{HERO.body}</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="flex flex-col sm:flex-row gap-3 mb-8">
            <a href={BUSINESS.whatsappGeneral} target="_blank" rel="noopener noreferrer" className="btn-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base">{HERO.ctaPrimary}</a>
            <Link to="/products" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold border-2 transition-all hover:bg-amber-50" style={{ borderColor: "var(--gold)", color: "var(--color-primary)", fontFamily: "var(--font-accent)" }}>{HERO.ctaSecondary}</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-3">
            {HERO.badges.map((badge) => (
              <span key={badge.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border bg-white" style={{ borderColor: "rgba(201,168,76,0.4)", color: "var(--color-primary)", fontFamily: "var(--font-body)", boxShadow: "0 1px 4px rgba(26,26,46,0.07)" }}>{badge.icon} {badge.label}</span>
            ))}
          </motion.div>
        </div>
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-3">
            {HERO_PRODUCTS.map((product, i) => (
              <motion.div key={product.name} initial={{ opacity: 0, x: 24, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }} className="hero-product-card group relative rounded-2xl overflow-hidden aspect-square cursor-pointer">
                <img
                  src={product.img}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={i < 2 ? "eager" : "lazy"}
                  onError={(e) => { const t = e.currentTarget; if (t.dataset.fallback) return; t.dataset.fallback = "1"; t.src = "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=400&q=80"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-body)" }}>{product.name}</p>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold/40 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
