import { motion } from "framer-motion";
import { Compass, Send, Filter, Trophy, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Compass,
    day: "Within 24 hours",
    title: "Discovery & Strategy",
    body: "Work directly with a specialized recruiter to capture your ideal candidate profile, culture, and goals for one or multiple critical roles.",
  },
  {
    icon: Send,
    day: "Within 48 hours",
    title: "Sourcing Top Talent",
    body: "Access a curated list of active and passive candidates, from Sales Directors to Marketing Managers, to validate fit.",
  },
  {
    icon: Filter,
    day: "Week 1–2",
    title: "Thorough Screening",
    body: "Get qualified candidates rigorously evaluated for technical skills, cultural fit, and readiness to thrive in a dynamic team environment.",
  },
  {
    icon: Trophy,
    day: "Week 2–3",
    title: "Collaborative Hiring Process",
    body: "Stay informed via Slack or email as we coordinate interviews, gather feedback, and track pipeline activity.",
  },
  {
    icon: HeartHandshake,
    day: "Post-Hire",
    title: "Check-In",
    body: "Receive actionable insights to refine future growth plans, compensation strategies, and the entire recruitment process for future hires.",
  },
];

const Process = () => {
  return (
    <section className="py-14">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-start"
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">How We Do It</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Our <span className="text-gradient">Process.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed self-end">
            A high-velocity, 14-day sprint built on total market transparency and elite vetting. We don't recycle stale databases—we build fresh maps for your exact role, every single time.
          </p>
        </motion.div>

        {/* Horizontal timeline (lg+) */}
        <div className="hidden lg:block relative">
          <div aria-hidden className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <ol className="relative grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center shadow-sm group-hover:border-primary transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-widest text-primary font-semibold">{step.day}</p>
                <h3 className="font-heading text-base font-semibold mt-1 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Vertical timeline (mobile) */}
        <div className="lg:hidden relative max-w-2xl mx-auto">
          <div aria-hidden className="absolute left-6 top-3 bottom-3 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="relative pl-20 group"
              >
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="glass rounded-xl p-5">
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">{step.day}</p>
                  <h3 className="font-heading text-base font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Process;
