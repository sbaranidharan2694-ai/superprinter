import { useState } from "react";
import TopBar from "@/components/TopBar";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/home/Hero";
import ServiceTicker from "@/components/home/ServiceTicker";
import Features from "@/components/home/Features";
import ServiceGrid from "@/components/home/ServiceGrid";
import PricingTable from "@/components/home/PricingTable";
import WhyUs from "@/components/home/WhyUs";
import GoldCTA from "@/components/home/GoldCTA";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ServicePage from "@/components/ServicePage";
import { services } from "@/data/services";

const Index = () => {
  const [activePage, setActivePage] = useState("home");

  const isServicePage = services.some((s) => s.id === activePage);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <SiteHeader activePage={activePage} setActivePage={setActivePage} />

      {activePage === "home" && (
        <>
          <Hero />
          <ServiceTicker />
          <Features />
          <ServiceGrid setActivePage={setActivePage} />
          <PricingTable />
          <WhyUs />
          <GoldCTA />
          <Testimonials />
          <FAQSection />
          <ContactSection />
        </>
      )}

      {activePage === "about" && (
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-display text-3xl md:text-5xl font-black text-foreground mb-6">About Super Printers</h1>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Founded in 1989, Super Printers is one of Pallavaram's oldest and most trusted printing presses. For over 36 years, we have been serving individuals, families, and businesses across Chennai with high-quality, affordable printing solutions.
              </p>
              <p>
                Our state-of-the-art facility in Saraswathy Colony, Pallavaram handles everything from single-copy digital prints to large-scale offset runs. Whether you need visiting cards for your startup, wedding invitations for your family celebration, or GST-compliant bill books for your business — we deliver excellence every time.
              </p>
              <p>
                We proudly serve customers across Pallavaram, Tambaram, Chromepet, Perungalathur, Pammal, Anakaputhur, Chitlapakkam, Medavakkam, Vandalur, Selaiyur, and all of South Chennai with doorstep delivery for orders above ₹2,000.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { num: "36+", label: "Years in Business" },
                { num: "1000+", label: "Happy Customers" },
                { num: "14+", label: "Print Services" },
                { num: "1989", label: "Established" },
              ].map((s) => (
                <div key={s.label} className="navy-gradient p-5 rounded-xl text-center">
                  <div className="font-display text-2xl font-black text-gold-light">{s.num}</div>
                  <div className="text-primary-foreground/70 text-xs font-body mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activePage === "portfolio" && (
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">Our Portfolio</h1>
            <p className="text-muted-foreground font-body mb-10">A showcase of our printing excellence across Chennai.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["📇 Business Cards", "💌 Wedding Cards", "📖 Brochures", "🧾 Bill Books", "📄 Letterheads", "🎨 Screen Printing"].map((item) => (
                <div key={item} className="aspect-square rounded-xl navy-gradient flex items-center justify-center text-center p-6">
                  <div>
                    <div className="text-4xl mb-2">{item.split(" ")[0]}</div>
                    <div className="text-primary-foreground/80 text-sm font-body">{item.split(" ").slice(1).join(" ")}</div>
                    <p className="text-primary-foreground/40 text-xs font-body mt-2">Portfolio photos coming soon</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activePage === "faq" && <FAQSection />}

      {activePage === "contact" && <ContactSection />}

      {isServicePage && <ServicePage serviceId={activePage} setActivePage={setActivePage} />}

      <SiteFooter setActivePage={setActivePage} />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
