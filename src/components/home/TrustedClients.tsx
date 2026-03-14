import { useInView } from "@/hooks/useInView";
import { CLIENTS } from "@/data/clients";

const TrustedClients = () => {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className={`py-16 md:py-20 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Companies We Serve</h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">From leading corporates to trusted local institutions — Super Printers delivers quality that industry leaders rely on.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {CLIENTS.map((c) => (
            <div key={c.name} className="p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow text-center group">
              <div className="flex items-center justify-center h-20 mb-3 min-h-[80px]">
                <img
                  src={c.logo}
                  alt={`${c.name} logo — companies we serve`}
                  className="max-h-16 w-full max-w-[140px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  width="140"
                  height="64"
                  loading="lazy"
                />
              </div>
              <div className="font-body font-semibold text-sm text-card-foreground">{c.name}</div>
              {c.tag && <div className="text-muted-foreground text-xs font-body mt-0.5">{c.tag}</div>}
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
            Get Corporate Printing Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
