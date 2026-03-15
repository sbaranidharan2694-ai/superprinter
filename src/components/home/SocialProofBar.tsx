import { motion } from "framer-motion";
import { SOCIAL_PROOF_STATS } from "@/data/v2";
import { CLIENTS } from "@/data/clients";

const SocialProofBar = () => (
  <section style={{ backgroundColor: "var(--color-cream)" }} className="py-10 md:py-12">
    <div className="max-w-6xl mx-auto px-6">
      {/* Stats Row */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-0 mb-8">
        {SOCIAL_PROOF_STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center"
          >
            <div className="text-center px-4 md:px-8">
              <div
                className="font-display font-bold text-2xl md:text-4xl"
                style={{ color: "var(--gold)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs md:text-sm mt-1"
                style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}
              >
                {stat.label}
              </div>
            </div>
            {i < SOCIAL_PROOF_STATS.length - 1 && (
              <div className="hidden md:block w-px h-10 bg-gray-300" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Client logos */}
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
        <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
          Trusted by:
        </span>
        {CLIENTS.slice(0, 6).map((client) => (
          <img
            key={client.name}
            src={client.logo}
            alt={client.name}
            className="h-8 md:h-10 w-auto grayscale"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofBar;
