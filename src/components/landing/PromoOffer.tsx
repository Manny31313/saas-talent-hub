import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CALENDLY_URL = "https://calendly.com/saasrecruitingco/schedule";

const PromoOffer = () => {
  return (
    <section className="pt-4 pb-16">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-primary/10 bg-primary/[0.03] p-12 sm:p-16 text-center overflow-hidden shadow-[0_0_80px_-30px_hsl(var(--primary)/0.12)]"
        >
          <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-80" />
          <div className="relative z-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
              No upfront fees. <span className="text-gradient">Only pay for results.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              We're so confident in our ability to deliver quality talent that you only pay when we make a successful placement. No contracts, no commitments, just a chance to earn your business. Let us prove what we can do.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Book a Call
                  <ArrowRight className="w-5 h-5 ml-1" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base px-8 py-6" asChild>
                <Link to="/contact">
                <Mail className="w-5 h-5 mr-2" />
                  Contact Us Now
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoOffer;
