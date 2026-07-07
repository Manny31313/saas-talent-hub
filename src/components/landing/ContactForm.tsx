import { motion } from "framer-motion";
import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/saasrecruitingco/schedule";

const ContactForm = () => {
  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    if (document.querySelector(`script[src="${scriptSrc}"]`)) return;
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-14 border-t border-border" id="contact">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Let's Build Your <span className="text-gradient">Dream Team</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We're a network of Tech & SaaS professionals and recruiting veterans ready to
              help you hire quality talent, fast. Tell us about your needs and we'll
              get to work.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>No upfront fees, we work on success</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl overflow-hidden ambient-glow"
          >
            <div
              className="calendly-inline-widget w-full"
              data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=f6f1e4&text_color=1a2e1f&primary_color=1a4d2e`}
              style={{ minWidth: "320px", height: "700px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
