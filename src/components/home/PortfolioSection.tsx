import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LANDING_PORTFOLIO, PORTFOLIO_CATEGORIES } from "@/data/landing";

type Category = (typeof PORTFOLIO_CATEGORIES)[number];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? LANDING_PORTFOLIO
      : LANDING_PORTFOLIO.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => {
    const item = filtered[index];
    const globalIndex = LANDING_PORTFOLIO.findIndex((p) => p.id === item.id);
    setLightboxIndex(globalIndex >= 0 ? globalIndex : index);
  };

  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () => setLightboxIndex((i) => (i != null && i > 0 ? i - 1 : LANDING_PORTFOLIO.length - 1));
  const goNext = () => setLightboxIndex((i) => (i != null && i < LANDING_PORTFOLIO.length - 1 ? i + 1 : 0));

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-gold text-xs font-body font-medium uppercase tracking-widest mb-2" style={{ color: "var(--color-gold)" }}>
            OUR WORK
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-[40px] text-navy mb-2">
            Printed with Pride
          </h2>
          <p className="text-gray-text font-body text-base">
            Browse samples from 35 years of quality printing
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gold text-white"
                  : "bg-gray-100 text-navy hover:bg-gray-200"
              }`}
              style={activeCategory === cat ? { backgroundColor: "var(--color-gold)" } : undefined}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-zoom-in"
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                loading="lazy"
                width={600}
                height={450}
              />
              <div
                className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"
                style={{ backgroundColor: "rgba(26,44,91,0.7)" }}
              >
                <span className="text-white font-body font-medium">{item.label}</span>
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
          <button
            onClick={() => {
              const el = document.getElementById("portfolio");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-lg border-2 border-navy text-navy font-body font-medium hover:bg-navy hover:text-white transition-colors"
          >
            View Full Portfolio
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
              aria-label="Previous"
            >
              ←
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              src={LANDING_PORTFOLIO[lightboxIndex]?.img}
              alt={LANDING_PORTFOLIO[lightboxIndex]?.label}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
              aria-label="Next"
            >
              →
            </button>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
              aria-label="Close"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
