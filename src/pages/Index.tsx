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
      <div className="border-2 border-primary/40 rounded-none overflow-hidden">
        <div className="relative bg-primary/10 backdrop-blur-xl">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_70%)]" />
          <div className="relative">
            <Hero />
          </div>
        </div>
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
