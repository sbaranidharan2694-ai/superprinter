import { motion } from "framer-motion";

const BENEFITS = [
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=85",
    title: "48-Hour Delivery",
    line: "Business cards and more, ready in 48 hours.",
  },
  {
    image: "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=600&q=85",
    title: "Premium Finishes",
    line: "Spot UV, foil, lamination — finishes that stand out.",
  },
  {
    image: "https://images.unsplash.com/photo-1607000975631-4bd2e12d00da?w=600&q=85",
    title: "Wedding Cards from ₹8",
    line: "Elegant invitations at unbeatable value.",
  },
  {
    image: "https://images.unsplash.com/photo-1541506618330-7c369fc759b5?w=600&q=85",
    title: "Corporate Stationery",
    line: "Letterheads, brochures, and professional print.",
  },
  {
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=85",
    title: "Quality Paper & Print",
    line: "Premium stocks and precise printing every time.",
  },
  {
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=85",
    title: "35+ Years Trusted",
    line: "Chennai's go-to print studio since 1990.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const ProductBenefitsSection = () => (
  <section id="product-benefits" className="py-16 md:py-20 bg-white" style={{ backgroundColor: "#FFFFFF" }}>
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <p
          className="font-ui text-sm font-medium tracking-[0.2em] uppercase mb-2"
          style={{ color: "var(--gold)" }}
        >
          Why Our Print Matters
        </p>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-navy"
          style={{
            fontFamily: "var(--font-display)",
            color: "#111318",
            lineHeight: 1.15,
          }}
        >
          Product Benefits
        </h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
        {BENEFITS.map((item, i) => (
          <motion.article
            key={item.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
            className="group relative aspect-[4/5] min-h-[200px] rounded-xl overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${item.image}')` }}
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
              <h3
                className="font-display font-bold text-white text-lg md:text-xl mb-0.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.title}
              </h3>
              <p className="font-ui text-sm text-white/90" style={{ color: "rgba(255,255,255,0.9)" }}>
                {item.line}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ProductBenefitsSection;
