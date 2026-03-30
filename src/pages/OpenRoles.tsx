import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Banknote, ArrowRight, Briefcase, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { roles } from "@/data/roles";
import Navbar from "@/components/landing/Navbar";

const OpenRoles = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-6">
          <div className="mb-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {roles.length} Open Positions
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
              Open <span className="text-gradient">Roles</span>
            </h1>
            <p className="text-muted-foreground max-w-xl text-lg">
              Explore curated opportunities at the fastest-growing SaaS companies.
              Every role is vetted and exclusive to our network.
            </p>
          </motion.div>

          <div className="space-y-4 max-w-4xl">
            {roles.map((role, i) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <Link to={`/open-roles/${role.id}`}>
                      <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors">
                        {role.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">{role.company}</p>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {role.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {role.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Banknote className="w-3.5 h-3.5" /> {role.salary}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {role.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-medium bg-primary/10 text-primary border-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <span className="text-xs text-muted-foreground">{role.posted}</span>
                    <Button variant="hero" size="sm" className="mt-auto" asChild>
                      <Link to={`/open-roles/${role.id}`}>
                        Apply <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenRoles;
