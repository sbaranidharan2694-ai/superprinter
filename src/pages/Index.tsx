import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import StatsBarSection from "@/components/home/StatsBarSection";
import ServicesSection from "@/components/home/ServicesSection";
import WeddingCardsSection from "@/components/home/WeddingCardsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import QuoteFormSection from "@/components/home/QuoteFormSection";
import AboutSection from "@/components/home/AboutSection";
import FAQSectionNew from "@/components/home/FAQSectionNew";
import ContactSection from "@/components/home/ContactSection";

const Index = () => (
  <div className="font-body text-foreground bg-background overflow-x-hidden">
    <SEOHead
      title="Super Printers Pallavaram Chennai | Business Cards, Brochures, Wedding Cards | Est. 1990"
      description="Best printing press in Pallavaram, Chennai since 1990. Business cards from ₹149, brochures, wedding cards, bill books, letterheads. 48-hour delivery. Call +91 98401 99878."
      canonical="/"
    />
    <HeroSection />
    <StatsBarSection />
    <ServicesSection />
    <WeddingCardsSection />
    <HowItWorksSection />
    <SocialProofSection />
    <PortfolioSection />
    <QuoteFormSection />
    <AboutSection />
    <FAQSectionNew />
    <ContactSection />
  </div>
);

export default Index;
