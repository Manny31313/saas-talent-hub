import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CALENDLY_URL = "https://calendly.com/saasrecruitingco/schedule";

const PromoOffer = () => {
  return (
    <section className="pt-0 pb-0">
      <div className="px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-primary text-primary-foreground p-12 sm:p-16 text-center overflow-hidden border-t-2 border-primary/30"
        >
          <div className="absolute inset-0 grid-bg-dark opacity-60 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6 text-white">
              No upfront fees. <span className="text-white/90">Only pay for results.</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              We're so confident in our ability to deliver quality talent that you only pay when we make a successful placement. No contracts, no commitments, just a chance to earn your business. Let us prove what we can do.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8 py-6 bg-white text-primary hover:bg-white/90" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Book a Call
                  <ArrowRight className="w-5 h-5 ml-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white" asChild>
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
