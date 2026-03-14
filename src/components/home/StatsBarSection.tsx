import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 35, suffix: "+", label: "Years", sub: "Est. 1990" },
  { value: 10000, suffix: "+", label: "Happy", sub: "Clients" },
  { value: 48, suffix: " Hours", label: "Delivery", sub: "Guaranteed" },
  { value: 50, suffix: "+", label: "Products", sub: "& Services" },
];

const CountUp = ({ target, suffix, duration = 1.5 }: { target: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
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
    className="py-6 w-full"
    style={{ backgroundColor: "var(--color-gold)" }}
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`flex flex-col items-center text-center py-2 ${
              i < STATS.length - 1 ? "lg:border-r lg:border-white/30" : ""
            }`}
          >
            <div className="font-display font-bold text-3xl md:text-[40px] text-white">
              <CountUp target={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-white/90 font-body font-medium text-sm mt-0.5">{stat.label}</div>
            <div className="text-white/80 font-body text-xs">{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBarSection;
