import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Placements Made" },
  { value: "96%", label: "Retention Rate (12mo)" },
  { value: "18", label: "Average Days to Hire" },
  { value: "200+", label: "SaaS Partners" },
];

const Stats = () => {
  return (
    <section className="py-16">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8"
        >
          <div className="shrink-0">
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Past</p>
            <p className="font-heading text-2xl font-bold text-gradient">Success</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1 w-full">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
