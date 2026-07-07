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
      <div className="relative overflow-hidden rounded-2xl border-2 border-[hsl(var(--hero-border))] bg-[hsl(var(--hero-deep))] mx-4 sm:mx-6 lg:mx-8 mt-4 sm:mt-6 lg:mt-8">
        <div className="absolute inset-0 bg-[hsl(var(--hero-glass-tint))] backdrop-blur-[12px] pointer-events-none" />
        <div className="relative z-10">
          <Navbar dark />
          <Hero />
        </div>
      </div>
      <PromoOffer />
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
