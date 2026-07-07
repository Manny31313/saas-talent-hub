import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const BottomCTA = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground border-t-2 border-primary/40">
      <div className="absolute inset-0 grid-bg-dark pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/40 to-primary/70 pointer-events-none" />
      <div className="container relative z-10 px-6 py-20 sm:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Ready to start scaling, not just chasing?
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a strategy call. We'll map your target profile, alignment benchmarks, and the fastest path to your next critical hire.
          </p>
          <Button
            size="lg"
            className="text-base px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-lg"
            asChild
          >
            <a href="#contact">
              Book a Strategy Call
              <ArrowUp className="w-5 h-5 ml-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BottomCTA;