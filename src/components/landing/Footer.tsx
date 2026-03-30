import { Briefcase } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-primary" />
          <span className="font-heading font-semibold text-sm">The SaaS Recruiting Co.</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} The SaaS Recruiting Co. All rights reserved.
        </p>
        <a
          href="https://www.linkedin.com/company/the-saas-recruiting-co"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          LinkedIn →
        </a>
      </div>
    </footer>
  );
};

export default Footer;
