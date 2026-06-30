// Logos sourced from vectorlogo.zone (ar21 variants include both icon + wordmark)
const logos = [
  { name: "Stripe", src: "https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg" },
  { name: "Notion", src: "https://www.vectorlogo.zone/logos/notion/notion-ar21.svg" },
  { name: "Slack", src: "https://www.vectorlogo.zone/logos/slack/slack-ar21.svg" },
  { name: "Figma", src: "https://www.vectorlogo.zone/logos/figma/figma-ar21.svg" },
  { name: "Vercel", src: "https://www.vectorlogo.zone/logos/vercel/vercel-ar21.svg" },
  { name: "HubSpot", src: "https://www.vectorlogo.zone/logos/hubspot/hubspot-ar21.svg" },
  { name: "Datadog", src: "https://www.vectorlogo.zone/logos/datadoghq/datadoghq-ar21.svg" },
  { name: "Snowflake", src: "https://www.vectorlogo.zone/logos/snowflake/snowflake-ar21.svg" },
  { name: "Airtable", src: "https://www.vectorlogo.zone/logos/airtable/airtable-ar21.svg" },
  { name: "Asana", src: "https://www.vectorlogo.zone/logos/asana/asana-ar21.svg" },
  { name: "Segment", src: "https://www.vectorlogo.zone/logos/segment/segment-ar21.svg" },
  { name: "GitHub", src: "https://www.vectorlogo.zone/logos/github/github-ar21.svg" },
];

const LogoMarquee = () => {
  const row = [...logos, ...logos];
  return (
    <section className="py-10 border-y border-border/60 bg-card/40 overflow-hidden">
      <div className="container px-6 mb-6">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
          Trusted by high-growth SaaS teams
        </p>
      </div>
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
          {row.map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={logo.src}
              alt={`${logo.name} logo`}
              loading="lazy"
              className="h-10 sm:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;