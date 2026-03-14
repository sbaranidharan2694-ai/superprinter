import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LANDING_PORTFOLIO } from "@/data/landing";

const PORTFOLIO_FILTERS = ["All", "Visiting Cards", "Brochures", "Wedding Cards", "Stationery", "Special Finishes", "Corporate"] as const;

const categoryMap: Record<string, string> = {
  "Business Cards": "Visiting Cards",
  "Letterheads": "Stationery",
  "Catalogues": "Stationery",
  "Bill Books": "Stationery",
};

const getFilterCategory = (cat: string) => categoryMap[cat] || cat;

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? LANDING_PORTFOLIO
      : LANDING_PORTFOLIO.filter((p) => getFilterCategory(p.category) === activeCategory || p.category === activeCategory);

  const openLightbox = (index: number) => {
    const item = filtered[index];
    const globalIndex = LANDING_PORTFOLIO.findIndex((p) => p.id === item.id);
    setLightboxIndex(globalIndex >= 0 ? globalIndex : index);
  };

  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () => setLightboxIndex((i) => (i != null && i > 0 ? i - 1 : LANDING_PORTFOLIO.length - 1));
  const goNext = () => setLightboxIndex((i) => (i != null && i < LANDING_PORTFOLIO.length - 1 ? i + 1 : 0));

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i != null && i > 0 ? i - 1 : LANDING_PORTFOLIO.length - 1));
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i != null && i < LANDING_PORTFOLIO.length - 1 ? i + 1 : 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex]);

  const aspectClasses = ["aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]"];

  return (
    <section id="portfolio" className="py-20 md:py-24" style={{ backgroundColor: "var(--navy)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-ui text-[12px] font-light tracking-[0.2em] mb-2" style={{ color: "var(--gold)" }}>
            OUR WORK
          </p>
          <h2
            className="font-display font-bold italic text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.2,
            }}
          >
            35 Years of<br />
            <span style={{ color: "#D4A843" }}>Beautiful Print.</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PORTFOLIO_FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-ui font-medium transition-all duration-300 ease-spring ${
                activeCategory === cat
                  ? "bg-gold text-ink-black"
                  : "text-white border border-white/30 hover:border-gold"
              }`}
              style={activeCategory === cat ? { backgroundColor: "var(--gold)", color: "var(--ink-black)" } : undefined}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-masonry columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3" style={{ columnGap: "10px" }}>
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className={`portfolio-item relative overflow-hidden rounded-xl group cursor-zoom-in break-inside-avoid mb-2.5 ${aspectClasses[index % aspectClasses.length]}`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.06]"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 bg-gradient-to-t from-black/80 to-transparent"
              >
                <span className="text-white font-ui text-[13px]">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center text-gold border-2 border-gold hover:bg-gold hover:text-ink-black transition-colors"
              style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
              aria-label="Previous"
            >
              ←
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              src={LANDING_PORTFOLIO[lightboxIndex]?.img}
              alt={LANDING_PORTFOLIO[lightboxIndex]?.label}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center text-gold border-2 border-gold hover:bg-gold hover:text-ink-black transition-colors"
              style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
              aria-label="Next"
            >
              →
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white font-body text-sm">
              <span className="text-gold" style={{ color: "var(--gold)" }}>{LANDING_PORTFOLIO[lightboxIndex]?.category}</span>
              <span>{LANDING_PORTFOLIO[lightboxIndex]?.label}</span>
            </div>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white border-2 border-white/50 hover:bg-white/10 transition-colors"
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
