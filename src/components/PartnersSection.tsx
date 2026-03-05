import { motion } from "framer-motion";
import partnersImg from "@/assets/partners.png";

const PartnersSection = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Parteneri
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Branduri care ne-au acordat <span className="text-gradient">încrederea lor</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Am colaborat cu branduri din industrii diverse — de la retail și fashion până la food & beverage și tech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={partnersImg}
            alt="Partenerii noștri — Carrefour, TEX, Strongbow, Brico Depot, Estée Lauder, Rasova, Moldova în Bucate, M. Marquise, Fashion Drop, Edita Lupea, Centro Moda, Trickshot, GameOn, EraVault"
            className="w-full max-w-4xl opacity-70 hover:opacity-100 transition-opacity duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
