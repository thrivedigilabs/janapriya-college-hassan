import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdmissionsHero from "@/components/admissions/AdmissionsHero";
import WhyChooseSection from "@/components/admissions/WhyChooseSection";
import ProcessTimeline from "@/components/admissions/ProcessTimeline";
import DocumentsFAQ from "@/components/admissions/DocumentsFAQ";

const Admissions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <AdmissionsHero />
        <WhyChooseSection />
        <ProcessTimeline />
        <DocumentsFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
