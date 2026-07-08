import { motion } from "framer-motion";
import { FloatingBackground } from "./FloatingBackground";

const verticals = [
  {
    name: "Startup",
    specialties: "Series A–D, First Hire to First Team, then Rapid Scaling",
  },
  {
    name: "SMB",
    specialties: "Growing Teams, Specialized Roles, Cost-Effective Hiring",
  },
  {
    name: "Midmarket",
    specialties: "Scaling Departments, Leadership Hiring, Process Building",
  },
  {
    name: "Enterprise",
    specialties: "Executive Search, Global Talent, Strategic Workforce Planning",
  },
];

const Industries = () => {
  return (
    <section className="py-14" id="who-we-help">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-10 items-start"
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">Company Size</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Who We <span className="text-gradient">Help.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed self-end">
            Whether you're building a team for the first time or looking to scale your current team's efforts, we'll save you the time and hassle of finding the right people across every corner of the SaaS ecosystem, whether you're in the software or service space.
          </p>
        </motion.div>

        {/* Tree diagram */}
        <div className="flex flex-col items-center">
          {/* Root node: SaaS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative z-10"
          >
            <div className="bg-primary text-primary-foreground rounded-2xl px-10 py-5 shadow-lg">
              <span className="font-heading font-bold text-2xl tracking-wide">SaaS</span>
            </div>
          </motion.div>

          {/* Trunk line */}
          <div className="w-px h-10 bg-primary/40" aria-hidden="true" />

          {/* Horizontal connector */}
          <div className="w-full max-w-6xl h-px bg-primary/40" aria-hidden="true" />

          {/* Branches */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-0">
            {verticals.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="relative flex flex-col items-center"
              >
                {/* Branch line down to card */}
                <div className="w-px h-8 bg-primary/40" aria-hidden="true" />
                <motion.div
                  whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.2 } }}
                  className="relative overflow-hidden glass rounded-xl p-5 w-full text-center hover:border-primary/40 transition-colors ambient-glow cursor-pointer"
                >
                  <FloatingBackground />
                  <h3 className="font-heading font-semibold text-base sm:text-lg text-primary mb-1.5">
                    {v.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.specialties}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
