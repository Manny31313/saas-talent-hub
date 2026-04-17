import { motion } from "framer-motion";
import heroImage from "@/assets/hero-team.jpg";


const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden pt-24 pb-8">
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              We discover & deliver{" "}
              <span className="text-gradient">proven Tech & SaaS talent.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Across all verticals, markets, and roles, we roll up our sleeves to
              introduce you to the best candidates so you can hire, retain, and grow.
            </p>
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
