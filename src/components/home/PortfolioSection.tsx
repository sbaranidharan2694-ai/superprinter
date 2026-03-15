import { motion } from "framer-motion";
import { PORTFOLIO_IMAGES } from "@/data/v2";

const PortfolioSection = () => (
  <section id="portfolio" className="section-pad" style={{ backgroundColor: "var(--color-cream)" }}>
    <div className="max-w-7xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <p className="text-xs font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>OUR WORK</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl" style={{ color: "var(--color-primary)" }}>Portfolio & Gallery</h2>
      </motion.div>
      <div className="portfolio-masonry">
        {PORTFOLIO_IMAGES.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="portfolio-item group relative overflow-hidden rounded-2xl"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p className="text-white text-sm font-semibold" style={{ fontFamily: "var(--font-body)" }}>{img.alt}</p>
              <span
                className="inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full mt-2 w-fit"
                style={{ backgroundColor: "var(--gold)", color: "var(--color-primary)" }}
              >
                {img.cat}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
