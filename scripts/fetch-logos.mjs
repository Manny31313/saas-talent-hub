// Build-time logo fetcher. Downloads SVG logos (with wordmark) to public/logos
// so the marquee renders without runtime network access.
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "../public/logos");

const LOGOS = [
  { name: "stripe", url: "https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg" },
  { name: "shopify", url: "https://www.vectorlogo.zone/logos/shopify/shopify-ar21.svg" },
  { name: "slack", url: "https://www.vectorlogo.zone/logos/slack/slack-ar21.svg" },
  { name: "figma", url: "https://www.vectorlogo.zone/logos/figma/figma-ar21.svg" },
  { name: "vercel", url: "https://www.vectorlogo.zone/logos/vercel/vercel-ar21.svg" },
  { name: "hubspot", url: "https://www.vectorlogo.zone/logos/hubspot/hubspot-ar21.svg" },
  { name: "datadog", url: "https://www.vectorlogo.zone/logos/datadoghq/datadoghq-ar21.svg" },
  { name: "snowflake", url: "https://www.vectorlogo.zone/logos/snowflake/snowflake-ar21.svg" },
  { name: "airtable", url: "https://www.vectorlogo.zone/logos/airtable/airtable-ar21.svg" },
  { name: "asana", url: "https://www.vectorlogo.zone/logos/asana/asana-ar21.svg" },
  { name: "segment", url: "https://www.vectorlogo.zone/logos/segment/segment-ar21.svg" },
  { name: "github", url: "https://www.vectorlogo.zone/logos/github/github-ar21.svg" },
];

async function exists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const force = process.argv.includes("--force");
  let downloaded = 0, cached = 0, failed = 0;

  await Promise.all(LOGOS.map(async ({ name, url }) => {
    const out = resolve(OUT_DIR, `${name}.svg`);
    if (!force && await exists(out)) { cached++; return; }
    try {
      const res = await fetch(url, { headers: { "User-Agent": "logo-fetcher" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const body = await res.text();
      if (!body.includes("<svg")) throw new Error("Not an SVG");
      await writeFile(out, body, "utf8");
      downloaded++;
    } catch (err) {
      failed++;
      console.warn(`[logos] failed to fetch ${name}: ${err.message}`);
    }
  }));

  console.log(`[logos] downloaded=${downloaded} cached=${cached} failed=${failed}`);
  if (downloaded + cached === 0) process.exit(1);
}

main();
