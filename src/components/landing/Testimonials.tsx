import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sarahImg from "@/assets/avatar-sarah.jpg";
import jamesImg from "@/assets/avatar-james.jpg";
import priyaImg from "@/assets/avatar-priya.jpg";
import marcusImg from "@/assets/avatar-marcus.jpg";
import elenaImg from "@/assets/avatar-elena.jpg";
import davidImg from "@/assets/avatar-david.jpg";

const testimonials = [
  {
    quote:
      "They filled our entire AE team in under 30 days, and every hire has exceeded quota since onboarding. What sold us was the market map they delivered on day two—we could see exactly who they were targeting and why. The vetting was rigorous, the communication was constant, and we never felt like just another client. Honestly, the best recruiting experience we've had as a company.",
    name: "Sarah Chen",
    title: "VP Sales, CloudStack",
    image: sarahImg,
  },
  {
    quote:
      "Finally, a recruiter that actually understands SaaS sales motions and what 'good' looks like at each stage of growth. They pushed back on our spec in the right places and elevated the quality of the shortlist. Every candidate we interviewed was a legitimate contender, which is unheard of in this market. They've become our default partner for any senior GTM hire.",
    name: "James Park",
    title: "HR Director, DataLoop",
    image: jamesImg,
  },
  {
    quote:
      "Our Series B demanded fast, quality hires across both revenue and product, and their recruiting team delivered on both. They built fresh market maps for every role instead of recycling pipelines, which made a real difference. The 30-day onboarding check-in caught a misalignment early and saved us from a costly mis-hire. I'd recommend them to any founder scaling through hypergrowth.",
    name: "Priya Mehta",
    title: "COO, Revenix",
    image: priyaImg,
  },
  {
    quote:
      "We tried three other agencies before working with the SaaS Recruiting Co. and the difference was immediate. They actually understood the technical nuances of the RevOps and Data roles we were hiring for. Their candidates were sharper, better prepared, and far more aligned with our culture. Two of them are now leading entire functions inside our org.",
    name: "Marcus Johnson",
    title: "CRO, Vector Analytics",
    image: marcusImg,
  },
  {
    quote:
      "I needed a VP of Marketing and a Head of CS hired in the same quarter, and they delivered both ahead of schedule. The strategy session at kickoff was the most thorough I've ever experienced from a search partner. Their transparency around comp benchmarks and candidate motivations gave us a real edge in closing offers. Truly a category-leading recruiting team.",
    name: "Elena Ramirez",
    title: "Chief People Officer, Lumen SaaS",
    image: elenaImg,
  },
  {
    quote:
      "The pay-for-results model gave us confidence to engage them on a critical engineering leadership search. Within two weeks we had a shortlist of A-players who were already excited about the company. They quarterbacked the entire process and gave us honest feedback at every step. We closed our new VP of Engineering at the top of our target band.",
    name: "David Haddad",
    title: "CTO, Northwind Cloud",
    image: davidImg,
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
                  <div className="glass rounded-xl p-6 h-full flex flex-col border border-border">
                    <Quote className="w-6 h-6 text-primary/70 mb-3" />
                    <p className="text-foreground/90 leading-relaxed text-sm mb-5 flex-1">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
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
