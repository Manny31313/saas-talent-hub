import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Candidates = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      linkedin: formData.get("linkedin"),
      role: formData.get("role"),
      message: formData.get("message"),
    };

    const mailtoLink = `mailto:keezerholdingsllc@gmail.com?subject=Candidate Submission from ${data.name}&body=Name: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone}%0ALinkedIn: ${data.linkedin}%0ATarget Role: ${data.role}%0A%0ANote:%0A${data.message}%0A%0A(Please attach your resume to this email.)`;
    window.open(mailtoLink, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Submission sent!",
        description: "Don't forget to attach your resume to the email.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-14">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Submit Your <span className="text-gradient">Resume</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Tell us about yourself and the kind of role you're targeting. We'll
                review your background and reach out when there's a strong match across
                our network of Tech & SaaS companies.
              </p>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Confidential — your info is never shared without consent</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Attach your resume to the email that opens after submitting</span>
                </div>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass rounded-xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <Input required name="name" placeholder="Your name" maxLength={100} className="bg-secondary/50 border-border placeholder:text-muted-foreground/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input required name="email" type="email" placeholder="you@email.com" maxLength={255} className="bg-secondary/50 border-border placeholder:text-muted-foreground/50" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone</label>
                  <Input name="phone" placeholder="(555) 555-5555" maxLength={30} className="bg-secondary/50 border-border placeholder:text-muted-foreground/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">LinkedIn URL</label>
                  <Input name="linkedin" placeholder="linkedin.com/in/you" maxLength={200} className="bg-secondary/50 border-border placeholder:text-muted-foreground/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Target Role</label>
                <Input required name="role" placeholder="e.g. Senior AE, RevOps Manager, VP Sales" maxLength={150} className="bg-secondary/50 border-border placeholder:text-muted-foreground/50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Tell us about yourself</label>
                <Textarea required name="message" placeholder="Years of experience, current company, what you're looking for next..." maxLength={1500} rows={5} className="bg-secondary/50 border-border placeholder:text-muted-foreground/50 resize-none" />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full text-base py-6" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Resume"}
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

export default Candidates;