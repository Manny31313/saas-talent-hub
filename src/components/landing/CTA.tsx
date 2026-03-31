import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-primary/20 bg-primary/5 p-12 sm:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
          <div className="relative z-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Ready to hire your next <span className="text-gradient">A-player</span>?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              A network of SaaS professionals & recruiting veterans ready to help
              you hire quality talent, fast. Let's level up your team together.
            </p>
            <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
