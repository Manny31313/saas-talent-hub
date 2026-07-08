import { motion } from "framer-motion";
import { FloatingBackground } from "./FloatingBackground";

const CALENDLY_URL = "https://calendly.com/saasrecruitingco/schedule";

const ContactForm = () => {
  return (
    <section className="py-14 border-t border-border" id="contact">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Let's Build Your <span className="text-gradient">Dream Team</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              We're a network of Tech & SaaS professionals and recruiting veterans ready to
              help you hire quality talent, fast. Tell us about your needs and we'll
              get to work.
            </p>
            <div className="mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative glass rounded-xl overflow-hidden ambient-glow w-full mx-auto"
          >
            <FloatingBackground />
            <div
              className="calendly-inline-widget w-full"
              data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=f6f1e4&text_color=1a2e1f&primary_color=1a4d2e`}
              style={{ minWidth: "320px", height: "720px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
