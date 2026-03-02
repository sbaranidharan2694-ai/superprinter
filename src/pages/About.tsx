import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";
import { useInView } from "@/hooks/useInView";
import TrustedClients from "@/components/home/TrustedClients";

const About = () => {
  const { ref, isVisible } = useInView();

  return (
    <>
      <SEOHead
        title="About Super Printers | Printing Press in Pallavaram, Chennai Since 1990"
        description="Founded in 1990, Super Printers is Pallavaram's most trusted printing press. 35+ years serving Wipro, Reliance, Fujitec and 1000+ Chennai businesses."
        canonical="/about"
        keywords="about super printers, printing press pallavaram, printing company chennai, trusted printers chennai"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />
      <main>
        <section ref={ref} className={`py-16 md:py-24 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-display text-3xl md:text-5xl font-black text-foreground mb-6">
              About Super Printers — Chennai's Trusted Printing Press Since 1990
            </h1>

            {/* Our Story */}
            <h2 className="font-display text-2xl font-bold text-foreground pt-4 mb-4">Our Story — 35 Years of Printing Excellence</h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Founded in 1990 by a local entrepreneur in Pallavaram, Super Printers started as a small offset printing shop near Pallavaram Railway Station. Over three and a half decades, we have grown into one of South Chennai's most trusted print partners.
              </p>
              <p>
                From hand-operated machines in the early days to modern digital and offset printing equipment today, our commitment has never changed: deliver the highest quality prints at the most honest prices in Chennai.
              </p>
              <p>
                Today, we serve over 1000 satisfied customers annually — from startup founders ordering their first visiting cards, to families printing beautiful wedding invitations, to established businesses like Wipro, Reliance Smart Bazaar, and Fujitec relying on us for corporate stationery, bill books, and branded materials.
              </p>
            </div>

            {/* Why Chennai Trusts Us */}
            <h2 className="font-display text-2xl font-bold text-foreground pt-8 mb-4">Why Chennai Trusts Super Printers</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground font-body">
              <li>Established 1990 — {BUSINESS.years} years of printing excellence</li>
              <li>Affordable pricing with no hidden charges</li>
              <li>Fast 1–7 day turnaround on all services</li>
              <li>Premium quality offset, digital, and screen printing</li>
              <li>Conveniently located near Pallavaram Railway Station</li>
              <li>Serving all of Chennai — Pallavaram, Chromepet, Tambaram & beyond</li>
              <li>Free design assistance for all printing orders</li>
              <li>Trusted by Wipro, Reliance, Fujitec and 1000+ businesses</li>
              <li>Home delivery available across Chennai</li>
            </ul>

            {/* Printing Capabilities */}
            <h2 className="font-display text-2xl font-bold text-foreground pt-8 mb-4">Our Printing Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="p-5 rounded-xl bg-card border border-border">
                <span className="text-2xl" aria-hidden="true">⚙️</span>
                <h3 className="font-display text-lg font-bold text-card-foreground mt-2 mb-2">Commercial Printing</h3>
                <p className="text-muted-foreground text-sm font-body">Offset printing, digital printing, and screen printing for businesses of all sizes.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border border-border">
                <span className="text-2xl" aria-hidden="true">📇</span>
                <h3 className="font-display text-lg font-bold text-card-foreground mt-2 mb-2">Stationery</h3>
                <p className="text-muted-foreground text-sm font-body">Visiting cards, letterheads, bill books, envelopes — everything for your brand identity.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border border-border">
                <span className="text-2xl" aria-hidden="true">💌</span>
                <h3 className="font-display text-lg font-bold text-card-foreground mt-2 mb-2">Events & Personal</h3>
                <p className="text-muted-foreground text-sm font-body">Wedding invitations, banners, T-shirts, rubber stamps — for every occasion.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Clients — reused component */}
        <TrustedClients />

        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            {/* Find Us */}
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Find Us in Pallavaram</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-2">
              Our shop is located at Old No.12, New No.8, Saraswathi Colony, right next to Pallavaram Railway Station Road. Easy to reach from Chromepet, Tambaram, Pammal, Alandur, and all of South Chennai. Walk in anytime Monday–Saturday, 9:30 AM to 6:30 PM. We also offer delivery across Chennai.
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-whatsapp/10 border border-whatsapp/30 text-xs font-bold text-whatsapp font-body mb-6">
              🚚 Home Delivery Available
            </span>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { num: BUSINESS.years, label: "Years in Business" },
                { num: "1000+", label: "Happy Customers" },
                { num: "14+", label: "Print Services" },
                { num: BUSINESS.founded, label: "Established" },
              ].map((s) => (
                <div key={s.label} className="navy-gradient p-5 rounded-xl text-center">
                  <div className="font-display text-2xl font-black text-gold-light">{s.num}</div>
                  <div className="text-primary-foreground/70 text-xs font-body mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Explore Services */}
            <h2 className="font-display text-2xl font-bold text-foreground pt-4 mb-4">Explore Our Printing Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { emoji: "📇", name: "Visiting Cards", slug: "visiting-cards" },
                { emoji: "💌", name: "Wedding Invitations", slug: "wedding-invitations" },
                { emoji: "📖", name: "Brochure Printing", slug: "brochure-printing" },
                { emoji: "🏗️", name: "Banner Printing", slug: "banner-printing" },
              ].map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="p-4 rounded-xl bg-card border border-border card-lift text-center">
                  <span className="text-3xl block mb-2" aria-hidden="true">{s.emoji}</span>
                  <span className="font-body font-semibold text-sm text-card-foreground">{s.name}</span>
                </Link>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/services" className="gold-button px-6 py-3 rounded-lg text-sm font-semibold text-center">
                View All Services →
              </Link>
              <Link to="/gallery" className="px-6 py-3 rounded-lg text-sm font-semibold border-2 border-border text-foreground hover:bg-muted transition-colors text-center">
                See Our Portfolio →
              </Link>
              <Link to="/get-quote" className="wa-button px-6 py-3 rounded-lg text-sm font-semibold text-center">
                Get a Quote →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
