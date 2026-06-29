import { motion } from "framer-motion";
import { Compass, Send, Filter, Trophy, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Compass,
    day: "Day 1",
    title: "The Blueprint & Immediate Market Mapping",
    body: (
      <p>
        We kick off with a sharp strategy session to lock in your ideal candidate profile. Tell us exactly who you want to hire—whether it's a VP of Marketing or a Senior ML Engineer. We don't guess; we immediately begin mapping the entire current SaaS landscape from scratch to target your exact competitors.
      </p>
    ),
  },
  {
    icon: Send,
    day: "Day 2",
    title: "Tailored, Up-to-Date List Delivery & Dual-Channel Launch",
    body: (
      <ul className="space-y-3 list-none">
        <li>
          <span className="font-semibold text-foreground">Your Immediate Deliverable:</span>{" "}
          Within 24 hours, we deliver a tailored, up-to-date market map directly to you. This gives you instant visibility into the exact elite talent pool before we even hop on a call with them.
        </li>
        <li>
          <span className="font-semibold text-foreground">The Dual-Channel Engine:</span>{" "}
          Simultaneously, we deploy our outbound infrastructure to hunt down the passive high-performers on your list, while opening a targeted inbound funnel via job postings to capture hidden heavy-hitters who might not have been on our initial radar.
        </li>
      </ul>
    ),
  },
  {
    icon: Filter,
    day: "Week 1",
    title: "Rigorous Vetting & Pipeline Filtering",
    body: (
      <p>
        As responses flood in from both channels, our vetting engine takes over. While we utilize modern AI-driven tools to assist our efforts, our core focus is filtering out the fluff. We deeply screen candidates for real technical grit, role-specific personality traits, and the psychological fit required to thrive under the pressure of a high-growth ecosystem—keeping you updated in real-time via Slack or Email as we aggressively refine the list.
      </p>
    ),
  },
  {
    icon: Trophy,
    day: "Week 2",
    title: "Final Revised Shortlist & Hand-Off",
    body: (
      <p>
        The culmination of the sprint. We deliver a highly concentrated, benchmarked final pipeline of elite talent who are thoroughly vetted, highly interested, and ready to interview. You receive the clean, easy-to-digest, honest insights needed to make high-confidence, rapid hiring decisions.
      </p>
    ),
  },
  {
    icon: HeartHandshake,
    day: "Post-Hire",
    title: "30-Day Onboarding Check-In & Retention Insurance",
    body: (
      <p>
        Our job doesn't end when the offer is signed. We operate on a standard Net 30 structure, and within those first 30 days, we conduct dedicated alignment check-ins with both you and your new hire. This ensures seamless integration into your high-growth culture, uncovers early performance bottlenecks, and protects your hiring ROI from day one.
      </p>
    ),
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

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connector line */}
          <div
            aria-hidden
            className="absolute left-6 sm:left-8 top-3 bottom-3 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent"
          />

          <ol className="space-y-8">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative pl-20 sm:pl-24 group"
              >
                {/* Node */}
                <div className="absolute left-0 top-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center shadow-sm group-hover:border-primary transition-colors">
                      <step.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-heading font-bold text-primary bg-card px-2 py-0.5 rounded-full border border-primary/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="glass rounded-xl p-6 sm:p-7 group-hover:border-primary/40 transition-colors">
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">{step.day}</p>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold mb-3">{step.title}</h3>
                  <div className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.body}</div>
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
