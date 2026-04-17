import { motion } from "framer-motion";

const verticals = [
  {
    name: "Cybersecurity",
    specialties: "Identity Management, Threat Intel, Zero-Trust, SOC",
  },
  {
    name: "Cloud & DevOps",
    specialties: "Infrastructure-as-Code, SRE, Serverless, Cloud Migration",
  },
  {
    name: "Advertising & MarTech",
    specialties: "Programmatic, Attribution, Ad Operations, Digital Agencies",
  },
  {
    name: "Business Intelligence (BI)",
    specialties: "Data Analytics, Market Research, Data Visualization",
  },
  {
    name: "Consulting",
    specialties: "Digital Transformation, Strategy, Management Consulting",
  },
  {
    name: "Finance",
    specialties: "Banking, Payments, DeFi, Crypto, WealthTech",
  },
  {
    name: "Retail & E-commerce",
    specialties: "Omnichannel, Logistics, DTC, Supply Chain",
  },
  {
    name: "CRE (Commercial Real Estate)",
    specialties: "PropTech, Smart Buildings, Construction Tech",
  },
  {
    name: "Healthcare & BioTech",
    specialties: "Digital Health, Clinical Tech, Life Sciences, Genomics",
  },
  {
    name: "Civic (GovTech)",
    specialties: "Smart Cities, Public Safety, E-Governance, Voting Tech",
  },
  {
    name: "EdTech",
    specialties: "K-12, Higher Ed, Corporate Learning, LMS",
  },
  {
    name: "Hospitality",
    specialties: "Restaurant Tech, POS Systems, Entertainment & Leisure",
  },
  {
    name: "RevOps & CRM",
    specialties: "Salesforce/HubSpot Architecture, Sales Funnel Automation",
  },
  {
    name: "And Much More!",
    specialties: "If your space isn't listed here, chances are we still cover it, let's talk.",
  },
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
          <p className="text-lg text-muted-foreground leading-relaxed self-end">
            Whether you're building a team for the first time or looking to scale your current team's efforts, we'll save you the time and hassle of finding the right people across every corner of the SaaS ecosystem — whether you're in the software or service space.
          </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-0">
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
                <div className="glass rounded-xl p-5 w-full text-center hover:border-primary/40 transition-colors">
                  <h3 className="font-heading font-semibold text-base sm:text-lg text-primary mb-1.5">
                    {v.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.specialties}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
