import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PromoOffer from "@/components/landing/PromoOffer";
import OpportunityCTA from "@/components/landing/OpportunityCTA";
import Stats from "@/components/landing/Stats";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import Industries from "@/components/landing/Industries";
import Testimonials from "@/components/landing/Testimonials";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PromoOffer />
      <OpportunityCTA />
      <Stats />
      <Services />
      <Process />
      <Industries />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
