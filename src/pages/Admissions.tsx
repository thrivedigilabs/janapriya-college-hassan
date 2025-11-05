import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Admissions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-center mb-8">
            Admissions
          </h1>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto text-lg">
            Secure Your Future in the Healthcare Industry
          </p>
          {/* Content will be added in future iterations */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
