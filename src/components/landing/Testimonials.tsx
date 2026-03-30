import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They filled our entire AE team in under 30 days. Every hire has exceeded quota. Unreal.",
    name: "Sarah Chen",
    title: "VP Sales, CloudStack",
  },
  {
    quote: "Finally, a recruiter that actually understands SaaS sales motions and what 'good' looks like.",
    name: "James Park",
    title: "CEO, DataLoop",
  },
  {
    quote: "Our Series B demanded fast, quality hires. The SaaS Recruiting Co delivered on both.",
    name: "Priya Mehta",
    title: "COO, Revenix",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30" id="testimonials">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Trusted by <span className="text-gradient">SaaS Leaders</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass rounded-xl p-6 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-foreground/90 leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div>
                <div className="font-heading font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
