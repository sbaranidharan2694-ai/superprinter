import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";
import { trackWhatsAppClick } from "@/utils/analytics";
import { useInView } from "@/hooks/useInView";
import {
  GALLERY_IMAGES,
  GALLERY_CATEGORIES,
  type GalleryCategory,
} from "@/data/gallery";
import { IMAGE_PATHS } from "@/data/imagePaths";

const corporateClients = [
  { name: "Reliance", monogram: "R", desc: "Corporate stationery, ID cards & branded materials" },
  { name: "Fujitec", monogram: "F", desc: "Technical manuals, letterheads & visiting cards" },
  { name: "BHARAT PETROLEUM", monogram: "BP", desc: "Retail signage, promotional prints" },
  { name: "GTK Foundation", monogram: "GTK", desc: "Event invitations, letterheads & brochures" },
];

const serviceLinks = [
  { emoji: "📇", name: "Visiting Cards", to: "/visiting-cards" },
  { emoji: "💌", name: "Wedding Cards", to: "/wedding-cards" },
  { emoji: "📖", name: "Brochures", to: "/brochures" },
  { emoji: "🧾", name: "Bill Books", to: "/bill-books" },
  { emoji: "📄", name: "Letterheads", to: "/letterheads" },
  { emoji: "📋", name: "Catalogues", to: "/products" },
];

const Gallery = () => {
  const [category, setCategory] = useState<GalleryCategory>("All");
  const ref = useInView().ref;

  const filteredImages = useMemo(
    () =>
      category === "All"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.category === category),
    [category]
  );

  return (
    <>
      <SEOHead
        title="Printing Gallery | Wedding Cards, Visiting Cards, Brochures | Super Printers Chennai"
        description="Browse our gallery of printed work — wedding cards, visiting cards, brochures, banners, bill books, t-shirts and more. 35 years of quality printing in Chennai. Super Printers Pallavaram."
        canonical="/gallery"
        keywords="printing portfolio chennai, printing samples pallavaram, super printers work, wedding cards, visiting cards gallery"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
        ]}
      />
      <main>
        <section
          ref={ref}
          className="py-12 md:py-20 bg-background"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="font-display text-3xl md:text-4xl font-black text-foreground mb-3">
                Printing Portfolio
              </h1>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                A showcase of our printing work — wedding cards, visiting cards, brochures, bill books, letterheads and more. Serving Chennai and Tamil Nadu.
              </p>
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    category === cat
                      ? "bg-[var(--color-primary)] text-white shadow-md"
                      : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
              <AnimatePresence mode="popLayout">
                {filteredImages.map((item, i) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2, delay: i % 20 * 0.02 }}
                    className="group relative aspect-square rounded-2xl overflow-hidden bg-muted shadow-sm"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const t = e.currentTarget;
                        if (t.dataset.fallback) return;
                        t.dataset.fallback = "1";
                        t.src = IMAGE_PATHS.placeholder;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                      <p className="text-white text-sm font-semibold line-clamp-2" style={{ fontFamily: "var(--font-body)" }}>
                        {item.alt}
                      </p>
                      <span
                        className="inline-flex text-xs font-bold px-2 py-0.5 rounded-full mt-2 w-fit"
                        style={{ backgroundColor: "var(--gold)", color: "var(--color-primary)" }}
                      >
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredImages.length === 0 && (
              <p className="text-center text-muted-foreground py-12 font-body">No images in this category.</p>
            )}

            {/* CTA strip */}
            <div className="mt-12 text-center">
              <p className="text-foreground font-body mb-4">Need something similar? Get a quote on WhatsApp.</p>
              <a
                href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Super Printers, I'd like a quote for printing.")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("gallery_cta")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: "#25D366", fontFamily: "var(--font-accent)" }}
                aria-label="Get quote on WhatsApp"
              >
                💬 Get Quote on WhatsApp
              </a>
            </div>

            {/* Corporate clients */}
            <div className="mt-20">
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
                Trusted by Leading Brands
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {corporateClients.map((c) => (
                  <div
                    key={c.name}
                    className="p-6 rounded-2xl border border-border bg-card flex items-start gap-4"
                  >
                    <div
                      className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center text-white font-display text-lg font-bold"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      {c.monogram}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">{c.name}</h3>
                      <p className="text-muted-foreground text-sm font-body mb-3">{c.desc}</p>
                      <a
                        href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hi, I need similar printing work as done for ${c.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsAppClick("gallery_corporate")}
                        className="inline-flex items-center gap-1 text-sm font-semibold"
                        style={{ color: "var(--color-primary)", fontFamily: "var(--font-accent)" }}
                      >
                        Get similar work →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service links */}
            <div className="mt-16">
              <h2 className="font-display text-xl font-bold text-foreground mb-6 text-center">
                Explore Our Services
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="p-4 rounded-xl bg-card border border-border hover:border-[var(--color-primary)]/30 hover:shadow-md transition-all text-center"
                  >
                    <span className="text-2xl block mb-2" aria-hidden="true">{s.emoji}</span>
                    <span className="font-body font-semibold text-xs text-card-foreground">{s.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Gallery;
