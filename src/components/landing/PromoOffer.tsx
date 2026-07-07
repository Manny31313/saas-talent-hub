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
          className="relative rounded-2xl border border-primary/40 bg-primary p-12 sm:p-16 text-center overflow-hidden text-primary-foreground"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90" />
          <div className="relative z-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6 text-primary-foreground">
              No upfront fees. <span className="text-white/95 italic">Only pay for results.</span>
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
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
