import { motion } from "framer-motion";
import { SOCIAL_PROOF_STATS } from "@/data/v2";
import { CLIENTS } from "@/data/clients";

const SocialProofBar = () => (
  <section
    className="py-14 md:py-16 relative overflow-hidden"
    style={{
      background: "linear-gradient(165deg, #1A1A2E 0%, #252540 50%, #1E1E36 100%)",
      borderTop: "2px solid rgba(201, 168, 76, 0.35)",
      borderBottom: "2px solid rgba(201, 168, 76, 0.35)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04)",
    }}
  >
    {/* Subtle gold accent line */}
    <div
      className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
      style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
    />
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      {/* Stats Row — light cards on dark for contrast */}
      <div className="flex flex-wrap items-stretch justify-center gap-4 md:gap-5 mb-12">
        {SOCIAL_PROOF_STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center justify-center min-w-[120px] md:min-w-[140px] px-5 py-4 rounded-2xl bg-white/98 border border-white/20 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
            style={{
              boxShadow: "0 4px 20px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          >
            <div className="text-center">
              <div
                className="font-display font-extrabold text-2xl md:text-3xl leading-tight"
                style={{ color: "var(--color-primary)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs md:text-sm mt-1 font-semibold"
                style={{ color: "#374151", fontFamily: "var(--font-body)" }}
              >
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trusted by — heading with gold accent */}
      <div className="text-center mb-8">
        <span
          className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-white/90 mb-1"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Trusted by
        </span>
        <div
          className="w-12 h-0.5 mx-auto rounded-full"
          style={{ backgroundColor: "var(--gold)" }}
        />
      </div>

      {/* Client logos + names — in light cards so logos pop on dark */}
      <div className="flex flex-wrap items-stretch justify-center gap-4 md:gap-5">
        {CLIENTS.map((client, i) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="flex flex-col items-center justify-center min-h-[88px] md:min-h-[96px] px-4 md:px-5 py-3 md:py-4 rounded-xl bg-white/95 border border-white/30 shadow-md hover:shadow-lg hover:border-[var(--gold)]/40 transition-all duration-300 group"
            style={{
              boxShadow: "0 2px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1)",
            }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-7 md:h-8 w-auto max-w-[100px] md:max-w-[120px] object-contain opacity-90 group-hover:opacity-100 transition-opacity flex-shrink-0"
              loading="lazy"
            />
            <span
              className="mt-2 text-center text-[10px] md:text-xs font-semibold leading-tight line-clamp-2 max-w-[110px] md:max-w-[130px]"
              style={{ color: "var(--color-primary)", fontFamily: "var(--font-body)" }}
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
