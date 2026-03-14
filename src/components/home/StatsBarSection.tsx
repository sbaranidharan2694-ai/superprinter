import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 35, suffix: "+", label: "Years", sub: "Est. 1990 in Pallavaram" },
  { value: 10000, suffix: "+", label: "Happy Clients", sub: "Across Chennai" },
  { value: 48, suffix: " Hrs", label: "Delivery", sub: "Business cards" },
  { value: 50, suffix: "+", label: "Products", sub: "& finishes" },
];

const CountUp = ({ target, suffix, duration = 1.5 }: { target: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const animated = useRef(false);

  useEffect(() => {
    if (!inView || animated.current) return;
    animated.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * easeOut));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsBarSection = () => (
  <section
    id="stats"
    className="section-pad-sm w-full"
    style={{ backgroundColor: "#D4A843" }}
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className={`flex flex-col items-center text-center py-2 ${
              i < STATS.length - 1 ? "lg:border-r" : ""
            }`}
            style={i < STATS.length - 1 ? { borderColor: "rgba(17,19,24,0.2)" } : undefined}
          >
            <div className="font-display font-extrabold text-[56px] leading-none text-ink-black" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}>
              <CountUp target={stat.value} suffix={stat.suffix} />
            </div>
            <div className="font-ui font-medium text-[15px] mt-1 text-ink-black/85">{stat.label}</div>
            <div className="font-ui text-xs mt-0.5 text-ink-black/65">{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBarSection;
