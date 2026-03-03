import { useInView } from "@/hooks/useInView";
import { IMG } from "@/data/images";

const THUMBS = [
  { img: IMG.P06, label: "Wedding Cards" },
  { img: IMG.P09, label: "Visiting Cards" },
  { img: IMG.P13, label: "Brochures" },
  { img: IMG.P14, label: "Stationery" },
  { img: IMG.P12, label: "Digital Print" },
];

const HeroSection = () => {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG Image */}
      <img
        src={IMG.P01_HERO}
        alt="Super Printers vintage printing press workshop"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        width="1920"
        height="1080"
      />
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(192,57,43,0.88) 0%, rgba(26,26,26,0.50) 60%, rgba(0,0,0,0.10) 100%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-4">
              Chennai's Printing Press Since 1990
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-white leading-tight mb-6">
              Printing That<br />Tells Your<br />
              <span className="text-brand-gold">Story.</span>
            </h1>
            <p className="text-white/80 font-body text-lg mb-8 max-w-xl">
              Wedding cards, visiting cards, offset &amp; digital printing — crafted with care for over 35 years.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <a href="/services" className="bg-brand-gold text-brand-dark font-body text-base font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
                Explore Our Services
              </a>
              <a href="tel:+919840199878" className="border-2 border-white text-white font-body text-base font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
                Call for a Quote
              </a>
            </div>

            {/* Product thumbnails */}
            <div className="flex items-center gap-3 justify-center lg:justify-start flex-wrap">
              {THUMBS.map((t) => (
                <div key={t.label} className="text-center">
                  <img
                    src={t.img}
                    alt={t.label}
                    className="w-[90px] h-[65px] rounded-lg border-2 border-white/50 object-cover"
                    loading="eager"
                    width="90"
                    height="65"
                  />
                  <span className="block text-white text-xs font-body mt-1">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Floating cards */}
          <div className={`hidden lg:block relative transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <img
              src={IMG.P02}
              alt="Heidelberg offset press with orange ink rollers"
              className="w-[380px] h-[480px] rounded-2xl border-4 border-white/30 object-cover rotate-2 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
              loading="eager"
              width="380"
              height="480"
            />
            <img
              src={IMG.P09}
              alt="Professional visiting cards"
              className="absolute -bottom-4 -left-16 w-[190px] h-[135px] rounded-xl -rotate-3 border-2 border-brand-gold object-cover shadow-xl"
              loading="eager"
              width="190"
              height="135"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <div className="w-px h-8 bg-white/50 mx-auto animate-scroll-line mb-2" />
        <span className="text-white/50 font-body text-xs uppercase tracking-widest">Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;