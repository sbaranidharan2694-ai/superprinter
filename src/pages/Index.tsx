import SEOHead from "@/components/SEOHead";
import Hero from "@/components/home/Hero";
import OrderFlow from "@/components/home/OrderFlow";
import ServiceTicker from "@/components/home/ServiceTicker";
import Features from "@/components/home/Features";
import ServiceGrid from "@/components/home/ServiceGrid";
import TrustedClients from "@/components/home/TrustedClients";
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
      title="Super Printers Pallavaram | Best Printing Press in Chennai Since 1990"
      description="Chennai's most trusted printing press since 1990. Visiting cards, wedding invitations, bill books, brochures, banners & more. Fast delivery. Call +91 98401 99878."
      canonical="/"
      keywords="printers in chennai, printing press chennai, printing services chennai, offset printing chennai, visiting card printing chennai, banner printing chennai, super printers pallavaram, bulk printing chennai, digital printing chennai, printing press Chennai, printing shop Pallavaram, commercial printing Chennai, GST bill book printing, pamphlet printing Chennai, visiting card printing Pallavaram, printing near Pallavaram railway station, wedding card printing Chennai"
      schemaMarkup={FAQ_SCHEMA}
    />
    <main>
      <Hero />
      <OrderFlow />
      <ServiceTicker />
      <Features />
      <ServiceGrid />
      <TrustedClients />
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
