import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-production.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Studio de producție"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-6">
            Agenție de Producție Social Media
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8">
            Facem brandurile{" "}
            <span className="text-gradient">de neuitat</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 font-body">
            Producție foto și video creată pentru era scroll-ului. 
            Conținut short-form care transformă atenția în acțiune.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-display font-semibold text-sm hover:opacity-90 transition-opacity glow-shadow"
            >
              Începe Acum <ArrowRight size={16} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-sm font-display font-semibold text-sm hover:bg-secondary transition-colors"
            >
              <Play size={16} /> Vezi Portofoliul
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
