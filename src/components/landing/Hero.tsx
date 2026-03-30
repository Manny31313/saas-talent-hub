import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-team.jpg";

const CALENDLY_URL = "https://calendly.com";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              We find the{" "}
              <span className="text-gradient">talent</span> that scales your SaaS.
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              From SDRs to C-Suite, we connect high-growth SaaS companies with
              the revenue leaders and builders who move the needle.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Book a Discovery Call
                  <ArrowRight className="w-5 h-5 ml-1" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base px-8 py-6" asChild>
                <Link to="/open-roles">View Open Roles</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
              <img
                src={heroImage}
                alt="Professional recruiting team collaborating in a modern office"
                width={1024}
                height={768}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
