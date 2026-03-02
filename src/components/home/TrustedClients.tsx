import { useInView } from "@/hooks/useInView";

const clients = [
  {
    name: "Wipro Limited",
    tag: "IT & Technology",
    logo: "https://logo.clearbit.com/wipro.com",
    type: "img" as const,
  },
  {
    name: "Reliance Smart Bazaar",
    tag: "Retail Chain",
    logo: "https://logo.clearbit.com/relianceretail.com",
    type: "img" as const,
  },
  {
    name: "NK Grand Palace",
    tag: "Hospitality & Events",
    monogram: "NK",
    bgColor: "bg-navy",
    textColor: "text-gold-light",
    type: "monogram" as const,
  },
  {
    name: "Yousuf Bhai Perfumes",
    tag: "Retail & Fragrance",
    monogram: "YB",
    bgColor: "bg-[hsl(345,50%,25%)]",
    textColor: "text-gold-light",
    type: "monogram" as const,
  },
  {
    name: "Fujitec",
    tag: "Elevators & Technology",
    logo: "https://logo.clearbit.com/fujitec.com",
    type: "img" as const,
  },
  {
    name: "Contemporary Leathers",
    tag: "Leather Manufacturing",
    monogram: "CL",
    bgColor: "bg-[hsl(30,30%,22%)]",
    textColor: "text-gold-light",
    type: "monogram" as const,
  },
  {
    name: "Sea Hydrosys System",
    tag: "Engineering & Systems",
    monogram: "SH",
    bgColor: "bg-navy",
    textColor: "text-gold-light",
    type: "monogram" as const,
  },
  {
    name: "& Many More",
    tag: "Across South Chennai",
    monogram: "+",
    bgColor: "bg-secondary",
    textColor: "text-secondary-foreground",
    type: "monogram" as const,
  },
];

const TrustedClients = () => {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className={`py-16 md:py-20 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Trusted by Leading Brands Across Chennai</h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">From Fortune 500 giants to beloved local institutions — Super Printers delivers quality that industry leaders rely on.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {clients.map((c) => (
            <div key={c.name} className="p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow text-center group">
              <div className="flex items-center justify-center h-16 mb-3">
                {c.type === "img" ? (
                  <img
                    src={c.logo}
                    alt={`${c.name} logo — trusted client of Super Printers Chennai`}
                    className="max-h-[60px] max-w-[120px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    width="120"
                    height="60"
                    loading="lazy"
                  />
                ) : (
                  <div className={`w-14 h-14 rounded-full ${c.bgColor} flex items-center justify-center`}>
                    <span className={`font-display text-xl font-bold ${c.textColor}`}>{c.monogram}</span>
                  </div>
                )}
              </div>
              <div className="font-body font-semibold text-sm text-card-foreground">{c.name}</div>
              <div className="text-muted-foreground text-xs font-body mt-0.5">{c.tag}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground font-body text-sm mb-4">Is your business next? Join 1000+ brands that trust Super Printers.</p>
          <a
            href="https://wa.me/919840199878?text=Hi,%20I%20represent%20a%20business%20and%20need%20corporate%20printing%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="wa-button inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold"
          >
            💬 Get Corporate Printing Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
