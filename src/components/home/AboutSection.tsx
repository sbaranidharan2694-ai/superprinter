import { useInView } from "@/hooks/useInView";
import { IMG } from "@/data/images";

const STRIP = [
  { img: IMG.P01, label: "Our Press" },
  { img: IMG.P02, label: "Offset" },
  { img: IMG.P06, label: "Wedding Cards" },
  { img: IMG.P09, label: "Visiting Cards" },
  { img: IMG.P13, label: "Brochures" },
];

const AboutSection = () => {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section ref={ref} className="bg-brand-cream">
      <div className={`max-w-7xl mx-auto px-4 py-16 md:py-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left images */}
          <div className="lg:w-[45%]">
            <div className="relative">
              <img
                src={IMG.P01}
                alt="Super Printers workshop"
                className="w-full h-[400px] object-cover rounded-2xl"
                style={{ boxShadow: "0 0 0 6px hsl(6,63%,46%), 0 0 0 12px hsl(48,88%,44%)" }}
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <img src={IMG.P16} alt="Man in print workshop" className="w-full h-[180px] object-cover rounded-xl" loading="lazy" width="300" height="180" />
              <img src={IMG.P19} alt="Colorful printing ink" className="w-full h-[180px] object-cover rounded-xl" loading="lazy" width="300" height="180" />
            </div>
          </div>

          {/* Right text */}
          <div className="lg:w-[55%]">
            <span className="text-brand-gold font-body text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="font-display text-3xl md:text-[42px] text-brand-dark font-bold mt-2 mb-6 leading-tight">
              A Family Business Built on Quality
            </h2>

            <div className="mb-6 overflow-hidden">
              <img src={IMG.P17} alt="Printed paper output" className="float-right w-[160px] h-[110px] rounded-[10px] object-cover ml-5 mb-2" loading="lazy" width="160" height="110" />
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Super Printers was founded in 1990 as a small family printing press in Chennai. Over 35 years we have grown into a full-service printing house — but we have never lost the personal care and craftsmanship of a family business that knows every client by name.
              </p>
            </div>

            <div className="mb-6 overflow-hidden">
              <img src={IMG.P25} alt="Screen printing workshop" className="float-left w-[160px] h-[110px] rounded-[10px] object-cover mr-5 mb-2" loading="lazy" width="160" height="110" />
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                From a single offset press to a complete facility offering digital printing, large format, lamination and binding — we have grown with Chennai's businesses, wedding families and creative professionals for three decades.
              </p>
            </div>

            <div className="mb-8 overflow-hidden">
              <img src={IMG.P33} alt="Color swatches" className="float-right w-[160px] h-[110px] rounded-[10px] object-cover ml-5 mb-2" loading="lazy" width="160" height="110" />
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Our state-of-the-art presses, expert team and commitment to quality mean every job — whether 50 visiting cards or 50,000 brochures — receives the same careful attention.
              </p>
            </div>

            <a href="/about" className="inline-block border-2 border-brand-red text-brand-red font-body text-sm font-semibold px-8 py-3 rounded-full hover:bg-brand-red hover:text-white transition-colors">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>

      {/* Strip of 5 images */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
        {STRIP.map((s) => (
          <div key={s.label} className="relative overflow-hidden group h-[200px]">
            <img src={s.img} alt={s.label} className="w-full h-full object-cover group-hover:brightness-110 group-hover:scale-[1.03] transition-all duration-300" loading="lazy" width="400" height="200" />
            <div className="absolute bottom-0 left-0 right-0 h-[30px] bg-black/65 flex items-center justify-center">
              <span className="text-white font-body text-xs">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;