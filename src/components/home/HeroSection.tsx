import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BUSINESS } from "@/data/business";
import { HERO, HERO_PRODUCTS } from "@/data/v2";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2C2C54 50%, #1A1A2E 100%)" }}>
    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} aria-hidden />
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-3">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xs font-bold tracking-[0.15em] uppercase mb-4" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>{HERO.microLabel}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] mb-4" style={{ whiteSpace: "pre-line" }}>{HERO.h1}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="font-display italic text-lg md:text-xl mb-6" style={{ color: "var(--gold)" }}>{HERO.accent}</motion.p>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: "#CBD5E1", fontFamily: "var(--font-body)", whiteSpace: "pre-line" }}>{HERO.body}</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="flex flex-col sm:flex-row gap-3 mb-8">
            <a href={BUSINESS.whatsappGeneral} target="_blank" rel="noopener noreferrer" className="btn-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base">{HERO.ctaPrimary}</a>
            <Link to="/products" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold border-2 text-white hover:bg-white/5 transition-colors" style={{ borderColor: "var(--gold)", color: "var(--gold)", fontFamily: "var(--font-accent)" }}>{HERO.ctaSecondary}</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-3">
            {HERO.badges.map((badge) => (
              <span key={badge.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border" style={{ borderColor: "rgba(201,168,76,0.3)", color: "var(--gold)", backgroundColor: "rgba(26,26,46,0.6)", fontFamily: "var(--font-body)" }}>{badge.icon} {badge.label}</span>
            ))}
          </motion.div>
        </div>
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-3">
            {HERO_PRODUCTS.map((product, i) => (
              <motion.div key={product.name} initial={{ opacity: 0, x: 24, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }} className="hero-product-card group relative rounded-2xl overflow-hidden aspect-square cursor-pointer">
                <img src={product.img} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading={i < 2 ? "eager" : "lazy"} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-body)" }}>{product.name}</p>
                  <p className="text-xs font-bold" style={{ color: "var(--gold)", fontFamily: "var(--font-accent)" }}>{product.price}</p>
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
