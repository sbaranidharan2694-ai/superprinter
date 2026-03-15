import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/shared/PageHero";
import StatsCounter from "@/components/shared/StatsCounter";
import { BUSINESS } from "@/data/business";
import { IMG } from "@/data/images";

const About = () => (
  <>
    <SEOHead
      title="About Super Printers | Printing Press in Pallavaram, Chennai Since 1990"
      description="Founded in 1990, Super Printers is Pallavaram's most trusted printing press. 35+ years serving businesses and families across Chennai."
      canonical="/about"
    />
    <PageHero title="About Super Printers" subtitle="Chennai's trusted printing press since 1990 — 35+ years of printing excellence." image={IMG.hero} breadcrumbs={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }]} />

    <section className="py-16 lg:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-foreground mb-6">Our Story — 35 Years of Printing Excellence</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Founded in 1990 by a local entrepreneur in Pallavaram, Super Printers started as a small offset printing shop near Pallavaram Railway Station. Over three and a half decades, we have grown into one of South Chennai's most trusted print partners.</p>
          <p>From hand-operated machines in the early days to modern digital and offset printing equipment today, our commitment has never changed: deliver the highest quality prints at the most honest prices in Chennai.</p>
          <p>Today, we serve over 10,000 satisfied customers — from startup founders ordering their first visiting cards, to families printing beautiful wedding invitations, to established businesses relying on us for corporate stationery, bill books, and branded materials.</p>
        </div>

        <h2 className="font-display text-2xl font-bold text-foreground pt-10 mb-6">Why Chennai Trusts Super Printers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            `Established 1990 — ${BUSINESS.years} years of printing excellence`,
            "Affordable pricing with no hidden charges",
            "Fast 1–7 day turnaround on all services",
            "Premium quality offset, digital, and screen printing",
            "Conveniently located near Pallavaram Railway Station",
            "Serving all of Chennai — Pallavaram, Chromepet, Tambaram & beyond",
            "Free design assistance for all printing orders",
            "Home delivery available across Chennai",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border">
              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl font-bold text-foreground pt-10 mb-6">Our Printing Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { title: "Commercial Printing", desc: "Offset printing, digital printing, and screen printing for businesses of all sizes.", img: IMG.offsetPress },
            { title: "Stationery", desc: "Visiting cards, letterheads, bill books, envelopes — everything for your brand identity.", img: IMG.letterhead },
            { title: "Events & Personal", desc: "Wedding invitations, banners, T-shirts, rubber stamps — for every occasion.", img: IMG.weddingInvite1 },
          ].map((cap, i) => (
            <div key={i} className="bg-card rounded-xl overflow-hidden border border-border">
              <img src={cap.img} alt={cap.title} className="w-full h-40 object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{cap.title}</h3>
                <p className="text-muted-foreground text-sm">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <StatsCounter />

    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-foreground mb-6">Find Us in Pallavaram</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Our shop is located at {BUSINESS.address}, right next to Pallavaram Railway Station Road. Easy to reach from Chromepet, Tambaram, Pammal, Alandur, and all of South Chennai. Walk in anytime {BUSINESS.hours}. We also offer delivery across Chennai.
        </p>
        <div className="rounded-xl overflow-hidden border border-border mb-8">
          <iframe src={BUSINESS.mapEmbed} width="100%" height="300" style={{ border: 0 }} loading="lazy" title="Super Printers and Wedding Cards location" allowFullScreen />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/services" className="bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-full text-center hover:opacity-90 transition-opacity">View All Services →</Link>
          <Link to="/gallery" className="border border-border text-foreground font-semibold text-sm px-6 py-3 rounded-full text-center hover:bg-accent transition-colors">See Our Portfolio →</Link>
          <Link to="/get-quote" className="bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-full text-center hover:opacity-90 transition-opacity">Get a Quote →</Link>
        </div>
      </div>
    </section>
  </>
);

export default About;
