import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { FloatingBackground } from "./FloatingBackground";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// Real, free-to-use professional portraits sourced from Unsplash (Unsplash License).
const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=facearea&facepad=2.5&w=400&h=400&q=80`;
const sarahImg = unsplash("photo-1573496359142-b8d87734a5a2");
const jamesImg = unsplash("photo-1560250097-0b93528c311a");
const priyaImg = unsplash("photo-1580489944761-15a19d654956");
const marcusImg = unsplash("photo-1519085360753-af0119f7cbe7");
const elenaImg = unsplash("photo-1544005313-94ddf0286df2");
const davidImg = unsplash("photo-1500648767791-00dcc994a43e");
const sofiaImg = unsplash("photo-1438761681033-6461ffad8d80");
const tylerImg = unsplash("photo-1507003211169-0a1dd7228f2d");

const testimonials = [
  {
    quote:
      "The recruiting team helped us fill our entire AE team in under 30 days, and every hire has exceeded quota since onboarding. What sold us was the market map they delivered on day two, so we could see exactly who they were targeting and why. The vetting was rigorous, the communication was constant, and we never felt like just another client. Honestly, the best recruiting experience we've had as a company.",
    name: "Sarah Chen",
    title: "VP Sales, CloudStack",
    image: sarahImg,
  },
  {
    quote:
      "This team actually understands SaaS sales motions and what 'good' looks like at each stage of growth. They pushed back on our spec in the right places and elevated the quality of the shortlist. Every candidate we interviewed was a legitimate contender, which is unheard of in this market. They've become our default partner for any senior GTM hire.",
    name: "James Park",
    title: "HR Director, DataLoop",
    image: jamesImg,
  },
  {
    quote:
      "Our Series B demanded fast, quality hires across both revenue and product, and this team delivered on both. They built fresh market maps for every role instead of recycling pipelines, which made a real difference. The 30-day onboarding check-in caught a misalignment early and saved us from a costly mis-hire. I'd recommend them to any founder scaling through hypergrowth.",
    name: "Priya Mehta",
    title: "COO, Revenix",
    image: priyaImg,
  },
  {
    quote:
      "We tried three other agencies before working with SRC and the difference was immediate. They actually understood the technical nuances of the RevOps and Data roles we were hiring for. Their candidates were sharper, better prepared, and far more aligned with our culture. Two of them are now leading entire functions inside our org.",
    name: "Marcus Johnson",
    title: "CRO, Vector Analytics",
    image: marcusImg,
  },
  {
    quote:
      "I needed a VP of Marketing and a Head of CS hired in the same quarter, and this recruiting team delivered both ahead of schedule. The strategy session at kickoff was the most thorough I've ever experienced from a search partner. Their transparency around comp benchmarks and candidate motivations gave us a real edge in closing offers. Truly a category-leading recruiting team.",
    name: "Elena Ramirez",
    title: "Chief People Officer, Lumen SaaS",
    image: elenaImg,
  },
  {
    quote:
      "The pay-for-results model gave us confidence to engage this recruiting team on a critical engineering leadership search. Within two weeks we had a shortlist of candidates who were already excited about the company. They quarterbacked the entire process and gave us honest feedback at every step. We closed our new VP of Engineering at the top of our target band.",
    name: "David Haddad",
    title: "CTO, Northwind Cloud",
    image: davidImg,
  },
  {
    quote:
      "As an SDR looking to break into a bigger SaaS company, this recruiting team took the time to actually understand my career goals instead of just pushing me toward any open req. They coached me through every interview loop and helped me negotiate a comp package I didn't think was possible. I landed at a Series C company with real upward mobility. I recommend them to every rep I know.",
    name: "Sofia Alvarez",
    title: "SDR, placed at a Series C SaaS company",
    image: sofiaImg,
  },
  {
    quote:
      "I was an AE at a stagnant company and needed a change without wasting cycles on bad-fit roles. This team surfaced three legitimate opportunities in under two weeks, all aligned with my ICP and quota expectations. They prepped me hard for panel interviews and gave honest feedback throughout. I ended up at a top-of-market SaaS org with a 40% comp bump.",
    name: "Tyler Brooks",
    title: "Account Executive, placed at an enterprise SaaS company",
    image: tylerImg,
  },
];

const Testimonials = () => {
  return (
    <section className="py-14 bg-secondary/30" id="testimonials">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Trusted by <span className="text-gradient">Tech & SaaS Leaders</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="relative overflow-hidden glass rounded-xl p-6 h-full flex flex-col border border-border ambient-glow">
                    <FloatingBackground />
                    <motion.div
                      whileHover={{ scale: 1.03, y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative z-10 flex flex-col h-full text-center"
                    >
                      <Quote className="w-6 h-6 text-primary/70 mb-3 mx-auto" />
                      <p className="text-foreground/90 leading-relaxed text-sm mb-5 flex-1">
                        "{t.quote}"
                      </p>
                      <div className="flex flex-col items-center gap-3 pt-4 border-t border-border">
                        <img
                          src={t.image}
                          alt={`${t.name} headshot`}
                          loading="lazy"
                          width={64}
                          height={64}
                          className="w-12 h-12 rounded-full object-cover border border-border"
                        />
                        <div>
                          <div className="font-heading font-semibold text-sm">{t.name}</div>
                          <div className="text-xs text-muted-foreground">{t.title}</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-3 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
