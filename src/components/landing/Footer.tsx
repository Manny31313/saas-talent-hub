import { Briefcase } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container px-6">
        <p className="text-xs text-muted-foreground text-center mb-6 max-w-3xl mx-auto">
          * Free placement offer applies to first-time partners only. Subject to terms and conditions regarding candidate salary caps or role types.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="font-heading font-semibold text-sm">The SaaS Recruiting Co.</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} The SaaS Recruiting Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
