import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            
            <p className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Despre Got Concept
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Creați pentru{" "}
              <span className="text-gradient">economia creatorilor</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Suntem un colectiv de fotografi, videografi și editori pasionați de social media. Fiecare proiect pe care îl realizăm este gândit să capteze atenția și să creeze impact real — nu doar să arate bine.



            </p>
            <p className="text-muted-foreground leading-relaxed">Am colaborat cu diverse branduri, de la startup-uri în creștere până la companii consacrate, ajutându-le să construiască prezențe vizuale memorabile și să comunice eficient cu publicul lor.



            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4">
            
            {[
            { label: "Fondată", value: "2021" },
            { label: "ORAȘ", value: "BUC" },
            { label: "Platforme", value: "IG · TT · FB · YT" }].
            map((item) =>
            <div
              key={item.label}
              className="bg-card border border-border rounded-sm p-6">
              
                <p className="text-2xl font-display font-bold text-gradient">
                  {item.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

};

export default AboutSection;