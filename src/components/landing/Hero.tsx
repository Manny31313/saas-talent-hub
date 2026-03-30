import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/3 blur-3xl" />

      <div className="container relative z-10 px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">SaaS-Specialist Recruiters</span>
          </motion.div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            We find the <span className="text-gradient">talent</span> that
            <br />scales your SaaS.
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            From SDRs to C-Suite, we connect high-growth SaaS companies with
            the revenue leaders and builders who move the needle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              Book a Discovery Call
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6" asChild>
              <Link to="/open-roles">View Open Roles</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
