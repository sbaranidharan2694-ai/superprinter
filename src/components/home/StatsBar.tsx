import { useInView } from "@/hooks/useInView";
import { IMG } from "@/data/images";

const blocks = [
  { num: "1990", label: "YEAR ESTABLISHED", bg: "bg-brand-red", numColor: "text-white", img: IMG.P03 },
  { num: "35+", label: "YEARS OF EXCELLENCE", bg: "bg-brand-orange", numColor: "text-brand-gold", img: IMG.P18 },
  { num: "10,000+", label: "HAPPY CLIENTS", bg: "bg-brand-gold", numColor: "text-brand-dark", img: IMG.P06 },
  { num: "50+", label: "PRINT SERVICES", bg: "bg-brand-teal", numColor: "text-white", img: IMG.P20 },
];

const StatsBar = () => {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {blocks.map((b) => (
          <div key={b.label} className={`relative overflow-hidden ${b.bg} py-10 px-6 text-center`}>
            <img src={b.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.15]" loading="lazy" width="400" height="200" aria-hidden="true" />
            <div className="relative z-10">
              <div className={`font-display text-4xl md:text-[56px] font-bold ${b.numColor}`}>{b.num}</div>
              <div className="text-white font-body text-xs uppercase tracking-widest mt-2">{b.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;