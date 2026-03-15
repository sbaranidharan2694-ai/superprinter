import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/shared/PageHero";
import StatsCounter from "@/components/shared/StatsCounter";
import { BUSINESS } from "@/data/business";
import { IMG } from "@/data/images";

const TIMELINE = [
  { year: "1990", title: "Founded", desc: "Super Printers started as a small offset printing shop in Pallavaram." },
  { year: "2000", title: "Offset expansion", desc: "Added capacity and served growing demand from Chennai businesses." },
  { year: "2010", title: "Digital printing added", desc: "Introduced digital printing for short runs and variable data." },
  { year: "2020", title: "Premium finishes", desc: "Spot UV, foil, and lamination for visiting and wedding cards." },
  { year: "2024", title: "Online ordering", desc: "Website and WhatsApp ordering for quotes and orders." },
  { year: "2025", title: "Partner program", desc: "DTP and reseller partner program with dedicated support." },
];

const EQUIPMENT = ["Offset printing", "Digital printing", "Screen printing", "Die-cutting", "Lamination (gloss & matt)"];

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
        {/* Founder */}
        <div className="flex flex-col md:flex-row gap-6 items-start mb-12 p-6 rounded-xl bg-card border border-border">
          <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center text-3xl font-display font-bold shrink-0" style={{ color: "var(--color-primary)" }}>
            {BUSINESS.founder.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-1">{BUSINESS.founder}</h2>
            <p className="text-sm font-medium mb-2" style={{ color: "var(--gold)" }}>Founder — Super Printers</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{BUSINESS.founderBio}</p>
          </div>
        </div>

        <h2 className="font-display text-2xl font-bold text-foreground mb-6">Our Story — 35 Years of Printing Excellence</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Founded in 1990 by a local entrepreneur in Pallavaram, Super Printers started as a small offset printing shop near Pallavaram Railway Station. Over three and a half decades, we have grown into one of South Chennai's most trusted print partners.</p>
          <p>From hand-operated machines in the early days to modern digital and offset printing equipment today, our commitment has never changed: deliver the highest quality prints at the most honest prices in Chennai.</p>
          <p>Today, we serve over 10,000 satisfied customers — from startup founders ordering their first visiting cards, to families printing beautiful wedding invitations, to established businesses relying on us for corporate stationery, bill books, and branded materials.</p>
        </div>

        {/* Timeline */}
        <h2 className="font-display text-2xl font-bold text-foreground pt-12 mb-6">Our Journey</h2>
        <div className="space-y-4">
          {TIMELINE.map((item, i) => (
            <div key={item.year} className="flex gap-4">
              <div className="w-16 shrink-0 text-sm font-bold" style={{ color: "var(--gold)" }}>{item.year}</div>
              <div className="pb-4 border-b border-border last:border-0">
                <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Trust */}
        <h2 className="font-display text-2xl font-bold text-foreground pt-12 mb-6">Awards & Trust</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 text-center">
            <p className="text-2xl font-display font-bold" style={{ color: "var(--color-primary)" }}>GST Registered</p>
            <p className="text-xs text-muted-foreground mt-1">Tax ID: {BUSINESS.gstNumber}</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 text-center">
            <p className="text-2xl font-display font-bold" style={{ color: "var(--color-primary)" }}>{BUSINESS.years} Years</p>
            <p className="text-xs text-muted-foreground mt-1">In business since 1990</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 text-center">
            <p className="text-2xl font-display font-bold" style={{ color: "var(--color-primary)" }}>{BUSINESS.happyClients}</p>
            <p className="text-xs text-muted-foreground mt-1">Customers served</p>
          </div>
        </div>

        {/* Machines / Equipment */}
        <h2 className="font-display text-2xl font-bold text-foreground mb-4">Machines & Capabilities</h2>
        <p className="text-muted-foreground text-sm mb-4">We use modern equipment to deliver consistent quality:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
          {EQUIPMENT.map((eq) => (
            <li key={eq} className="flex items-center gap-2 text-foreground text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {eq}
            </li>
          ))}
        </ul>

        <h2 className="font-display text-2xl font-bold text-foreground mb-6">Why Chennai Trusts Super Printers</h2>
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
          <a href={BUSINESS.mapLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-full text-center hover:opacity-90 transition-opacity">
            Visit Our Press in Pallavaram → Get Directions
          </a>
          <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-full text-center hover:opacity-90 transition-opacity">
            Start Your Order on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  </>
);

export default About;
