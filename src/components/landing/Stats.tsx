import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Placements Made" },
  { value: "96%", label: "Retention Rate (12mo)" },
  { value: "18", label: "Average Days to Hire" },
  { value: "200+", label: "SaaS Partners" },
];

const Stats = () => {
  return (
    <section className="py-20 border-y border-border">
      <div className="container px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-heading text-4xl sm:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
