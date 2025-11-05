import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IntroSection from "@/components/about/IntroSection";
import LeadershipSection from "@/components/about/LeadershipSection";
import FacultySection from "@/components/about/FacultySection";
import InfrastructureSection from "@/components/about/InfrastructureSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-center mb-8">
            About Janapriya Group
          </h1>
        </div>
        <IntroSection />
        <LeadershipSection />
        <FacultySection />
        <InfrastructureSection />
        <CoreValuesSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
