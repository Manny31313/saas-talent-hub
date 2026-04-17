import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OpportunityCTA = () => {
  return (
    <section className="py-10">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-sm text-muted-foreground">Looking for your next opportunity?</span>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6" asChild>
            <Link to="/open-roles">View Open Roles</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OpportunityCTA;
