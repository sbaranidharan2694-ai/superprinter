import { motion } from "framer-motion";
import { SOCIAL_PROOF_STATS } from "@/data/v2";
import { CLIENTS } from "@/data/clients";

const SocialProofBar = () => (
    <section
      className="py-12 md:py-14"
      style={{
        background: "linear-gradient(180deg, #FFFBF7 0%, #FFF5EB 100%)",
        borderTop: "1px solid rgba(201, 168, 76, 0.2)",
        borderBottom: "1px solid rgba(201, 168, 76, 0.2)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats Row - bright cards */}
        <div className="flex flex-wrap items-stretch justify-center gap-4 md:gap-3 mb-10">
          {SOCIAL_PROOF_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-center min-w-[120px] md:min-w-[140px] px-5 py-4 rounded-2xl bg-white border border-amber-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-200"
              style={{ boxShadow: "0 2px 12px rgba(26, 26, 46, 0.06)" }}
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
                  style={{ color: "#4B5563", fontFamily: "var(--font-body)" }}
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client logos — all local images in public/clients/ */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <span
            className="text-sm font-bold uppercase tracking-widest w-full text-center md:w-auto mb-2 md:mb-0"
            style={{ color: "var(--color-primary)", fontFamily: "var(--font-body)" }}
          >
            Trusted by
          </span>
          {CLIENTS.map((client) => (
            <img
              key={client.name}
              src={client.logo}
              alt={client.name}
              className="h-9 md:h-11 w-auto max-w-[120px] object-contain grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition-all"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
);

export default SocialProofBar;
