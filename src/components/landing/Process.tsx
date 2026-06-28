import { motion } from "framer-motion";
import { Map, Radio, Brain, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Map,
    number: "01",
    title: "Mapping & Market Intelligence",
    description:
      "We map out the entire SaaS landscape to identify elite talent. We pinpoint the top performers currently driving results across the talent & competitive landscape, ensuring we have a pulse on the best professionals in the market before a need even arises. We know the right talent pools to tap, the qualifying questions to ask, and the nuances to identify.",
  },
  {
    icon: Radio,
    number: "02",
    title: "Multi-Channel Engagement",
    description:
      "The highest-impact talent doesn't always apply to active job postings. We utilize a sophisticated multi-channel outbound infrastructure to meet these high-performers where their at, leveraging our resources in addition to personalized, high-touch outreach that cuts through the noise of a crowded inbox.",
  },
  {
    icon: Brain,
    number: "03",
    title: "Expert Vetting",
    description:
      "We vet every candidate specifically for your unique demands. While we use modern tools to assist our research, we focus on identifying the human agility and grit required to thrive in high-growth environments and the traits a resume alone can't show.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Benchmarking & Data Visualization",
    description:
      "We provide clear, interactive rankings and candidate benchmarking so you can see exactly how talent compares to current market standards. You get the easy-to-digest, honest insights you need to make high-confidence hiring decisions.",
  },
];

const Process = () => {
  return (
    <section className="py-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-16 items-start"
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">How We Do It</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Our <span className="text-gradient">Process.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed self-end">
            A proven, four-phase framework that delivers A-players fast, powered by market intelligence, multi-channel outreach, AI vetting, and data visualization.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass rounded-xl p-8 flex gap-6 hover:border-primary/30 transition-colors"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="block text-center mt-2 text-xs font-heading font-bold text-muted-foreground">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
