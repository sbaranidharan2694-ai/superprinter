import { useState } from "react";
import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";
import { PRODUCTS, PRODUCT_TABS } from "@/data/v2";

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const filtered = activeTab === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="section-pad" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>WHAT WE PRINT</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3" style={{ color: "var(--color-primary)" }}>Complete Printing Services in Pallavaram, Chennai</h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>From wedding invitations to corporate stationery — everything printed under one roof.</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PRODUCT_TABS.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className="px-5 py-2 rounded-full text-sm font-semibold transition-all" style={{ backgroundColor: activeTab === tab ? "var(--gold)" : "transparent", color: activeTab === tab ? "var(--color-primary)" : "var(--gray-text)", border: activeTab === tab ? "none" : "1px solid var(--border-light)", fontFamily: "var(--font-body)" }}>{tab}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((product, i) => (
            <motion.div key={product.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="product-card group relative">
              <div className="product-card-image"><img src={product.img} alt={product.name} loading="lazy" /></div>
              <div className="p-4">
                <h3 className="font-display font-bold text-base mb-1" style={{ color: "var(--color-primary)" }}>{product.name}</h3>
                <a href={`${BUSINESS.whatsappQuote}${encodeURIComponent(product.name)}`} target="_blank" rel="noopener noreferrer" className="text-xs font-medium hover:underline" style={{ color: "var(--color-cta)", fontFamily: "var(--font-body)" }}>💬 Order on WhatsApp</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
