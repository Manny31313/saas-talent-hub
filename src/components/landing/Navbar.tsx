import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary" />
          <span className="font-heading font-bold text-lg">The SaaS Recruiting Co.</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
          <a
            href="https://www.linkedin.com/company/the-saas-recruiting-co"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <Button variant="hero" size="sm">
          Let's Talk
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
