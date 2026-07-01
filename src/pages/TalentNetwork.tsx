import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Quote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
// Real, free-to-use professional portrait from Unsplash (Unsplash License).
const avatarHannah = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2.5&w=400&h=400&q=80";

const TalentNetwork = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [intent, setIntent] = useState("active");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      intent,
      name: formData.get("name"),
      email: formData.get("email"),
      linkedin: formData.get("linkedin"),
      discipline: formData.get("discipline"),
      message: formData.get("message"),
    };

    const subject = `Talent Network Application - ${data.name}`;
    const body =
      `Job Search Intent: ${data.intent}%0A` +
      `Name: ${data.name}%0A` +
      `Email: ${data.email}%0A` +
      `LinkedIn: ${data.linkedin}%0A` +
      `Discipline: ${data.discipline}%0A%0A` +
      `Context:%0A${data.message}`;
    window.open(
      `mailto:keezerholdingsllc@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`,
      "_blank",
    );

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application sent!",
        description: "We'll be in touch when a strong match opens up.",
      });
      (e.target as HTMLFormElement).reset();
      setIntent("active");
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* Left - pitch + testimonial */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24"
            >
              <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">For Candidates</p>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Join Our <span className="text-gradient">Talent Network.</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A frictionless way to put yourself in front of the most ambitious Tech & SaaS
                companies hiring right now. Tell us where you're at, and we'll surface the right
                opportunities - whether you're actively searching or just open to the right move.
              </p>

              <div className="glass rounded-xl p-6 border border-border">
                <Quote className="w-6 h-6 text-primary/70 mb-3" />
                <p className="text-foreground/90 leading-relaxed text-sm mb-5">
                  "This recruiting team helped me land the biggest break of my career. They
                  understood exactly what I wanted, advocated hard on my behalf, and kept me in
                  the loop the entire time. I couldn't recommend them more highly."
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img
                    src={avatarHannah}
                    alt="Hannah Whitfield headshot"
                    loading="lazy"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border border-border"
                  />
                  <div>
                    <div className="font-heading font-semibold text-sm">Hannah Whitfield</div>
                    <div className="text-xs text-muted-foreground">Placed candidate, now VP Marketing</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass rounded-xl p-6 sm:p-8 space-y-6"
            >
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Which best describes your job search? <span className="text-primary">*</span>
                </label>
                <RadioGroup value={intent} onValueChange={setIntent} className="grid sm:grid-cols-2 gap-3">
                  <label
                    htmlFor="intent-active"
                    className={`cursor-pointer rounded-lg border p-4 text-sm transition-colors ${
                      intent === "active" ? "border-primary bg-primary/5" : "border-border bg-secondary/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="active" id="intent-active" className="mt-0.5" />
                      <span>I'm actively on the job market</span>
                    </div>
                  </label>
                  <label
                    htmlFor="intent-passive"
                    className={`cursor-pointer rounded-lg border p-4 text-sm transition-colors ${
                      intent === "passive" ? "border-primary bg-primary/5" : "border-border bg-secondary/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="passive" id="intent-passive" className="mt-0.5" />
                      <span>I'm open to opportunities but not actively looking</span>
                    </div>
                  </label>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Full Name *</label>
                <Input required name="name" placeholder="Your full name" maxLength={100}
                  className="bg-secondary/50 border-border placeholder:text-muted-foreground/50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address *</label>
                <Input required name="email" type="email" placeholder="you@email.com" maxLength={255}
                  className="bg-secondary/50 border-border placeholder:text-muted-foreground/50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">LinkedIn Profile URL</label>
                <Input name="linkedin" placeholder="linkedin.com/in/you" maxLength={200}
                  className="bg-secondary/50 border-border placeholder:text-muted-foreground/50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Primary Discipline *</label>
                <Select required name="discipline">
                  <SelectTrigger className="bg-secondary/50 border-border">
                    <SelectValue placeholder="Select" className="data-[placeholder]:text-muted-foreground/50" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="executive">Executive Leadership (VP, CRO, CMO, CTO)</SelectItem>
                    <SelectItem value="gtm">Go-to-Market (AE, SDR, CSM)</SelectItem>
                    <SelectItem value="revops">RevOps (Sales Engineer, RevOps Analyst)</SelectItem>
                    <SelectItem value="devops">DevOps (Data Scientist, Data Engineer)</SelectItem>
                    <SelectItem value="people-ops">People Operations (HR, Talent, People Ops)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">A bit about you</label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your background, target compensation, or what you are looking for next..."
                  maxLength={1500}
                  rows={5}
                  className="bg-secondary/50 border-border placeholder:text-muted-foreground/50 resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full text-base py-6" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Join the Network"}
                <Send className="w-4 h-4 ml-1" />
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TalentNetwork;