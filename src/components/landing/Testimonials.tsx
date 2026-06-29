import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import sarahImg from "@/assets/testimonial-sarah.jpg";
import jamesImg from "@/assets/testimonial-james.jpg";
import priyaImg from "@/assets/testimonial-priya.jpg";

const testimonials = [
  {
    quote: "They filled our entire AE team in under 30 days. Every hire has exceeded quota. Unreal.",
    name: "Sarah Chen",
    title: "VP Sales, CloudStack",
    image: sarahImg,
  },
  {
    quote: "Finally, a recruiter that actually understands SaaS sales motions and what 'good' looks like.",
    name: "James Park",
    title: "HR Director, DataLoop",
    image: jamesImg,
  },
  {
    quote: "Our Series B demanded fast, quality hires. Their recruiting team delivered on both.",
    name: "Priya Mehta",
    title: "COO, Revenix",
    image: priyaImg,
  },
];

const Testimonials = () => {
  return (
    <section className="py-14 bg-secondary/30" id="testimonials">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Trusted by <span className="text-gradient">Tech & SaaS Leaders</span>
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
              className="relative rounded-xl overflow-hidden border border-border min-h-[380px] flex flex-col justify-end p-6 group"
            >
              <img
                src={t.image}
                alt={`${t.name} headshot`}
                loading="lazy"
                width={768}
                height={768}
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
              <div className="relative z-10 flex flex-col">
                <Quote className="w-8 h-8 text-primary/60 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 font-medium">"{t.quote}"</p>
                <div>
                  <div className="font-heading font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
