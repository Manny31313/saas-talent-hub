import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const CALENDLY_URL = "https://calendly.com";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary" />
          <span className="font-heading font-bold text-lg">The SaaS Recruiting Co.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="/#services" className="hover:text-foreground transition-colors">Services</a>
          <Link to="/open-roles" className="hover:text-foreground transition-colors">Open Roles</Link>
          <a href="/#contact" className="hover:text-foreground transition-colors">Contact</a>
          <a href="/#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
        </div>

        <Button variant="hero" size="sm" asChild>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Let's Talk
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
