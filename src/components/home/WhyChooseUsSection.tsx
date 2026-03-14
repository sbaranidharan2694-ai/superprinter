import { motion } from "framer-motion";
import { V3_COIMBATORE_ROWS } from "@/data/v2";

const WHY_FEATURES = [
  { num: "01", title: "35 Years of Craft", body: "Founded when quality meant hand-checking every sheet." },
  { num: "02", title: "48-Hour Delivery", body: "Business cards ready in 48 hours. Same-day available." },
  { num: "03", title: "Chennai's Own", body: "Pallavaram-based for 35 years. No Coimbatore shipping delays." },
];

const WHY_IMAGE = "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=85";

const WhyChooseUsSection = () => (
  <section id="why-us" className="py-20 md:py-24" style={{ backgroundColor: "var(--bg-light)" }}>
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
        <div className="lg:col-span-3 space-y-10">
          {WHY_FEATURES.map((feat, i) => (
            <motion.div
              key={feat.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="font-display font-bold text-[64px] leading-none mb-2" style={{ color: "rgba(212,168,67,0.15)" }}>
                {feat.num}
              </div>
              <h3 className="font-ui font-semibold text-navy text-[22px] mb-2">{feat.title}</h3>
              <p className="font-ui text-[15px] text-gray-text">{feat.body}</p>
              <div className="mt-3 w-[60px] h-0.5 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
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
            <img src={WHY_IMAGE} alt="Printing press" className="w-full aspect-[4/3] object-cover" />
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

      {/* Coimbatore table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="overflow-x-auto rounded-3xl border border-border-light shadow-card"
        style={{ backgroundColor: "var(--pure-white)" }}
      >
        <table className="w-full min-w-[500px] text-left">
          <thead>
            <tr style={{ backgroundColor: "var(--gold)" }}>
              <th className="px-6 py-4 font-display font-semibold text-ink-black">Factor</th>
              <th className="px-6 py-4 font-display font-semibold text-ink-black">Super Printers</th>
              <th className="px-6 py-4 font-display font-semibold text-ink-black">Coimbatore / outstation printers</th>
            </tr>
          </thead>
          <tbody>
            {V3_COIMBATORE_ROWS.map((row, i) => (
              <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                <td className="px-6 py-3 font-ui text-sm text-ink-black">{row.factor}</td>
                <td className="px-6 py-3 font-ui text-sm text-gray-800">{row.super}</td>
                <td className="px-6 py-3 font-ui text-sm text-gray-500">{row.coimbatore}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="px-6 py-3 text-xs font-ui text-gray-500 border-t border-border-light">
          Why Super Printers beats ordering from Coimbatore / outstation printers
        </p>
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUsSection;
