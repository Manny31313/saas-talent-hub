export interface Role {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  tags: string[];
  posted: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const roles: Role[] = [
  {
    id: "bdr",
    title: "Business Development Representative",
    company: "B2B Strategy Co.",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$55k–$80k OTE",
    tags: ["Sales", "Entry-Level", "B2B"],
    posted: "2 days ago",
    description:
      "Drive top-of-funnel growth by identifying and qualifying new business opportunities for B2B Strategy Co.'s consulting and advisory services.",
    responsibilities: [
      "Research and identify target accounts through outbound prospecting",
      "Execute multi-channel outreach campaigns (email, phone, LinkedIn)",
      "Qualify inbound leads and book discovery meetings for Account Executives",
      "Maintain accurate pipeline data in HubSpot CRM",
      "Collaborate with marketing on campaign feedback and content ideas",
    ],
    requirements: [
      "0–2 years of sales or business development experience",
      "Strong written and verbal communication skills",
      "Self-motivated with a hunter mentality",
      "Familiarity with CRM tools (HubSpot preferred)",
      "Interest in B2B SaaS and consulting industries",
    ],
  },
  {
    id: "hr-generalist",
    title: "HR Generalist",
    company: "B2B Strategy Co.",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$65k–$85k OTE",
    tags: ["HR", "People Ops", "Mid-Level"],
    posted: "3 days ago",
    description:
      "Own day-to-day HR operations and help build a world-class employee experience as B2B Strategy Co. scales its team.",
    responsibilities: [
      "Manage onboarding, offboarding, and employee lifecycle processes",
      "Administer benefits, payroll coordination, and compliance",
      "Support performance review cycles and employee development programs",
      "Act as a trusted resource for employee relations and policy questions",
      "Partner with leadership on culture initiatives and engagement surveys",
    ],
    requirements: [
      "3+ years of HR generalist experience",
      "Knowledge of employment law and HR best practices",
      "Experience with HRIS platforms (Gusto, Rippling, or similar)",
      "Excellent interpersonal and organizational skills",
      "PHR or SHRM-CP certification a plus",
    ],
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    company: "B2B Strategy Co.",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$80k–$110k OTE",
    tags: ["Analytics", "Data", "Mid-Level"],
    posted: "5 days ago",
    description:
      "Turn complex datasets into actionable insights that drive strategic decisions for B2B Strategy Co. and its clients.",
    responsibilities: [
      "Build dashboards and reports using SQL, Python, and BI tools",
      "Analyze client engagement, revenue, and operational data",
      "Partner with consulting teams to deliver data-driven recommendations",
      "Maintain data quality and documentation standards",
      "Identify trends and opportunities through exploratory analysis",
    ],
    requirements: [
      "2–4 years of data analysis experience",
      "Proficiency in SQL and at least one scripting language (Python or R)",
      "Experience with Tableau, Looker, or Power BI",
      "Strong problem-solving and storytelling with data",
      "Bachelor's degree in a quantitative field preferred",
    ],
  },
  {
    id: "marketing-specialist",
    title: "Marketing Specialist",
    company: "B2B Strategy Co.",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$70k–$95k OTE",
    tags: ["Marketing", "Content", "B2B"],
    posted: "1 week ago",
    description:
      "Plan and execute B2B marketing campaigns that generate qualified leads and elevate brand awareness for B2B Strategy Co.",
    responsibilities: [
      "Create and manage content across blog, email, social, and paid channels",
      "Plan and execute webinars, events, and co-marketing partnerships",
      "Optimize campaigns with A/B testing and performance analytics",
      "Manage the marketing calendar and coordinate with sales on messaging",
      "Report on KPIs including MQLs, CPL, and pipeline contribution",
    ],
    requirements: [
      "2–5 years of B2B marketing experience (SaaS or consulting preferred)",
      "Strong copywriting and content creation skills",
      "Experience with HubSpot, Marketo, or similar marketing automation",
      "Data-driven mindset with experience in Google Analytics and paid media",
      "Creative thinker who can execute independently",
    ],
  },
  {
    id: "consultant",
    title: "Consultant",
    company: "B2B Strategy Co.",
    location: "San Francisco, CA (On-site)",
    type: "Full-time",
    salary: "$100k–$140k",
    tags: ["Consulting", "Strategy", "Senior"],
    posted: "1 week ago",
    description:
      "Deliver high-impact strategic engagements for B2B Strategy Co.'s enterprise clients, from market analysis to go-to-market planning.",
    responsibilities: [
      "Lead client engagements from scoping through delivery",
      "Conduct market research, competitive analysis, and financial modeling",
      "Develop actionable strategy decks and implementation roadmaps",
      "Facilitate workshops and executive presentations",
      "Mentor junior team members and contribute to internal IP development",
    ],
    requirements: [
      "4–7 years in management consulting or corporate strategy",
      "Exceptional analytical and presentation skills",
      "Experience in B2B SaaS, technology, or professional services",
      "MBA or equivalent advanced degree preferred",
      "Willingness to travel up to 25%",
    ],
  },
  {
    id: "account-executive",
    title: "Account Executive",
    company: "B2B Strategy Co.",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    salary: "$120k–$170k OTE",
    tags: ["Sales", "Closing", "Mid-Senior"],
    posted: "2 weeks ago",
    description:
      "Own the full sales cycle for B2B Strategy Co.'s consulting services, from discovery to close, working with mid-market and enterprise buyers.",
    responsibilities: [
      "Manage and close a pipeline of qualified opportunities",
      "Run discovery calls, demos, and proposal presentations",
      "Negotiate contracts and commercial terms",
      "Collaborate with BDRs, marketing, and delivery teams",
      "Accurately forecast and report on pipeline in CRM",
    ],
    requirements: [
      "3–6 years of B2B closing experience (consulting or SaaS preferred)",
      "Track record of meeting or exceeding quota",
      "Strong consultative selling and negotiation skills",
      "Experience with Salesforce or HubSpot CRM",
      "Excellent relationship-building ability",
    ],
  },
];
