import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [role, setRole] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      role,
      message: formData.get("message"),
    };

    const subject = `Hiring Inquiry - ${data.company || data.name}`;
    const body =
      `Name: ${data.name}%0A` +
      `Email: ${data.email}%0A` +
      `Company: ${data.company}%0A` +
      `Role Category: ${data.role}%0A%0A` +
      `Hiring needs:%0A${data.message}`;
    window.location.href = `mailto:emmanuel.keezer@saasrecruitingco.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry sent!",
        description: "We'll be in touch within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
      setRole("");
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Contact <span className="text-gradient">Us Now</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Tell us about your needs and we'll get to work. We respond within 24 hours.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-xl p-6 sm:p-8 space-y-5 ambient-glow"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name *</label>
                  <Input required name="name" placeholder="Your name" maxLength={100}
                    className="bg-secondary/50 border-border placeholder:text-muted-foreground/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email *</label>
                  <Input required name="email" type="email" placeholder="you@company.com" maxLength={255}
                    className="bg-secondary/50 border-border placeholder:text-muted-foreground/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company *</label>
                <Input required name="company" placeholder="Company name" maxLength={150}
                  className="bg-secondary/50 border-border placeholder:text-muted-foreground/50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Role Category *</label>
                <Select required value={role} onValueChange={setRole}>
                  <SelectTrigger className="bg-secondary/50 border-border">
                    <SelectValue placeholder="Select a category" className="data-[placeholder]:text-muted-foreground/50" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="executive">Executive Leadership (VP, CRO, CMO, CTO)</SelectItem>
                    <SelectItem value="gtm">Go-to-Market (AE, SDR, CSM)</SelectItem>
                    <SelectItem value="revops">RevOps (Sales Engineer, RevOps Analyst)</SelectItem>
                    <SelectItem value="devops">DevOps (Data Scientist, Data Engineer)</SelectItem>
                    <SelectItem value="people-ops">People Operations (HR, Talent, People Ops)</SelectItem>
                    <SelectItem value="other">Other / Multiple roles</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Hiring Needs *</label>
                <Textarea required name="message"
                  placeholder="Tell us about the roles you're hiring for, timeline, and any specific requirements..."
                  maxLength={1500} rows={6}
                  className="bg-secondary/50 border-border placeholder:text-muted-foreground/50 resize-none" />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full text-base py-6" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Inquiry"}
                <Send className="w-4 h-4 ml-1" />
              </Button>
            </motion.form>

            <div className="text-center mt-6 text-sm text-muted-foreground">
              Candidates:{" "}
              <Link to="/talent-network" className="text-primary hover:underline font-medium">
                Click here to join our talent network.
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;