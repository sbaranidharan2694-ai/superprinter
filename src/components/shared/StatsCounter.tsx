import { useState, useEffect, useRef } from "react";

const STATS = [
  { num: "35+", label: "Years Experience", sub: "Since 1990" },
  { num: "10,000+", label: "Happy Clients", sub: "Across India" },
  { num: "50+", label: "Print Services", sub: "Complete Range" },
  { num: "1–4", label: "Day Delivery", sub: "Pan Tamil Nadu" },
];

const Counter = ({ target, suffix = "" }: { target: string; suffix?: string }) => {
  const num = parseInt(target.replace(/[^0-9]/g, "")) || 0;
  const [count, setCount] = useState(num);
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || num === 0 || animated.current) return;
    animated.current = true;
    setCount(0);
    let s = 0;
    const step = Math.max(1, Math.floor(num / 60));
    const t = setInterval(() => {
      s += step;
      if (s >= num) { setCount(num); clearInterval(t); } else setCount(s);
    }, 30);
    return () => clearInterval(t);
  }, [visible, num]);

  return <span ref={ref}>{num === 0 ? target : count.toLocaleString() + suffix}</span>;
};

const StatsCounter = () => (
  <div className="bg-[hsl(220,26%,10%)]">
    <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4">
      {STATS.map((t, i) => (
        <div key={i} className={`text-center py-10 px-6 ${i < 3 ? "lg:border-r border-border" : ""}`}>
          <div className="font-display text-secondary font-black text-3xl lg:text-4xl mb-1">
            <Counter target={t.num} suffix={t.num.includes("+") ? "+" : ""} />
          </div>
          <div className="text-foreground font-semibold text-sm mb-0.5">{t.label}</div>
          <div className="text-muted-foreground text-xs">{t.sub}</div>
        </div>
      ))}
    </div>
  </div>
);

export default StatsCounter;
