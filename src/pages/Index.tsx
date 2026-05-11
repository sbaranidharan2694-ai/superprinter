import SEOHead from "@/components/SEOHead";
import { HOMEPAGE_FAQ_SCHEMA } from "@/data/seoSchemas";
import { LOCAL_BUSINESS_SCHEMA } from "@/data/business";
import HeroSection from "@/components/home/HeroSection";
import SocialProofBar from "@/components/home/SocialProofBar";
import ProductsSection from "@/components/home/ProductsSection";
import WeddingCardsSection from "@/components/home/WeddingCardsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import QuoteFormSection from "@/components/home/QuoteFormSection";
import AboutSection from "@/components/home/AboutSection";
import PartnerSection from "@/components/home/PartnerSection";
import FAQSectionNew from "@/components/home/FAQSectionNew";
import ContactSection from "@/components/home/ContactSection";

/**
 * Homepage section order — re-sequenced after the May 2026 UX audit.
 *
 * Removed from the active layout (files preserved; unmount only):
 *  - WhyChooseUsSection      (6 USPs that duplicated SocialProofBar facts)
 *  - CTASection              (redundant with sticky mobile bar + footer CTA)
 *  - TrustBadgesStrip        (duplicated SocialProofBar)
 *  - ComparisonTableSection  (overlap with WhyChooseUs)
 *
 * Reordered: SocialProofSection (testimonials) now sits BEFORE the quote
 * form, so trust signals arrive before the conversion ask, not after it.
 */
const Index = () => (
  <div className="text-foreground bg-background overflow-x-hidden" style={{ fontFamily: "var(--font-body)" }}>
    <SEOHead
      title="Printing Press Chennai | Wedding Cards, Visiting Cards, Brochures | Super Printers Pallavaram"
      description="Top printing press in Chennai since 1990. Wedding cards, visiting cards, brochures, bill books, letterheads, banners, rubber stamps, T-shirt printing, pamphlets. Fast delivery Pallavaram, Chromepet, Tambaram. Call +91 98401 99878."
      canonical="/"
      keywords="printing press Chennai, printers Pallavaram, wedding cards Chennai, visiting cards Chennai, brochure printing, bill book printing Chennai, banner printing, rubber stamp Chennai, offset printing, pamphlet printing, T shirt printing Chennai, letterhead printing, GST invoice books"
      schemaMarkup={[HOMEPAGE_FAQ_SCHEMA, LOCAL_BUSINESS_SCHEMA]}
    />
    <HeroSection />
    <SocialProofBar />
    <ProductsSection />
    <WeddingCardsSection />
    <PortfolioSection />
    <HowItWorksSection />
    <SocialProofSection />
    <QuoteFormSection />
    <AboutSection />
    <PartnerSection />
    <FAQSectionNew />
    <ContactSection />
  </div>
);

export default Index;
