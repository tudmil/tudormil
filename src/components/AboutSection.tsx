import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              About Flare
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Built for the{" "}
              <span className="text-gradient">creator economy</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're a collective of photographers, videographers, and strategists 
              who live and breathe social media. Every piece of content we produce 
              is designed to perform — not just look pretty.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From scrappy startups to global brands, we've helped over 85 companies 
              build scroll-stopping presences across Instagram, TikTok, YouTube Shorts, 
              and beyond.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Founded", value: "2021" },
              { label: "Team Size", value: "24" },
              { label: "Cities", value: "NYC · LA · LDN" },
              { label: "Platforms", value: "IG · TT · YT" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-card border border-border rounded-sm p-6"
              >
                <p className="text-2xl font-display font-bold text-gradient">
                  {item.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
