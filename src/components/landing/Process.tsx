import { motion } from "framer-motion";
import { Search, ClipboardCheck, MessageSquare, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description:
      "We dig deep into your company culture, growth stage, and hiring needs to build a razor-sharp candidate profile.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Search & Sourcing",
    description:
      "Our SaaS-specialized network activates immediately — passive candidates, competitor mapping, and curated outreach.",
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "Interview & Vetting",
    description:
      "We pre-screen every candidate for culture fit, technical ability, and revenue track record before they reach you.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Placement & Support",
    description:
      "From offer negotiation to onboarding check-ins, we stay involved to ensure long-term retention and success.",
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
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">How We Do It?</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Our <span className="text-gradient">Process.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed self-end">
            A proven, repeatable framework that delivers A-players fast.
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
