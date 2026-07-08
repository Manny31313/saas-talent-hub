import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
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
  const [experience, setExperience] = useState<string[]>([]);

  const experienceOptions = [
    { value: "executive", label: "Executive Leadership (VP, CRO, CMO, CTO)" },
    { value: "gtm", label: "Go-to-Market (AE, SDR, CSM)" },
    { value: "revops", label: "RevOps (Sales Engineer, RevOps Analyst)" },
    { value: "devops", label: "DevOps (Data Scientist, Data Engineer)" },
    { value: "people-ops", label: "People Ops (HR, Talent)" },
  ];

  const toggleExperience = (value: string) => {
    setExperience((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      intent,
      name: formData.get("name"),
      email: formData.get("email"),
      linkedin: formData.get("linkedin"),
      experience: experience.join(", "),
      message: formData.get("message"),
    };

    const subject = `Talent Network Application - ${data.name}`;
    const body =
      `Job Search Intent: ${data.intent}%0A` +
      `Name: ${data.name}%0A` +
      `Email: ${data.email}%0A` +
      `LinkedIn: ${data.linkedin}%0A` +
      `Experience: ${data.experience}%0A%0A` +
      `Context:%0A${data.message}`;
    window.location.href = `mailto:emmanuel.keezer@saasrecruitingco.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application sent!",
        description: "We'll be in touch when a strong match opens up.",
      });
      (e.target as HTMLFormElement).reset();
      setIntent("active");
      setExperience([]);
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
                companies actively hiring. Tell us where you're at, and we'll surface the right
                opportunities - whether you're actively searching or just open to the right move.
              </p>

              <div className="relative glass rounded-xl p-6 border border-border ambient-glow">
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
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
                      <div className="text-xs text-muted-foreground">Placed candidate, VP Marketing</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass rounded-xl p-6 sm:p-8 space-y-6 ambient-glow"
            >
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Which best describes your job search? <span className="text-primary">*</span>
                </label>
                <RadioGroup value={intent} onValueChange={setIntent} className="grid sm:grid-cols-2 gap-3">
                  <label
                    htmlFor="intent-active"
                    className={`cursor-pointer rounded-lg border p-4 text-sm transition-colors ambient-glow ${
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
                    className={`cursor-pointer rounded-lg border p-4 text-sm transition-colors ambient-glow ${
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

              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Experience <span className="text-muted-foreground font-normal">(choose all that apply)</span> *
                </label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {experienceOptions.map((opt) => {
                    const checked = experience.includes(opt.value);
                    return (
                      <label
                        key={opt.value}
                        htmlFor={`exp-${opt.value}`}
                        className={`flex items-start gap-3 cursor-pointer rounded-lg border p-3 text-sm transition-colors ${
                          checked ? "border-primary bg-primary/5" : "border-border bg-secondary/30"
                        }`}
                      >
                        <Checkbox
                          id={`exp-${opt.value}`}
                          checked={checked}
                          onCheckedChange={() => toggleExperience(opt.value)}
                          className="mt-0.5"
                        />
                        <span>{opt.label}</span>
                      </label>
                    );
                  })}
                </div>
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