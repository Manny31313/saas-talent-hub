import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      role: formData.get("role"),
      message: formData.get("message"),
    };

    const mailtoLink = `mailto:keezerholdingsllc@gmail.com?subject=New Inquiry from ${data.name} at ${data.company}&body=Name: ${data.name}%0AEmail: ${data.email}%0ACompany: ${data.company}%0ARole Category: ${data.role}%0A%0AMessage:%0A${data.message}`;
    window.open(mailtoLink, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section className="py-24 border-t border-border" id="contact">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Let's Build Your <span className="text-gradient">Dream Team</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Tell us about your hiring needs and we'll match you with the right
              SaaS talent. No obligation, no fluff — just a real conversation.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Typical response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>First candidates presented in 5–7 days</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>No upfront fees — we work on success</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input
                  required
                  name="name"
                  placeholder="Your name"
                  maxLength={100}
                  className="bg-secondary/50 border-border placeholder:text-muted-foreground/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  required
                  type="email"
                  placeholder="you@company.com"
                  maxLength={255}
                  className="bg-secondary/50 border-border placeholder:text-muted-foreground/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Company</label>
              <Input
                required
                placeholder="Your company name"
                maxLength={150}
                className="bg-secondary/50 border-border placeholder:text-muted-foreground/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">What role(s) are you hiring for?</label>
              <Select required>
                <SelectTrigger className="bg-secondary/50 border-border">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales (AE, SDR, Sales Leader)</SelectItem>
                  <SelectItem value="cs">Customer Success / Support</SelectItem>
                  <SelectItem value="marketing">Marketing / Growth</SelectItem>
                  <SelectItem value="revops">RevOps / Analytics</SelectItem>
                  <SelectItem value="executive">Executive (VP, C-Suite)</SelectItem>
                  <SelectItem value="engineering">Engineering / Product</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Tell us more</label>
              <Textarea
                required
                placeholder="Briefly describe your hiring needs, timeline, and any specifics..."
                maxLength={1000}
                rows={4}
                className="bg-secondary/50 border-border placeholder:text-muted-foreground/50 resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full text-base py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
              <Send className="w-4 h-4 ml-1" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
