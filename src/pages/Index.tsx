import SEOHead from "@/components/SEOHead";
import Hero from "@/components/home/Hero";
import ServiceTicker from "@/components/home/ServiceTicker";
import Features from "@/components/home/Features";
import ServiceGrid from "@/components/home/ServiceGrid";
import PricingTable from "@/components/home/PricingTable";
import WhyUs from "@/components/home/WhyUs";
import GoldCTA from "@/components/home/GoldCTA";
import Testimonials from "@/components/home/Testimonials";
import GoogleReviews from "@/components/home/GoogleReviews";
import FAQSection from "@/components/home/FAQSection";
import AreasServed from "@/components/home/AreasServed";
import ContactSection from "@/components/home/ContactSection";
import { FAQ_SCHEMA } from "@/data/business";

const Index = () => (
  <>
    <SEOHead
      title="Super Printers | Best Printing Press in Chennai Since 1990"
      description="Super Printers in Pallavaram, Chennai offers offset printing, visiting cards, banners, brochures, bill books, rubber stamps & more. Call now!"
      canonical="/"
      keywords="printers in chennai, printing press chennai, printing services chennai, offset printing chennai, visiting card printing chennai, banner printing chennai, super printers pallavaram, bulk printing chennai, digital printing chennai, printing press Chennai, printing shop Pallavaram, commercial printing Chennai, GST bill book printing, pamphlet printing Chennai, printing near Pallavaram railway station"
      schemaMarkup={FAQ_SCHEMA}
    />
    <main>
      <Hero />
      <ServiceTicker />
      <Features />
      <ServiceGrid />
      <PricingTable />
      <WhyUs />
      <GoldCTA />
      <Testimonials />
      <GoogleReviews />
      <FAQSection />
      <AreasServed />
      <ContactSection />
    </main>
  </>
);

export default Index;
