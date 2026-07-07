import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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

interface NavbarProps {
  dark?: boolean;
}


const CALENDLY_URL = "https://calendly.com/saasrecruitingco/schedule";

const LOCATIONS = [
  "U.S. (all cities)",
  "EMEA (all regions)",
  "APAC (all regions)",
  "Canada (all provinces)",
];

const Navbar = ({ dark = false }: NavbarProps) => {
  return (
    <nav className={cn("sticky top-0 left-0 right-0 z-50", dark ? "bg-transparent" : "glass")}>
      <div className="container px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Briefcase className={cn("w-5 h-5", dark ? "text-primary-foreground" : "text-primary")} />
          <span className={cn("font-heading font-bold text-lg", dark ? "text-primary-foreground" : "text-foreground")}>
            The SaaS Recruiting Co.
          </span>
        </Link>

        <div className={cn("hidden md:flex items-center gap-8 text-sm", dark ? "text-primary-foreground/80" : "text-muted-foreground")}>
          {/* Services dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={cn("flex items-center gap-1 transition-colors outline-none", dark ? "hover:text-primary-foreground" : "hover:text-foreground")}>
              Services <ChevronDown className="w-3.5 h-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className={cn("w-56", dark ? "bg-primary/95 text-primary-foreground border-primary-foreground/20" : "")}>
              <DropdownMenuLabel className={cn("text-xs uppercase tracking-wider", dark ? "text-primary-foreground/70" : "text-muted-foreground")}>What We Do</DropdownMenuLabel>
              <DropdownMenuItem asChild className={cn("", dark ? "focus:bg-primary-foreground/10 focus:text-primary-foreground" : "")}>
                <a href="/#services">Our Expertise</a>
              </DropdownMenuItem>
              <DropdownMenuSeparator className={dark ? "bg-primary-foreground/20" : ""} />
              <DropdownMenuLabel className={cn("text-xs uppercase tracking-wider", dark ? "text-primary-foreground/70" : "text-muted-foreground")}>Who We Help</DropdownMenuLabel>
              <DropdownMenuItem asChild className={cn("", dark ? "focus:bg-primary-foreground/10 focus:text-primary-foreground" : "")}>
                <a href="/#who-we-help">Company Sizes</a>
              </DropdownMenuItem>
              <DropdownMenuSeparator className={dark ? "bg-primary-foreground/20" : ""} />
              <DropdownMenuLabel className={cn("text-xs uppercase tracking-wider", dark ? "text-primary-foreground/70" : "text-muted-foreground")}>Locations We Serve</DropdownMenuLabel>
              {LOCATIONS.map((loc) => (
                <DropdownMenuItem key={loc} disabled className={cn("opacity-100 focus:bg-transparent cursor-default", dark ? "text-primary-foreground/80" : "text-foreground/80")}>
                  {loc}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* For Candidates dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={cn("flex items-center gap-1 transition-colors outline-none", dark ? "hover:text-primary-foreground" : "hover:text-foreground")}>
              For Candidates <ChevronDown className="w-3.5 h-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className={cn("w-48", dark ? "bg-primary/95 text-primary-foreground border-primary-foreground/20" : "")}>
              <DropdownMenuItem asChild className={cn("", dark ? "focus:bg-primary-foreground/10 focus:text-primary-foreground" : "")}>
                <Link to="/open-roles">Open Roles</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className={cn("", dark ? "focus:bg-primary-foreground/10 focus:text-primary-foreground" : "")}>
                <Link to="/talent-network">Join Our Talent Network</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="/#testimonials" className={cn("transition-colors", dark ? "hover:text-primary-foreground" : "hover:text-foreground")}>Testimonials</a>
        </div>

        <Button variant="hero" size="sm" className={dark ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : ""} asChild>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Hire Talent
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

