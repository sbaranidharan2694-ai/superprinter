import SEOHead from "@/components/SEOHead";
import { HOMEPAGE_FAQ_SCHEMA, HOMEPAGE_REVIEWS_SCHEMA, SPEAKABLE_SCHEMA } from "@/data/seoSchemas";
import { FOUNDER_PERSON_SCHEMA } from "@/data/business";
import HeroSection from "@/components/home/HeroSection";
import SocialProofBar from "@/components/home/SocialProofBar";
import ProductsSection from "@/components/home/ProductsSection";
import WeddingCardsSection from "@/components/home/WeddingCardsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import FeaturedCraftSection from "@/components/home/FeaturedCraftSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import QuoteFormSection from "@/components/home/QuoteFormSection";
import AboutSection from "@/components/home/AboutSection";
import PartnerSection from "@/components/home/PartnerSection";
import FAQSectionNew from "@/components/home/FAQSectionNew";
import ContactSection from "@/components/home/ContactSection";
import ChennaiAreasSection from "@/components/home/ChennaiAreasSection";

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
      title="Printing Press in Chennai | Wedding & Visiting Cards"
      description="Pallavaram printing press since 1990. Wedding cards from ₹5, visiting cards, brochures, banners, bill books. Free proof, ready in 24 hours."
      canonical="/"
      keywords="printing press Chennai, printers Pallavaram, wedding cards Chennai, visiting cards Chennai, brochure printing Chennai"
      schemaMarkup={[HOMEPAGE_FAQ_SCHEMA, FOUNDER_PERSON_SCHEMA, SPEAKABLE_SCHEMA, ...HOMEPAGE_REVIEWS_SCHEMA]}
    />
    <HeroSection />
    <SocialProofBar />
    <ProductsSection />
    <WeddingCardsSection />
    <PortfolioSection />
    <FeaturedCraftSection />
    <HowItWorksSection />
    <SocialProofSection />
    <QuoteFormSection />
    <AboutSection />
    <PartnerSection />
    <FAQSectionNew />
    <ChennaiAreasSection />
    <ContactSection />
  </div>
);

export default Index;
