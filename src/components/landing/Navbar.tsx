import { Button } from "@/components/ui/button";
import { Briefcase, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const CALENDLY_URL = "https://calendly.com/emmanuel-j-keezer/sync-w-saas-recruiting-co";

const LOCATIONS = [
  "U.S. (all cities)",
  "EMEA (all regions)",
  "APAC (all regions)",
  "Canada (all provinces)",
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary" />
          <span className="font-heading font-bold text-lg">The SaaS Recruiting Co.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {/* Services dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground transition-colors outline-none">
              Services <ChevronDown className="w-3.5 h-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel className="text-xs uppercase tracking-wider text-muted-foreground">What We Do</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <a href="/#services">Our Expertise</a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-xs uppercase tracking-wider text-muted-foreground">Who We Help</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <a href="/#who-we-help">Company Sizes</a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-xs uppercase tracking-wider text-muted-foreground">Locations We Serve</DropdownMenuLabel>
              {LOCATIONS.map((loc) => (
                <DropdownMenuItem key={loc} disabled className="opacity-100 focus:bg-transparent cursor-default text-foreground/80">
                  {loc}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* For Candidates dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground transition-colors outline-none">
              For Candidates <ChevronDown className="w-3.5 h-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/candidates">Submit Resume Here</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/open-roles">Open Roles</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="/#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
        </div>

        <Button variant="hero" size="sm" asChild>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Let's Connect
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
