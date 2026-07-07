import { motion } from "framer-motion";
import { Users, Target, BarChart2, UserCog, Sparkles } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Executive Search",
    description: "VP Sales, CRO, CMO, CTO. We headhunt the leaders who define your next growth chapter.",
  },
  {
    icon: Users,
    title: "GTM Hiring",
    description: "AEs, SDRs, and CSMs embedded in your pipeline within weeks, not months.",
  },
  {
    icon: BarChart2,
    title: "RevOps",
    description: "RevOps leaders and solution engineers who architect the systems, reporting, and forecasting that scale revenue.",
  },
  {
    icon: BarChart2,
    title: "DevOps",
    description: "Data engineers, analysts, and ML talent who turn raw data into reliable business insight.",
  },
  {
    icon: UserCog,
    title: "People Operations",
    description: "HR, Talent, and People Ops professionals who scale culture and build high-performing teams.",
  },
  {
    icon: Sparkles,
    title: "Other",
    description: "Don't see the role you're hiring for? Chances are we still cover it - contact us to learn more.",
  },
];

const Services = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="py-14" id="services">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-10 items-start"
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">What We Do</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Our <span className="text-gradient">Expertise.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed self-end">
            Our team is backed by advisors who have first-hand experience in the roles we hire for, ensuring you finally found a recruiting team that understands the technical nuances necessary to save you time, resources, and protect your ROI.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onMouseMove={handleMouseMove}
              className="group relative overflow-hidden rounded-xl p-6 bg-card border border-border transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/15 hover:border-primary/40"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.12), transparent 60%)",
                }}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
