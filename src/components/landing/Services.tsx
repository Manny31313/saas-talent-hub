import { motion } from "framer-motion";
import { Users, Target, BarChart2, UserCog } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Executive Search",
    description: "VP Sales, CRO, CMO, CTO. We headhunt the leaders who define your next growth chapter.",
  },
  {
    icon: Users,
    title: "Revenue Team Hiring",
    description: "AEs, SDRs, CSMs, and RevOps talent embedded in your pipeline within weeks, not months.",
  },
  {
    icon: BarChart2,
    title: "Data Science Roles",
    description: "Data scientists, ML engineers, and analytics leaders who turn raw data into business impact.",
  },
  {
    icon: UserCog,
    title: "People Operations",
    description: "HR, Talent, and People Ops professionals who scale culture and build high-performing teams.",
  },
];

const Services = () => {
  return (
    <section className="py-24" id="services">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-16 items-start"
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">What We Do</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Our <span className="text-gradient">Expertise.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed self-end">
            We discover and deliver proven, quality Tech & SaaS talent across all verticals, markets, and roles.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group glass rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
