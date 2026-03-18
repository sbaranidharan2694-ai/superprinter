import SEOHead from "@/components/SEOHead";
import { HOMEPAGE_FAQ_SCHEMA } from "@/data/seoSchemas";
import HeroSection from "@/components/home/HeroSection";
import TrustBadgesStrip from "@/components/home/TrustBadgesStrip";
import SocialProofBar from "@/components/home/SocialProofBar";
import ProductsSection from "@/components/home/ProductsSection";
import ComparisonTableSection from "@/components/home/ComparisonTableSection";
import WeddingCardsSection from "@/components/home/WeddingCardsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PartnerSection from "@/components/home/PartnerSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import QuoteFormSection from "@/components/home/QuoteFormSection";
import AboutSection from "@/components/home/AboutSection";
import FAQSectionNew from "@/components/home/FAQSectionNew";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => (
  <div className="text-foreground bg-background overflow-x-hidden" style={{ fontFamily: "var(--font-body)" }}>
    <SEOHead
      title="Printing Press Chennai | Wedding Cards, Visiting Cards, Brochures | Super Printers Pallavaram"
      description="Top printing press in Chennai since 1990. Wedding cards, visiting cards, brochures, bill books, letterheads, banners, rubber stamps, T-shirt printing, pamphlets. Fast delivery Pallavaram, Chromepet, Tambaram. Call +91 98401 99878."
      canonical="/"
      keywords="printing press Chennai, printers Pallavaram, wedding cards Chennai, visiting cards Chennai, brochure printing, bill book printing Chennai, banner printing, rubber stamp Chennai, offset printing, pamphlet printing, T shirt printing Chennai, letterhead printing, GST invoice books"
      schemaMarkup={HOMEPAGE_FAQ_SCHEMA}
    />
    <HeroSection />
    <SocialProofBar />
    <ProductsSection />
    <WeddingCardsSection />
    <WhyChooseUsSection />
    <PortfolioSection />
    <HowItWorksSection />
    <PartnerSection />
    <SocialProofSection />
    <QuoteFormSection />
    <AboutSection />
    <FAQSectionNew />
    <CTASection />
    <ContactSection />
  </div>
);

export default Index;
