import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import InstitutionCards from "@/components/home/InstitutionCards";
import HighlightsSection from "@/components/home/HighlightsSection";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ChairmanMessage from "@/components/home/ChairmanMessage";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <InstitutionCards />
        <HighlightsSection />
        <VisionMissionSection />
        <TestimonialsSection />
        <ChairmanMessage />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
