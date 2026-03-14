import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { V2_PRODUCTS, V2_PRODUCT_TABS, V2_FINISHES_STRIP } from "@/data/v2";
import { BUSINESS } from "@/data/business";
import { scrollToSection } from "@/utils/scroll";

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filtered = activeTab === "All"
    ? V2_PRODUCTS
    : V2_PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="section-pad" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <p className="font-ui text-[12px] font-light tracking-[0.2em] mb-2" style={{ color: "var(--gold)" }}>
              WHAT WE PRINT
            </p>
            <h2 className="font-display font-semibold text-navy text-3xl md:text-5xl lg:text-[52px] leading-tight">
              Every Product.<br />Every Finish.
            </h2>
          </div>
          <div className="flex overflow-x-auto gap-2 scrollbar-hide lg:shrink-0">
            {V2_PRODUCT_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-ui font-medium transition-all duration-300 ease-spring ${
                  activeTab === tab.id
                    ? "bg-gold text-ink-black"
                    : "text-navy border border-navy/20 hover:border-gold"
                }`}
                style={activeTab === tab.id ? { backgroundColor: "var(--gold)", color: "var(--ink-black)" } : undefined}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center py-16 px-6">
              <p className="text-gray-text font-body text-lg mb-4">No products in this category yet.</p>
              <p className="text-gray-text/80 font-body text-sm mb-6">Wedding cards and event invitations are in our dedicated section.</p>
              <button
                onClick={() => scrollToSection("wedding-cards")}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-ui font-semibold text-ink-black bg-gold hover:shadow-gold transition-all duration-300 ease-spring"
                style={{ backgroundColor: "var(--gold)", color: "var(--ink-black)" }}
              >
                View Wedding Cards section
              </button>
            </div>
          ) : (
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => {
              const fromPrice = product.priceFrom != null ? `₹${product.priceFrom}` : (product.price.match(/₹\d+/)?.[0] ?? "Quote");
              const qty = product.qty ?? "pcs";
              return (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28, delay: i * 0.04 }}
                  className="group rounded-[20px] overflow-hidden bg-white border transition-all duration-300 ease-spring hover:-translate-y-2 hover:shadow-hover hover:border-gold/40 cursor-pointer"
                  style={{ borderColor: "rgba(26,44,91,0.08)" }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative bg-[#F8F6F2]">
                    <img
                      src={product.image}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.badge && (
                      <span
                        className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-ui font-semibold bg-gold text-ink-black"
                        style={{ backgroundColor: "var(--gold)", color: "var(--ink-black)" }}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="px-5 pt-4 pb-5">
                    <h3 className="font-ui font-semibold text-ink-black text-[17px] mb-2">{product.name}</h3>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="font-display font-semibold text-2xl" style={{ color: "var(--gold)" }}>from {fromPrice}</span>
                      <span className="font-ui text-[13px] text-gray-500">/{qty}</span>
                    </div>
                    <a
                      href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(product.waMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2.5 rounded-[10px] font-ui font-medium text-sm text-white bg-navy hover:bg-gold hover:text-ink-black transition-colors"
                      style={{ backgroundColor: "var(--navy)" }}
                    >
                      Order →
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
          )}
        </div>

        {/* Finishes strip */}
        <div className="overflow-x-auto -mx-6 px-6 scrollbar-hide">
          <div className="flex gap-2 min-w-max pb-2">
            {V2_FINISHES_STRIP.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full text-sm font-body font-medium shrink-0"
                style={{ backgroundColor: "var(--bg-cream)", color: "var(--ink-black)" }}
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
