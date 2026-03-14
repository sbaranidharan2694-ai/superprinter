import { motion } from "framer-motion";
import { IMG } from "@/data/images";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => (
  <section className="relative min-h-[100vh] min-h-[100dvh] min-h-[700px] flex items-center overflow-hidden">
    <img
      src={IMG.heroUnsplash}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div
      className="absolute inset-0"
      style={{ backgroundColor: "rgba(15, 27, 61, 0.72)" }}
    />
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wMyIvPjwvc3ZnPg==')] opacity-30 pointer-events-none" />
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
      <div className="max-w-[680px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full border border-gold text-gold text-[13px] font-body font-medium mb-6"
          style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
        >
          Pallavaram&apos;s #1 Printing Press Since 1990
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-display font-bold text-white text-4xl sm:text-5xl md:text-[56px] leading-[1.1] mb-4"
        >
          35 Years of
          <br />
          <span className="relative inline-block">
            Quality Printing
            <span className="absolute bottom-1 left-0 right-0 h-1 bg-gold rounded-full" style={{ backgroundColor: "var(--color-gold)" }} />
          </span>
          <br />
          in Chennai.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-white/80 font-body text-lg max-w-[520px] mb-8"
        >
          From business cards to wedding invitations — printed with care, delivered in 48 hours. Trusted by Wipro, TTK & 10,000+ businesses.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <button
            onClick={() => scrollToSection("quote-form")}
            className="bg-gold text-white font-body font-medium text-base px-8 py-4 rounded-full shadow-gold hover:bg-gold-light hover:scale-[1.02] transition-all duration-200 flex items-center gap-2"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            Get Instant Quote
            <span aria-hidden>→</span>
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="border-2 border-white text-white font-body font-medium text-base px-8 py-4 rounded-full hover:bg-white hover:text-navy transition-all duration-200"
          >
            View Our Work
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-6 text-white/60 text-sm font-body"
        >
          <span>✓ 35+ Years Experience</span>
          <span>✓ 48-Hour Delivery</span>
          <span>✓ Trusted by Wipro & TTK</span>
        </motion.div>
      </div>
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
    >
      <button
        onClick={() => scrollToSection("services")}
        className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
        aria-label="Scroll to services"
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
