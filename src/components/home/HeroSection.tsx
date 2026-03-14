import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/scroll";

const HERO_IMAGE = "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=900&q=85";

const HeroSection = () => (
  <section className="relative min-h-[100svh] min-h-[700px] flex flex-col lg:flex-row">
    {/* Left panel — 55% */}
    <div
      className="relative flex-1 min-h-[60vh] lg:min-h-[100svh] flex items-center px-6 sm:px-12 lg:px-20 py-20 lg:py-24"
      style={{ backgroundColor: "var(--ink-black)", minHeight: "min(100svh, 700px)" }}
    >
      <div className="max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
          className="inline-flex items-center px-4 py-2 rounded-full border text-[13px] font-body font-medium mb-6"
          style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
        >
          Chennai&apos;s Premier Printing Studio Since 1990
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.12] mb-3"
        >
          <span className="italic font-display font-bold" style={{ color: "var(--gold)" }}>Where Every</span>
          <br />
          <span className="relative inline-block">
            Print Tells
            <span className="absolute bottom-1 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)]" />
          </span>
          <br />
          <span className="text-white">a Story.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-white/70 font-body text-lg max-w-md mb-8"
        >
          Business cards to wedding invitations — crafted with care, delivered in 48 hours. Trusted by Wipro, TTK & 10,000+ businesses in Chennai.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="flex flex-wrap gap-4 mb-10"
        >
          <button
            onClick={() => scrollToSection("quote-form")}
            className="bg-gold text-ink-black font-body font-semibold text-base px-8 py-3.5 rounded-full shadow-gold hover:scale-[1.02] transition-all duration-200"
            style={{ backgroundColor: "var(--gold)", color: "var(--ink-black)" }}
          >
            Get Instant Quote →
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="border-2 border-white/60 text-white font-body font-medium text-base px-8 py-3.5 rounded-full hover:bg-white hover:text-ink-black transition-all duration-200"
          >
            View Our Products →
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-4 text-white/80 text-sm font-body"
        >
          <span>35+ Years</span>
          <span className="w-px h-5 rounded-full bg-gold" style={{ backgroundColor: "var(--gold)" }} />
          <span>10,000+ Clients</span>
          <span className="w-px h-5 rounded-full bg-gold" style={{ backgroundColor: "var(--gold)" }} />
          <span>48Hr Delivery</span>
        </motion.div>
      </div>
    </div>

    {/* Right panel — 45%: image + floating cards */}
    <div className="relative flex-1 min-h-[40vh] lg:min-h-[100svh] hidden sm:block">
      <img
        src={HERO_IMAGE}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-ink-black/60 via-transparent to-ink-black/40"
        style={{ backgroundColor: "rgba(13,13,13,0.5)" }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute right-[10%] top-[25%] w-[200px] rounded-xl p-4 shadow-lg backdrop-blur-sm"
        style={{ backgroundColor: "rgba(255,255,255,0.95)", color: "var(--ink-black)" }}
      >
        <p className="font-display font-semibold text-lg">Business Cards</p>
        <p className="text-sm font-body text-gray-600 mt-0.5">From ₹149 / 100 pcs</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute right-[15%] bottom-[30%] w-[200px] rounded-xl p-4 shadow-lg backdrop-blur-sm"
        style={{ backgroundColor: "rgba(255,255,255,0.95)", color: "var(--ink-black)" }}
      >
        <p className="font-display font-semibold text-lg">Wedding Cards</p>
        <p className="text-sm font-body text-gray-600 mt-0.5">From ₹8 per card</p>
      </motion.div>
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

export default HeroSection;
