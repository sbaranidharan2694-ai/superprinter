import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/data/gallery";

/** Show first 24 gallery images on homepage; link to full gallery. */
const HOME_GALLERY_LIMIT = 24;
const homeImages = GALLERY_IMAGES.slice(0, HOME_GALLERY_LIMIT);

const PortfolioSection = () => (
  <section id="portfolio" className="section-pad" style={{ backgroundColor: "var(--color-cream)" }}>
    <div className="max-w-7xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <p className="text-xs font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>OUR WORK</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl" style={{ color: "var(--color-primary)" }}>Portfolio & Gallery</h2>
        <p className="text-muted-foreground text-sm mt-2 max-w-xl mx-auto font-body">Wedding cards, visiting cards, brochures, bill books, letterheads and more.</p>
      </motion.div>
      <div className="portfolio-masonry">
        {homeImages.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="portfolio-item group relative overflow-hidden rounded-2xl"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={(e) => {
                const t = e.currentTarget;
                if (t.dataset.fallback) return;
                t.dataset.fallback = "1";
                t.src = "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=600&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p className="text-white text-sm font-semibold" style={{ fontFamily: "var(--font-body)" }}>{img.alt}</p>
              <span
                className="inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full mt-2 w-fit"
                style={{ backgroundColor: "var(--gold)", color: "var(--color-primary)" }}
              >
                {img.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-transform hover:scale-[1.02]"
          style={{ backgroundColor: "var(--color-primary)", color: "white", fontFamily: "var(--font-accent)" }}
        >
          View full gallery →
        </Link>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
