import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, Send, Filter, Trophy, HeartHandshake } from "lucide-react";
import { useRef } from "react";
import { FloatingBackground } from "./FloatingBackground";

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
    body: "We build out a tailored, freshly updated list of active and passive candidates that fit your profile, validating fit before you ever see a resume.",
  },
  {
    icon: Filter,
    day: "Week 1–2",
    title: "Thorough Screening",
    body: "Get qualified candidates rigorously evaluated for technical skills, psychological fit, and readiness to ensure your hiring talent that aligns with your expectations and fits into your dynamic team environment.",
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
    title: "30 Day Check-In",
    body: "We don't just fill a role and leave. We check in with you and your new hire to confirm alignment and deliver actionable insights that refine future growth plans, compensation strategies, and the entire recruitment process for future hires.",
  },
];

const hoverVariants = {
  hover: { scale: 1.03, y: -6, transition: { duration: 0.2 } },
};

const circleHoverVariants = {
  hover: { scale: 1.08, y: -4, transition: { duration: 0.2 } },
};

const Process = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-14">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">How We Do It</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Process.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A high-velocity, 14-day sprint built on total market transparency and elite vetting. We don't recycle stale databases - we build fresh maps for your exact role, every single time.
          </p>
        </motion.div>

        {/* Vertical timeline */}
        <div ref={timelineRef} className="relative max-w-2xl mx-auto">
          <div aria-hidden className="absolute left-6 top-3 bottom-3 w-px bg-primary/10" />
          <motion.div
            aria-hidden
            style={{ scaleY: lineScaleY, transformOrigin: "top" }}
            className="absolute left-6 top-3 bottom-3 w-px bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20"
          />
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
                whileHover="hover"
                className="relative pl-20 group"
              >
                <motion.div
                  variants={circleHoverVariants}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="absolute left-0 top-0 w-12 h-12 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center ambient-glow z-10"
                >
                  <step.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <motion.div
                  variants={hoverVariants}
                  className="glass rounded-xl p-5 ambient-glow cursor-pointer transition-colors relative overflow-hidden text-center"
                >
                  <FloatingBackground />
                  <p className="relative z-10 text-xs uppercase tracking-widest text-primary font-semibold mb-1">{step.day}</p>
                  <h3 className="relative z-10 font-heading text-base font-semibold mb-2">{step.title}</h3>
                  <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </motion.div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Process;
