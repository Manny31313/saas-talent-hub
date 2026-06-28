import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
      role: formData.get("role"),
      linkedin: formData.get("linkedin"),
      message: formData.get("message"),
    };

    const mailtoLink = `mailto:keezerholdingsllc@gmail.com?subject=New Candidate Submission from ${data.name}&body=Name: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone}%0ARole of Interest: ${data.role}%0ALinkedIn: ${data.linkedin}%0A%0AMessage:%0A${data.message}%0A%0A(Please attach your resume in the email.)`;
    window.open(mailtoLink, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Submission sent!",
        description: "We'll review your details and be in touch soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="container px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">For Candidates</p>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Submit Your <span className="text-gradient">Resume</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Tell us about yourself and the roles you're interested in. We'll keep your profile on file and reach out when there's a great fit.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-xl p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input required name="name" placeholder="Your name" maxLength={100} className="bg-secondary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input required name="email" type="email" placeholder="you@email.com" maxLength={255} className="bg-secondary/50" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <Input name="phone" placeholder="(555) 555-5555" maxLength={30} className="bg-secondary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Role of Interest</label>
                <Input required name="role" placeholder="e.g., Account Executive" maxLength={120} className="bg-secondary/50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">LinkedIn URL</label>
              <Input name="linkedin" placeholder="https://linkedin.com/in/..." maxLength={255} className="bg-secondary/50" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Tell us about your experience</label>
              <Textarea
                required
                name="message"
                placeholder="Brief summary of your background, years of experience, and what you're looking for..."
                maxLength={1500}
                rows={5}
                className="bg-secondary/50 resize-none"
              />
            </div>

            <p className="text-xs text-muted-foreground">
              Please attach your resume to the email that opens after you submit.
            </p>

            <Button type="submit" variant="hero" size="lg" className="w-full text-base py-6" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit Resume"}
              <Send className="w-4 h-4 ml-1" />
            </Button>
          </motion.form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Candidates;