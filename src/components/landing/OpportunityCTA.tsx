import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OpportunityCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-start gap-3"
    >
      <span className="text-sm text-muted-foreground">Looking for your next opportunity?</span>
      <Button variant="heroOutline" size="lg" className="text-base px-8 py-6" asChild>
        <Link to="/open-roles">View Open Roles</Link>
      </Button>
    </motion.div>
  );
};

export default OpportunityCTA;
