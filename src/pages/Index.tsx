import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ServicesRows from "@/components/home/ServicesRows";
import ParallaxDivider from "@/components/home/ParallaxDivider";
import AboutSection from "@/components/home/AboutSection";
import HowItWorks from "@/components/home/HowItWorks";
import GallerySection from "@/components/home/GallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesRows />
      <ParallaxDivider />
      <AboutSection />
      <HowItWorks />
      <GallerySection />
      <TestimonialsSection />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
};

export default Index;