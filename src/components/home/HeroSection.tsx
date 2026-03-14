import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/scroll";
import WhatsAppStatus from "@/components/WhatsAppStatus";
import { useLang } from "@/contexts/LangContext";

const HERO_PRODUCTS = [
  { name: "Business Cards", from: "₹149", image: "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=400&q=85", span: 2 },
  { name: "Brochures", from: "₹499", image: "https://images.unsplash.com/photo-1541506618330-7c369fc759b5?w=400&q=85", span: 1 },
  { name: "Foil Cards", from: "₹799", image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&q=85", span: 1 },
  { name: "Wedding Cards", from: "₹8/card", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=85", span: 1 },
  { name: "Bill Books", from: "₹250", image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&q=85", span: 1 },
];

const HeroSection = () => {
  const { t } = useLang();
  return (
    <section className="relative min-h-[100svh] min-h-[700px] flex flex-col lg:flex-row">
      {/* Left panel — 55% */}
      <div
        className="relative flex-1 min-h-[60vh] lg:min-h-[100svh] flex items-center px-6 sm:px-12 lg:px-20 py-20 lg:py-24"
        style={{ backgroundColor: "var(--bg-charcoal)", minHeight: "min(100svh, 700px)" }}
      >
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-[60px] h-px shrink-0" style={{ backgroundColor: "var(--gold)" }} />
            <span className="font-ui text-[13px] font-light" style={{ color: "var(--gold)" }}>
              Est. 1990 · Pallavaram, Chennai
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="font-display font-bold text-white text-[44px] sm:text-5xl lg:text-[80px] leading-[0.95] tracking-tight mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="block">Chennai&apos;s</span>
            <span className="flex items-center gap-2 flex-wrap">
              <span className="italic font-display font-bold" style={{ color: "var(--gold)" }}>Finest</span>
              <span className="text-white/60 text-base lg:text-xl" style={{ opacity: 0.6 }}>· ◆ ·</span>
            </span>
            <span className="block text-white">Print Studio.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="font-ui text-lg max-w-[460px] mb-8 leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Offset · Digital · Screen Printing since 1990. Wedding invitations to corporate stationery. Delivered in Pallavaram in 48 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.85 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button
              onClick={() => scrollToSection("quote-form")}
              className="btn-gold font-ui font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300"
            >
              {t("Get Instant Quote")} →
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="border-2 border-white/60 text-white font-ui font-medium text-base px-8 py-3.5 rounded-full hover:bg-white hover:text-ink-black hover:border-white transition-all duration-300 ease-spring"
            >
              {t("View Our Products")} →
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 mb-2"
          >
            <WhatsAppStatus />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-2 text-sm font-ui"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <span className="font-display italic font-semibold text-[32px] mr-1" style={{ color: "var(--gold)" }}>35</span>
            <span className="text-[13px]">Years</span>
            <span className="text-gold/70">◆</span>
            <span className="font-display italic font-semibold text-[32px] mr-1" style={{ color: "var(--gold)" }}>10K+</span>
            <span className="text-[13px]">Clients</span>
            <span className="text-gold/70">◆</span>
            <span className="font-display italic font-semibold text-[32px] mr-1" style={{ color: "var(--gold)" }}>48</span>
            <span className="text-[13px]">{t("48Hr Delivery")}</span>
          </motion.div>
        </div>
      </div>

      {/* Right panel — 45%: product grid */}
      <div
        className="relative flex-1 min-h-[40vh] lg:min-h-[100svh] hidden sm:block p-4 lg:p-10 pl-2 lg:pl-5"
        style={{ backgroundColor: "var(--bg-charcoal)" }}
      >
        <div className="grid grid-cols-2 grid-rows-3 gap-3 h-full max-h-[100svh] min-h-[400px]">
          {HERO_PRODUCTS.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              className={`rounded-2xl overflow-hidden relative group cursor-default transition-all duration-300 border border-white/10 group-hover:border-gold ${item.span === 2 ? "row-span-2" : ""} hover:scale-[1.04] hover:shadow-gold`}
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-spring group-hover:scale-105"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-10 flex items-center justify-between px-3 backdrop-blur-md"
                style={{ background: "rgba(0,0,0,0.7)" }}
              >
                <span className="font-ui text-xs text-white truncate">{item.name}</span>
                <span className="font-ui text-xs text-white/90 shrink-0">from {item.from}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 lg:hidden"
      >
        <button
          onClick={() => scrollToSection("products")}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          aria-label="Scroll to products"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-2xl"
          >
            ⌄
          </motion.span>
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
