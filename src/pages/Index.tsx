import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import MarqueeProductStrip from "@/components/home/MarqueeProductStrip";
import ProductVideoSection from "@/components/home/ProductVideoSection";
import CredibilityStrip from "@/components/home/CredibilityStrip";
import StatsBarSection from "@/components/home/StatsBarSection";
import ProductsSection from "@/components/home/ProductsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import BenefitsListSection from "@/components/home/BenefitsListSection";
import ProductBenefitsSection from "@/components/home/ProductBenefitsSection";
import WeddingCardsSection from "@/components/home/WeddingCardsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import FinishesSection from "@/components/home/FinishesSection";
import CTASection from "@/components/home/CTASection";
import QuoteFormSection from "@/components/home/QuoteFormSection";
import AboutSection from "@/components/home/AboutSection";
import FAQSectionNew from "@/components/home/FAQSectionNew";
import ContactSection from "@/components/home/ContactSection";

const Index = () => (
  <div className="font-body text-foreground bg-background overflow-x-hidden">
    <SEOHead
      title="Super Printers Pallavaram Chennai | Business Cards, Wedding Cards, Brochures | Est. 1990"
      description="Chennai's premier printing studio since 1990. Business cards from ₹149, wedding cards from ₹8, brochures, letterheads. 48-hour delivery. Trusted by Wipro & TTK. Pallavaram."
      canonical="/"
    />
    <HeroSection />
    <MarqueeProductStrip />
    <ProductVideoSection />
    <CredibilityStrip />
    <StatsBarSection />
    <ProductsSection />
    <WhyChooseUsSection />
    <BenefitsListSection />
    <ProductBenefitsSection />
    <WeddingCardsSection />
    <HowItWorksSection />
    <SocialProofSection />
    <PortfolioSection />
    <FinishesSection />
    <CTASection />
    <QuoteFormSection />
    <AboutSection />
    <FAQSectionNew />
    <ContactSection />
  </div>
);

export default Index;
