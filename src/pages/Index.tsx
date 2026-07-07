import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PromoOffer from "@/components/landing/PromoOffer";
import Stats from "@/components/landing/Stats";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import LogoMarquee from "@/components/landing/LogoMarquee";
import Industries from "@/components/landing/Industries";
import WhyChoose from "@/components/landing/WhyChoose";
import Testimonials from "@/components/landing/Testimonials";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6">
        <div className="container mx-auto rounded-3xl border-2 border-primary/60 bg-primary text-primary-foreground overflow-hidden shadow-2xl shadow-primary/20">
          <Hero />
          <PromoOffer />
        </div>
      </div>
      <LogoMarquee />
      <Stats />
      <Services />
      <Process />
      <Industries />
      <WhyChoose />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
