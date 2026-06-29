const logos = [
  "Stripe",
  "Notion",
  "Linear",
  "Vercel",
  "Airtable",
  "Figma",
  "Datadog",
  "Snowflake",
  "HubSpot",
  "Segment",
  "Asana",
  "Slack",
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
        <div className="flex w-max animate-marquee gap-14 group-hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-heading text-2xl sm:text-3xl font-semibold text-muted-foreground/70 hover:text-primary transition-colors whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;