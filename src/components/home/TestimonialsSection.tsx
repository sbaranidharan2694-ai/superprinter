import { useState, useEffect, useCallback } from "react";
import { useInView } from "@/hooks/useInView";
import { IMG } from "@/data/images";

const testimonials = [
  {
    border: "border-brand-red", img: IMG.P06,
    quote: "Super Printers made our wedding invitations absolutely beautiful. The Spot UV finish was stunning — every guest asked where we had them printed.",
    name: "Priya & Arun", role: "Wedding Clients, Chennai",
  },
  {
    border: "border-brand-gold", img: IMG.P09,
    quote: "Best visiting cards in Chennai. Thick, glossy, professional — delivered in 24 hours. Clients always ask where I get them printed.",
    name: "Senthil M.", role: "Business Owner, T. Nagar",
  },
  {
    border: "border-brand-teal", img: IMG.P13,
    quote: "We have used Super Printers for company brochures and letterheads for over 10 years. Consistent quality, honest pricing, never a single delay.",
    name: "Kavitha R.", role: "Marketing Manager, Anna Nagar",
  },
  {
    border: "border-brand-orange", img: IMG.P12,
    quote: "Needed 200 flyers printed same-day for an event. They delivered in 4 hours — crisp and vibrant. Absolute lifesavers. Highly recommend!",
    name: "Ramesh K.", role: "Event Organizer, Adyar",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useInView(0.1);
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section ref={ref} className={`bg-brand-cream transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        {/* Left image */}
        <div className="lg:w-[40%] relative min-h-[300px]">
          <img src={IMG.P01} alt="Printing press" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width="600" height="500" />
          <div className="absolute inset-0 bg-brand-red/25" />
          <div className="relative z-10 flex items-center justify-center h-full p-8">
            <h2 className="font-display text-3xl md:text-[34px] text-white font-bold italic text-center">
              What Our Clients Say
            </h2>
          </div>
        </div>

        {/* Right carousel */}
        <div className="lg:w-[60%] flex items-center justify-center p-8 md:p-12">
          <div className={`bg-white rounded-2xl shadow-md overflow-hidden max-w-lg w-full border-t-4 ${t.border}`}>
            <img src={t.img} alt={t.name} className="w-full h-[150px] object-cover" loading="lazy" width="500" height="150" />
            <div className="p-6">
              <div className="text-brand-gold text-lg mb-3">★★★★★</div>
              <p className="font-body text-base text-muted-foreground italic mb-4 leading-relaxed">"{t.quote}"</p>
              <p className="font-body text-sm font-bold text-brand-dark">{t.name}</p>
              <p className="font-body text-sm text-muted-foreground">{t.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;