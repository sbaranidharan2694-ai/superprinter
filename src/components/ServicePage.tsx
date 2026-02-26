import { services, type ServiceData } from "@/data/services";
import { useInView } from "@/hooks/useInView";

interface ServicePageProps {
  serviceId: string;
  setActivePage: (page: string) => void;
}

const WA_BASE = "https://wa.me/919840199878?text=";

const ServicePage = ({ serviceId, setActivePage }: ServicePageProps) => {
  const service = services.find((s) => s.id === serviceId);
  const { ref, isVisible } = useInView(0.1);

  if (!service) return null;

  const relatedServices = service.relatedServices
    .map((id) => services.find((s) => s.id === id))
    .filter(Boolean) as ServiceData[];

  const navigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="navy-gradient-hero dot-pattern py-16 md:py-24">
        <div className={`max-w-4xl mx-auto px-4 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm font-body" aria-label="Breadcrumb">
            <button onClick={() => navigate("home")} className="text-primary-foreground/60 hover:text-gold-light transition-colors">Home</button>
            <span className="text-primary-foreground/40 mx-2">/</span>
            <span className="text-gold-light">{service.name}</span>
          </nav>

          <div className="text-5xl mb-4">{service.emoji}</div>
          <h1 className="font-display text-3xl md:text-5xl font-black text-primary-foreground mb-4">
            {service.name} in Chennai
          </h1>
          {service.startingPrice && service.startingPrice !== "Varies" && (
            <p className="text-gold-light font-body text-lg mb-2">Starting from {service.startingPrice}</p>
          )}
          {service.isNew && (
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold mb-4">⭐ NEW SERVICE</span>
          )}
        </div>
      </section>

      {/* Description */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-8">{service.heroDesc}</p>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((f, i) => (
              <div key={i} className="card-lift p-5 rounded-xl bg-card border border-border">
                <h3 className="font-display text-sm font-bold text-card-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-xs font-body">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">How to Order</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "1", emoji: "💬", title: "Contact Us", desc: "WhatsApp or call us with your requirements" },
              { step: "2", emoji: "🎨", title: "Design", desc: "Send your file or get design assistance" },
              { step: "3", emoji: "🖨️", title: "Print", desc: "We print with premium quality materials" },
              { step: "4", emoji: "📦", title: "Deliver", desc: "Pick up or get doorstep delivery" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full navy-gradient flex items-center justify-center text-2xl mb-3">{s.emoji}</div>
                <div className="text-xs font-body text-secondary font-bold mb-1">Step {s.step}</div>
                <h3 className="font-display text-sm font-bold text-foreground mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-xs font-body">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Ready to Order {service.name}?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${WA_BASE}${encodeURIComponent(service.waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-button px-8 py-4 rounded-xl text-base font-bold flex items-center gap-2"
            >
              💬 Get Quote on WhatsApp
            </a>
            <a href="tel:9840199878" className="px-8 py-4 rounded-xl text-base font-semibold border-2 border-foreground/20 text-foreground hover:bg-muted transition-colors flex items-center gap-2">
              📞 Call: 9840199878
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedServices.map((rs) => (
                <button
                  key={rs.id}
                  onClick={() => navigate(rs.id)}
                  className="card-lift p-6 rounded-xl bg-card border border-border text-left flex items-center gap-4"
                >
                  <span className="text-3xl">{rs.emoji}</span>
                  <div>
                    <h3 className="font-display text-base font-bold text-card-foreground">{rs.name}</h3>
                    <p className="text-muted-foreground text-xs font-body">{rs.shortDesc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServicePage;
