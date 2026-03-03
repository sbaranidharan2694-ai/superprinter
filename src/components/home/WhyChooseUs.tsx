import { useInView } from "@/hooks/useInView";
import { IMG } from "@/data/images";

const cards = [
  {
    img: IMG.P23, titleBg: "bg-brand-red", title: "35 Years of Expertise", inline: IMG.P03,
    desc: "Three decades perfecting the craft of printing means we have solved every challenge imaginable.",
  },
  {
    img: IMG.P15, titleBg: "bg-brand-orange", title: "Fast Turnaround", inline: IMG.P12,
    desc: "Most orders ready in 24-48 hours. Urgent jobs completed same day. We understand your deadlines.",
  },
  {
    img: IMG.P02, titleBg: "bg-brand-teal", title: "Quality Guaranteed", inline: IMG.P19,
    desc: "Every job gets multi-point quality checks — color accuracy, registration, cutting — before it leaves us.",
  },
  {
    img: IMG.P22, titleBg: "bg-brand-gold text-brand-dark", title: "Reliable Delivery", inline: IMG.P24,
    desc: "Collect from our Chennai press or request delivery across Tamil Nadu. Packed carefully, always on time.",
  },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section ref={ref} className={`bg-white py-16 md:py-24 px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h2 className="font-display text-3xl md:text-[42px] text-brand-dark font-bold text-center mb-12">
        Why Chennai Chooses Super Printers
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <img src={c.img} alt={c.title} className="w-full h-[200px] object-cover" loading="lazy" width="400" height="200" />
            <div className={`${c.titleBg} text-white font-body text-sm font-bold py-2 px-4`}>
              {c.title}
            </div>
            <div className="p-5">
              <p className="font-body text-sm text-muted-foreground mb-4">{c.desc}</p>
              <img src={c.inline} alt={`${c.title} detail`} className="w-[70px] h-[50px] rounded-lg object-cover" loading="lazy" width="70" height="50" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;