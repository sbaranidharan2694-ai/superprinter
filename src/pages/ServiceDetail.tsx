import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { services } from "@/data/services";
import { BUSINESS } from "@/data/business";
import { useInView } from "@/hooks/useInView";

const WA_BASE = "https://wa.me/919840199878?text=";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const { ref, isVisible } = useInView();

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
        <Link to="/services" className="text-secondary hover:underline font-body">← Back to All Services</Link>
      </div>
    );
  }

  const relatedServices = services.filter((s) => service.relatedServices.includes(s.id));

  return (
    <>
      <SEOHead
        title={service.seoTitle}
        description={service.seoDescription}
        canonical={`/services/${service.slug}`}
        keywords={service.keywords}
      />
      <main>
        {/* Hero */}
        <section className="navy-gradient-hero dot-pattern py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="text-primary-foreground/50 text-sm font-body mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-gold-light">Home</Link>
              <span className="mx-2">›</span>
              <Link to="/services" className="hover:text-gold-light">Services</Link>
              <span className="mx-2">›</span>
              <span className="text-primary-foreground">{service.name}</span>
            </nav>
            <div className="flex items-start gap-4 mb-4">
              <span className="text-5xl">{service.emoji}</span>
              <div>
                <h1 className="font-display text-3xl md:text-5xl font-black text-primary-foreground leading-tight">
                  {service.name} in Chennai
                </h1>
                {service.startingPrice && (
                  <p className="text-gold-light text-lg font-body mt-2">Starting from {service.startingPrice}</p>
                )}
              </div>
            </div>
            {service.isNew && (
              <span className="inline-block mt-2 text-xs font-bold px-3 py-1 rounded-full bg-secondary text-secondary-foreground">⭐ NEW SERVICE</span>
            )}
          </div>
        </section>

        {/* Content */}
        <section ref={ref} className={`py-14 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-10">
              {service.heroDesc}
            </p>

            {/* Features */}
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Types & Options</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {service.features.map((f) => (
                <div key={f.title} className="p-5 rounded-xl bg-card border border-border">
                  <h3 className="font-body font-bold text-card-foreground mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm font-body">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* How to Order */}
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">How to Order</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { step: "1", title: "Tell Us", desc: "Share your requirements via WhatsApp or call" },
                { step: "2", title: "Design", desc: "Send your design or get our free assistance" },
                { step: "3", title: "Confirm", desc: "Approve the proof and confirm your order" },
                { step: "4", title: "Deliver", desc: "Pick up from Pallavaram or get it delivered" },
              ].map((s) => (
                <div key={s.step} className="navy-gradient p-5 rounded-xl text-center">
                  <div className="text-gold-light font-display text-2xl font-bold mb-1">{s.step}</div>
                  <div className="text-primary-foreground font-body font-semibold text-sm">{s.title}</div>
                  <div className="text-primary-foreground/60 font-body text-xs mt-1">{s.desc}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={`${WA_BASE}${encodeURIComponent(service.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-button px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2"
              >
                💬 Get Quote on WhatsApp
              </a>
              <a href={BUSINESS.phoneTel} className="px-8 py-4 rounded-xl text-base font-semibold border-2 border-border text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2">
                📞 Call {BUSINESS.phone}
              </a>
            </div>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Related Printing Services</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedServices.map((rs) => (
                    <Link key={rs.id} to={`/services/${rs.slug}`} className="p-5 bg-card rounded-xl border border-border card-lift flex items-center gap-4">
                      <span className="text-3xl">{rs.emoji}</span>
                      <div>
                        <div className="font-body font-bold text-card-foreground">{rs.name}</div>
                        <div className="text-muted-foreground text-sm font-body">{rs.shortDesc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiceDetail;
