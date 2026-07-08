import { motion } from "framer-motion";
import { Rocket, Target, Workflow, HeartHandshake } from "lucide-react";
import { FloatingBackground } from "./FloatingBackground";

const pillars = [
  {
    icon: Rocket,
    title: "High Growth Expertise",
    body: "We recruit for revenue talent across high-growth tech companies, giving us an edge to identify top talent with relevant skills to thrive in a fast-paced environment.",
  },
  {
    icon: Target,
    title: "Results-Driven Recruitment",
    body: "Our hires have helped startups achieve key revenue goals, proving our ability to align exceptional candidates with each crucial phase of growth.",
  },
  {
    icon: Workflow,
    title: "High-Touch & Recruiting Management Process",
    body: "We assess role needs, culture fit, and candidate versatility, and handle the whole recruiting process from job description to final offer for a seamless experience.",
  },
  {
    icon: HeartHandshake,
    title: "Human-Centered Approach",
    body: "We don't just fill roles, we invest in your success by delivering data-driven recruiting insights and recruitment strategies to help you refine your talent strategy as you expand.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-14">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 max-w-3xl mx-auto"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">Why Us</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">
            Why High-Growth Tech Companies Trust <span className="text-gradient">The SaaS Recruiting Co.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.04, y: -8, transition: { duration: 0.2 } }}
              className="glass rounded-xl p-6 border border-border hover:border-primary/30 transition-colors ambient-glow cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-base font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;