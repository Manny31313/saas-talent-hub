// Logos sourced from the public Simple Icons CDN (https://simpleicons.org)
const logos: { name: string; slug: string }[] = [
  { name: "Stripe", slug: "stripe" },
  { name: "Notion", slug: "notion" },
  { name: "Linear", slug: "linear" },
  { name: "Vercel", slug: "vercel" },
  { name: "Airtable", slug: "airtable" },
  { name: "Figma", slug: "figma" },
  { name: "Datadog", slug: "datadog" },
  { name: "Snowflake", slug: "snowflake" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Segment", slug: "segment" },
  { name: "Asana", slug: "asana" },
  { name: "Slack", slug: "slack" },
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
        <div className="flex w-max items-center animate-marquee gap-14 group-hover:[animation-play-state:paused]">
          {row.map((logo, i) => (
            <img
              key={`${logo.slug}-${i}`}
              src={`https://cdn.simpleicons.org/${logo.slug}/9ca3af`}
              alt={`${logo.name} logo`}
              loading="lazy"
              className="h-8 sm:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;