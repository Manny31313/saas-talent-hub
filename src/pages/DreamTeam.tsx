import Navbar from "@/components/landing/Navbar";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const DreamTeam = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default DreamTeam;
