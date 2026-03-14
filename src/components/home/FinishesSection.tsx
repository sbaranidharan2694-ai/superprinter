import { motion } from "framer-motion";
import { V2_PAPER_WEIGHTS, V2_FINISHES } from "@/data/v2";

const FinishesSection = () => (
  <section id="finishes" className="py-20 md:py-24" style={{ backgroundColor: "var(--paper-white)" }}>
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-gold text-xs font-body font-medium uppercase tracking-[0.2em] mb-2" style={{ color: "var(--gold)" }}>
          TECHNICAL SPECIFICATIONS
        </p>
        <h2 className="font-display font-bold text-ink-black text-3xl md:text-4xl mb-3">
          Every Finish We Offer
        </h2>
        <p className="text-gray-text font-body text-base max-w-2xl mx-auto">
          Paper weights and finishes to match your project — from standard bond to luxury velvet and foil.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Paper weights table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-border-light bg-white shadow-md"
        >
          <h3 className="font-display font-semibold text-lg text-ink-black px-6 py-4 border-b border-border-light">
            Paper Weights & Their Uses
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 font-body font-semibold text-sm text-ink-black">GSM</th>
                  <th className="px-6 py-3 font-body font-semibold text-sm text-ink-black">Feel</th>
                  <th className="px-6 py-3 font-body font-semibold text-sm text-ink-black">Best For</th>
                </tr>
              </thead>
              <tbody>
                {V2_PAPER_WEIGHTS.map((row, i) => (
                  <tr key={row.gsm} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-6 py-3 font-body text-sm text-ink-black">{row.gsm}</td>
                    <td className="px-6 py-3 font-body text-sm text-gray-700">{row.feel}</td>
                    <td className="px-6 py-3 font-body text-sm text-gray-600">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Finish cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {V2_FINISHES.map((finish, i) => (
            <motion.div
              key={finish.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border-light bg-white p-5 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="text-2xl mb-2 block">{finish.icon}</span>
              <h4 className="font-display font-semibold text-ink-black mb-1">{finish.name}</h4>
              <p className="font-body text-sm text-gray-600">{finish.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-gray-500 font-body text-sm mt-8"
      >
        Need a printed catalogue? Contact us for a full finishes guide.
      </motion.p>
    </div>
  </section>
);

export default FinishesSection;
