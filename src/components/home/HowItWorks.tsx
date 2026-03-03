import { useInView } from "@/hooks/useInView";
import { IMG } from "@/data/images";

const steps = [
  {
    img: IMG.P09, badge: "STEP 01", badgeBg: "bg-brand-red",
    title: "Choose Your Product", inline: IMG.P10,
    desc: "Browse our full range — visiting cards, wedding invitations, brochures and more.",
  },
  {
    img: IMG.P26, badge: "STEP 02", badgeBg: "bg-brand-orange",
    title: "Share Your Design", inline: IMG.P27,
    desc: "Send your artwork via WhatsApp or email. No design yet? Our team helps create the perfect layout.",
  },
  {
    img: IMG.P15, badge: "STEP 03", badgeBg: "bg-brand-teal",
    title: "We Print with Precision", inline: IMG.P02,
    desc: "Your job runs on our press with multi-point quality checks. Vibrant colors, sharp text, every time.",
  },
  {
    img: IMG.P21, badge: "STEP 04", badgeBg: "bg-brand-gold text-brand-dark",
    title: "Collect or Get Delivered", inline: IMG.P22,
    desc: "Pick up from our Chennai press or request delivery. Carefully packed and on time, always.",
  },
];

const HowItWorks = () => {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ background: "linear-gradient(160deg, #1A1A1A 0%, #2D2D2D 100%)" }}
    >
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-[46px] text-white font-bold mb-2">How to Order</h2>
        <div className="w-[60px] h-[3px] bg-brand-gold mx-auto mb-4" />
        <p className="font-body text-lg text-white/60">Simple. Fast. Professional.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {steps.map((s) => (
          <div key={s.title} className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <img src={s.img} alt={s.title} className="w-full h-[220px] object-cover" loading="lazy" width="600" height="220" />
            <div className={`${s.badgeBg} text-white text-center py-2 font-body text-sm font-bold`}>
              {s.badge}
            </div>
            <div className="p-6">
              <h4 className="font-display text-xl text-brand-dark font-bold mb-2">{s.title}</h4>
              <p className="font-body text-sm text-muted-foreground mb-4">{s.desc}</p>
              <img src={s.inline} alt={`${s.title} detail`} className="w-[80px] h-[55px] rounded-lg object-cover" loading="lazy" width="80" height="55" />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="relative rounded-2xl overflow-hidden max-w-5xl mx-auto h-[180px] flex items-center justify-center">
        <img src={IMG.P04} alt="Printing factory" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width="1200" height="180" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
          <h3 className="font-display text-2xl md:text-[28px] text-white font-bold">Ready to print?</h3>
          <a href="/get-quote" className="bg-brand-gold text-brand-dark font-body text-sm font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Start Your Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;