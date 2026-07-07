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
    <div className="relative min-h-screen">
      <Navbar />

      {/* Ambient glow limited to the top of the page, ending just above the logo marquee */}
      <div className="relative">
        <div
          className="absolute inset-0 -z-10"
          style={{ backgroundImage: "var(--gradient-page)" }}
        />
        <Hero />
        <PromoOffer />
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
