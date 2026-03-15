import { motion } from "framer-motion";
import { PORTFOLIO_IMAGES } from "@/data/v2";

const PortfolioSection = () => (
  <section id="portfolio" className="section-pad" style={{ backgroundColor: "var(--bg-white)" }}>
    <div className="max-w-7xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <p className="text-xs font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>OUR WORK</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl" style={{ color: "var(--color-primary)" }}>Portfolio & Gallery</h2>
      </motion.div>
      <div className="portfolio-masonry">
        {PORTFOLIO_IMAGES.map((img, i) => (
          <motion.div key={img.src} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="portfolio-item group">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
