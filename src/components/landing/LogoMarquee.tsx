// Logos are cached locally at build time by scripts/fetch-logos.mjs
// (sourced from vectorlogo.zone ar21 variants - icon + wordmark)
const logos = [
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "Shopify", src: "/logos/shopify.svg" },
  { name: "Slack", src: "/logos/slack.svg" },
  { name: "Figma", src: "/logos/figma.svg" },
  { name: "Vercel", src: "/logos/vercel.svg" },
  { name: "HubSpot", src: "/logos/hubspot.svg" },
  { name: "Datadog", src: "/logos/datadog.svg" },
  { name: "Snowflake", src: "/logos/snowflake.svg" },
  { name: "Airtable", src: "/logos/airtable.svg" },
  { name: "Asana", src: "/logos/asana.svg" },
  { name: "Segment", src: "/logos/segment.svg" },
  { name: "GitHub", src: "/logos/github.svg" },
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