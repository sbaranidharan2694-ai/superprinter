import { motion } from "framer-motion";

const WHY_FEATURES = [
  { num: "01", title: "35 Years of Craft", body: "Founded when quality meant hand-checking every sheet." },
  { num: "02", title: "48-Hour Delivery", body: "Business cards ready in 48 hours. Same-day available." },
  { num: "03", title: "Chennai's Own", body: "Pallavaram-based for 35 years. Local pickup and same-day options." },
];

const WHY_IMAGE = "https://images.unsplash.com/photo-1504711434969-e33886198f5c?w=800&q=85";

const WhyChooseUsSection = () => (
  <section id="why-us" className="py-20 md:py-24" style={{ backgroundColor: "#F8F5F0" }}>
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-14"
      >
        <p className="text-gold font-ui text-sm font-medium mb-2 flex items-center justify-center gap-2" style={{ color: "var(--gold)" }}>
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current" />
          Why choose us
        </p>
        <h2 className="font-display font-bold text-navy text-3xl md:text-4xl mb-3">
          35 Years Ahead of the Competition
        </h2>
        <p className="text-gray-text font-body text-base max-w-2xl mx-auto">
          Heritage, speed, and trust — why Chennai&apos;s businesses and couples choose us.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
        <div className="lg:col-span-3 space-y-6">
          {WHY_FEATURES.map((feat, i) => (
            <motion.div
              key={feat.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="feature-card rounded-r-[14px] py-5 px-6 border-l-[3px] border-gold bg-white shadow-sm"
              style={{ borderLeftColor: "#D4A843", boxShadow: "0 1px 8px rgba(26,44,91,0.06)" }}
            >
              <div className="step-number font-display leading-none mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "72px", color: "rgba(212,168,67,0.15)", lineHeight: 1 }}>
                {feat.num}
              </div>
              <h3 className="font-ui font-semibold text-[20px] text-ink-black mb-2" style={{ color: "#111318" }}>{feat.title}</h3>
              <p className="font-ui text-[15px]" style={{ color: "#6B7280" }}>{feat.body}</p>
            </motion.div>
          ))}
        </div>
        <div className="lg:col-span-2 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-hover relative"
          >
            <img src={WHY_IMAGE} alt="35 years of printing heritage" className="w-full aspect-[4/3] object-cover rounded-3xl" />
            <div
              className="absolute bottom-4 left-4 right-4 sm:right-auto sm:w-[220px] bg-white rounded-2xl p-4 shadow-card"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center gap-1 text-gold text-sm mb-1" style={{ color: "var(--gold)" }}>
                {"★".repeat(4)}<span className="text-gold">★</span>
                <span className="font-ui font-medium text-navy text-sm ml-1">4.8 Google Rating</span>
              </div>
              <p className="font-ui text-xs text-gray-500">147 verified reviews</p>
              <p className="font-display italic text-navy text-sm mt-1">Trusted since 1990</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
