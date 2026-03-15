import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { services } from "@/data/services";
import { BUSINESS } from "@/data/business";
import { useInView } from "@/hooks/useInView";

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

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${service.name} — Super Printers Chennai`,
    "description": service.seoDescription,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": service.startingPrice?.replace(/[^\d]/g, "") || "0",
      "availability": "https://schema.org/InStock",
    },
  };

  return (
    <>
      <SEOHead
        title={service.seoTitle}
        description={service.seoDescription}
        canonical={`/services/${service.slug}`}
        keywords={service.keywords}
        schemaMarkup={productSchema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.name, url: `/services/${service.slug}` },
        ]}
      />
      <main>
        {/* Hero */}
        <section className="navy-gradient-hero dot-pattern py-14 md:py-20" style={{ borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
          <div className="max-w-4xl mx-auto px-4">
            <nav className="text-gray-400 text-sm font-body mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:opacity-80" style={{ color: "var(--color-primary)" }}>Home</Link>
              <span className="mx-2">›</span>
              <Link to="/services" className="hover:opacity-80" style={{ color: "var(--color-primary)" }}>Services</Link>
              <span className="mx-2">›</span>
              <span style={{ color: "var(--color-primary)" }}>{service.name}</span>
            </nav>
            <div className="flex items-start gap-4 mb-4">
              <span className="text-5xl">{service.emoji}</span>
              <div>
                <h1 className="font-display text-3xl md:text-5xl font-black leading-tight" style={{ color: "var(--color-primary)" }}>
                  {service.name} in Chennai
                </h1>
                {service.startingPrice && (
                  <p className="text-lg font-body mt-2" style={{ color: "#4B5563" }}>Starting from {service.startingPrice}</p>
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

            {/* Pricing Guide */}
            {service.pricingGuide && service.pricingGuide.length > 0 && (
              <>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Pricing Guide</h3>
                <div className="overflow-hidden rounded-xl border border-border mb-4">
                  <table className="w-full text-sm font-body">
                    <thead>
                      <tr style={{ backgroundColor: "var(--color-primary)", color: "#FFFFFF" }}>
                        <th className="text-left px-4 py-3 font-semibold">Paper / Finish</th>
                        <th className="text-left px-4 py-3 font-semibold">Quantity</th>
                        <th className="text-left px-4 py-3 font-semibold">Starting Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.pricingGuide.map((row, i) => (
                        <tr key={i} className="border-t border-border">
                          <td className="px-4 py-3 text-card-foreground">{row.paper}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.quantity}</td>
                          <td className="px-4 py-3 font-bold text-secondary">{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground text-xs font-body mb-12">
                  Final prices depend on paper, finish, and quantity. WhatsApp us for exact quote.
                </p>
              </>
            )}

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
                href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(service.waMessage)}`}
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
