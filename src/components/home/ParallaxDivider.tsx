import { useInView } from "@/hooks/useInView";
import { IMG } from "@/data/images";

const ParallaxDivider = () => {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section
      ref={ref}
      className="relative h-[480px] flex items-center justify-center overflow-hidden parallax-bg"
      style={{ backgroundImage: `url(${IMG.P04_WIDE})` }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, rgba(192,57,43,0.87), rgba(212,172,13,0.70))" }}
      />
      <div className={`relative z-10 text-center px-4 max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="text-brand-gold font-body text-sm uppercase tracking-widest block mb-4">Our Commitment</span>
        <h2 className="font-display text-4xl md:text-[52px] text-white font-bold leading-tight mb-4">
          Every Print is a<br />Promise of <span className="text-brand-gold">Quality.</span>
        </h2>
        <p className="text-white/80 font-body text-lg mb-8">
          Trusted by Chennai businesses, families and designers since 1990.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          {[IMG.P02, IMG.P06, IMG.P09].map((src, i) => (
            <img key={i} src={src} alt="Print quality sample" className="w-[220px] h-[140px] rounded-xl border-2 border-white/50 object-cover" loading="lazy" width="220" height="140" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxDivider;