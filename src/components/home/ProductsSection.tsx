import { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCTS, PRODUCT_TABS } from "@/data/v2";
import ServiceCard from "@/components/ServiceCard";

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const filtered = activeTab === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="section-pad" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p
            className="text-xs font-bold tracking-[0.18em] uppercase mb-3 font-ui"
            style={{ color: "var(--gold-dark)" }}
          >
            What we print
          </p>
          <h2
            className="font-display font-semibold text-3xl md:text-4xl mb-3"
            style={{ color: "var(--ink-black)" }}
          >
            Complete printing in Pallavaram, Chennai
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}
          >
            Wedding invitations to corporate stationery &mdash; every print job done in-house at our press.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PRODUCT_TABS.map((tab) => {
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2 rounded-full text-sm font-semibold font-ui transition-colors"
                style={{
                  backgroundColor: active ? "var(--ink-black)" : "white",
                  color: active ? "white" : "var(--gray-text)",
                  border: `1px solid ${active ? "var(--ink-black)" : "var(--border-light)"}`,
                }}
                aria-pressed={active}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {filtered.map((product) => (
            <ServiceCard
              key={product.name}
              name={product.name}
              price={product.price}
              delivery={product.delivery}
              img={product.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
