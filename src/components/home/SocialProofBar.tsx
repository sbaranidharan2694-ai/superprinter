import { motion } from "framer-motion";
import { SOCIAL_PROOF_STATS } from "@/data/v2";
import { CLIENTS } from "@/data/clients";

const SocialProofBar = () => (
  <section
    className="py-10 md:py-16 relative overflow-hidden"
    style={{
      background: "linear-gradient(165deg, #1A1A2E 0%, #252540 50%, #1E1E36 100%)",
      borderTop: "1px solid rgba(201, 168, 76, 0.25)",
      borderBottom: "1px solid rgba(201, 168, 76, 0.25)",
    }}
  >
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      {/* Stats — calmer cards, single shadow, lighter borders */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap items-stretch justify-center gap-3 md:gap-4 mb-8 md:mb-12">
        {SOCIAL_PROOF_STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center justify-center md:min-w-[150px] px-4 py-3 md:px-6 md:py-5 rounded-xl border border-amber-100/80 bg-white transition-shadow duration-200 hover:shadow-lg"
          >
            <div className="text-center">
              <div
                className="font-display font-bold text-2xl md:text-4xl leading-tight tracking-tight"
                style={{ color: "var(--ink-black)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-[10px] md:text-sm mt-1.5 font-semibold uppercase tracking-wider font-ui"
                style={{ color: "#374151" }}
              >
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trusted by */}
      <div className="text-center mb-5 md:mb-8">
        <span
          className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-white/85 mb-1.5 font-ui"
        >
          Trusted by
        </span>
        <div
          className="w-10 h-px mx-auto"
          style={{ backgroundColor: "var(--gold)" }}
        />
      </div>

      {/* Client logos — tighter mobile, lighter chrome */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-wrap items-stretch justify-center gap-2.5 md:gap-4">
        {CLIENTS.map((client, i) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="flex flex-col items-center justify-center min-h-[76px] md:min-h-[96px] px-3 md:px-5 py-2.5 md:py-4 rounded-lg bg-white/95 border border-white/20 transition-shadow duration-300 hover:shadow-md group"
          >
            <img
              src={client.logo}
              alt={client.name}
              width={140}
              height={36}
              className="h-7 md:h-9 w-auto max-w-[100px] md:max-w-[140px] object-contain opacity-90 group-hover:opacity-100 transition-opacity flex-shrink-0"
              loading="lazy"
              decoding="async"
            />
            <span
              className="mt-1.5 text-center text-[9px] md:text-xs font-semibold leading-tight line-clamp-2 max-w-[100px] md:max-w-[130px] font-ui"
              style={{ color: "var(--ink-black)" }}
            >
              {client.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofBar;
