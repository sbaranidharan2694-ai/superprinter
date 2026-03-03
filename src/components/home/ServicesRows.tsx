import { useInView } from "@/hooks/useInView";
import { IMG } from "@/data/images";

const rows = [
  {
    title: "Offset Printing", label: "OUR FLAGSHIP SERVICE", bg: "bg-brand-red",
    img: IMG.P02, thumbs: [IMG.P03, IMG.P17, IMG.P19],
    desc: "The backbone of professional print quality. Our offset presses deliver razor-sharp CMYK color accuracy for bulk orders — stationery, brochures, forms and more.",
    btn: "Get Offset Quote",
  },
  {
    title: "Wedding Invitations", label: "MOST REQUESTED", bg: "bg-brand-maroon",
    img: IMG.P06, thumbs: [IMG.P07, IMG.P08, IMG.P34],
    desc: "Your wedding card is the first impression of your celebration. We print in Gloss, Matt, Spot UV and Embossed finishes — Tamil traditional to modern minimalist styles.",
    btn: "See Wedding Designs",
  },
  {
    title: "Visiting Cards", label: "FAST TURNAROUND", bg: "bg-brand-teal",
    img: IMG.P09, thumbs: [IMG.P10, IMG.P11, IMG.P29],
    desc: "Your business card speaks before you do. Premium cards in Gloss Lamination, Matt, Spot UV, Velvet Finish and Foil Stamping — 450 GSM thick and impressive.",
    btn: "Order Visiting Cards",
  },
  {
    title: "Digital Printing", label: "FAST AND FLEXIBLE", bg: "bg-brand-dark",
    img: IMG.P12, thumbs: [IMG.P15, IMG.P25, IMG.P28],
    desc: "Need it fast? Our digital presses handle short-run jobs with no minimum — flyers, certificates, ID cards, menus — full-color accuracy, same-day ready.",
    btn: "Start Digital Order",
  },
  {
    title: "Brochures & Catalogues", label: "MAKE AN IMPACT", bg: "bg-brand-orange",
    img: IMG.P13, thumbs: [IMG.P31, IMG.P17, IMG.P14],
    desc: "From tri-fold brochures to full product catalogues, we print marketing materials that convert — rich CMYK on premium art paper with folding and binding options.",
    btn: "Request Brochure Quote",
  },
  {
    title: "Stationery & Letterheads", label: "COMPLETE OFFICE SUITE", bg: "bg-brand-gold",
    img: IMG.P14, thumbs: [IMG.P03, IMG.P17, IMG.P31],
    desc: "A cohesive brand identity starts with stationery. We print letterheads, envelopes, notepads, bill books, invoice books and complete branded stationery sets.",
    btn: "Order Stationery", textDark: true,
  },
  {
    title: "Posters & Large Format", label: "BIG IMPRESSIONS", bg: "bg-brand-red",
    img: IMG.P05, thumbs: [IMG.P04, IMG.P16, IMG.P28],
    desc: "From A3 posters to massive flex banners, we make your brand impossible to ignore — retail displays, event banners, standees and outdoor hoardings in vibrant inks.",
    btn: "Print Large Format",
  },
];

const ServiceRow = ({ row, index }: { row: typeof rows[0]; index: number }) => {
  const { ref, isVisible } = useInView(0.1);
  const imgLeft = index % 2 === 0;
  const textColor = row.textDark ? "text-brand-dark" : "text-white";

  return (
    <div ref={ref} className={`flex flex-col ${imgLeft ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[480px] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {/* Image half */}
      <div className="lg:w-1/2 relative overflow-hidden">
        <img
          src={row.img}
          alt={`${row.title} printing service`}
          className={`w-full h-[300px] lg:h-full object-cover ${imgLeft ? "lg:rounded-r-xl" : "lg:rounded-l-xl"}`}
          loading="lazy"
          width="960"
          height="480"
        />
      </div>

      {/* Text half */}
      <div className={`lg:w-1/2 ${row.bg} flex flex-col justify-center p-8 md:p-12 lg:p-[60px]`}>
        <span className={`font-body text-xs uppercase tracking-widest ${row.textDark ? "text-brand-dark/70" : "text-white/70"} mb-3`}>
          {row.label}
        </span>
        <h3 className={`font-display text-3xl lg:text-4xl font-bold ${textColor} mb-4`}>{row.title}</h3>
        <p className={`font-body text-base ${row.textDark ? "text-brand-dark/90" : "text-white/90"} mb-6 leading-relaxed`}>
          {row.desc}
        </p>
        <div className="flex gap-2 mb-6">
          {row.thumbs.map((t, i) => (
            <img key={i} src={t} alt={`${row.title} sample ${i + 1}`} className="w-[100px] h-[70px] rounded-lg object-cover border-2 border-white/30" loading="lazy" width="100" height="70" />
          ))}
        </div>
        <a
          href="https://wa.me/919840199878"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block w-fit border-2 ${row.textDark ? "border-brand-dark text-brand-dark" : "border-white text-white"} font-body text-sm font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors`}
        >
          {row.btn}
        </a>
      </div>
    </div>
  );
};

const ServicesRows = () => {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section className="bg-background">
      <div ref={ref} className={`text-center py-16 px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="font-display text-4xl md:text-[48px] text-brand-dark font-bold mb-3">Our Printing Services</h2>
        <p className="font-body text-lg text-muted-foreground">Seven services. One trusted press.</p>
      </div>
      {rows.map((row, i) => (
        <ServiceRow key={row.title} row={row} index={i} />
      ))}
    </section>
  );
};

export default ServicesRows;