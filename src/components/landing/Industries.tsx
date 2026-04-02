import { motion } from "framer-motion";

const industries = [
  "B2B SaaS",
  "Fintech",
  "HealthTech",
  "DevTools & Infrastructure",
  "MarTech & AdTech",
  "Cybersecurity",
  "HR Tech",
  "E-Commerce SaaS",
];

const Industries = () => {
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
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">Industries</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Who We <span className="text-gradient">Help.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed self-end">
            Whether you're building a team for the first time or looking to scale your current teams efforts, we'll save you the time and hassle to make sure you find the right people.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
            >
              <span className="font-heading font-semibold text-sm sm:text-base">{industry}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
