import { motion } from "framer-motion";
import { V3_CREDIBILITY_BADGES } from "@/data/v2";

const CredibilityStrip = () => (
  <section
    className="py-5 overflow-hidden border-y border-border-light bg-white"
    style={{ backgroundColor: "#FFFFFF" }}
    aria-label="Trust badges"
  >
    <div className="flex items-center justify-center gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-6 py-1">
      {V3_CREDIBILITY_BADGES.map((badge, i) => (
        <motion.span
          key={badge}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="flex items-center gap-2 shrink-0 text-ink-black font-ui text-sm whitespace-nowrap"
        >
          {i > 0 && (
            <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--gold)" }} aria-hidden />
          )}
          {badge}
        </motion.span>
      ))}
    </div>
  </section>
);

export default CredibilityStrip;
