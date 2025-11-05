import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
