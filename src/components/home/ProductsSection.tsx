import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { V2_PRODUCTS, V2_PRODUCT_TABS, V2_FINISHES_STRIP } from "@/data/v2";
import { BUSINESS } from "@/data/business";

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filtered = activeTab === "All"
    ? V2_PRODUCTS
    : V2_PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="py-20 md:py-24" style={{ backgroundColor: "var(--ink-black)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-xs font-body font-medium uppercase tracking-[0.2em] mb-2">WHAT WE PRINT</p>
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-3">
            Every Product. Every Finish. Every Budget.
          </h2>
          <p className="text-white/60 font-body text-base max-w-2xl mx-auto">
            From visiting cards to catalogues — offset, digital, and special finishes. Starting from ₹149.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-6 mb-8 scrollbar-hide -mx-6 px-6">
          {V2_PRODUCT_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-gold text-ink-black"
                  : "text-white border border-gold/60 hover:border-gold"
              }`}
              style={activeTab === tab.id ? { backgroundColor: "var(--gold)", color: "var(--ink-black)" } : undefined}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.article
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group rounded-xl overflow-hidden bg-[#161616] border border-white/5 hover:border-gold/40 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-body font-semibold"
                      style={{
                        backgroundColor: product.badge === "Most Popular" ? "var(--gold)" : "var(--wedding-deep)",
                        color: "var(--ink-black)",
                      }}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-white text-lg mb-1">{product.name}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {product.specs.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded text-[11px] font-body bg-white/10 text-white/80">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-gold font-body font-semibold text-sm mb-3" style={{ color: "var(--gold)" }}>
                    {product.price}
                  </p>
                  <a
                    href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(product.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-body font-medium text-gold hover:underline"
                    style={{ color: "var(--gold)" }}
                  >
                    Order via WhatsApp →
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Finishes strip */}
        <div className="overflow-x-auto -mx-6 px-6 scrollbar-hide">
          <div className="flex gap-2 min-w-max pb-2">
            {V2_FINISHES_STRIP.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full text-sm font-body font-medium shrink-0"
                style={{ backgroundColor: "var(--paper-white)", color: "var(--ink-black)" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
