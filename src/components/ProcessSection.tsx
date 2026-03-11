import { motion } from "framer-motion";
import { MessageSquare, Clapperboard, Scissors, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Brief & Strategie",
    description: "Înțelegem brandul, obiectivele și publicul tău. Creăm un plan de conținut personalizat.",
  },
  {
    icon: Clapperboard,
    number: "02",
    title: "Producție",
    description: "Ședință foto/video cu echipamente profesionale, într-un mediu controlat sau on-location.",
  },
  {
    icon: Scissors,
    number: "03",
    title: "Editare & Post",
    description: "Color grading, montaj ritmic, motion graphics — totul calibrat pe platforma vizată.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Livrare & Lansare",
    description: "Conținut gata de publicare, cu recomandări de timing, hashtag-uri și copy.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Cum Lucrăm
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            De la idee la <span className="text-gradient">impact</span>
          </h2>
        </motion.div>

        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative text-center group"
            >
              {/* Step circle */}
              <div className="relative z-10 mx-auto w-24 h-24 rounded-full bg-secondary border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_-5px_hsl(12_90%_58%/0.25)] transition-all duration-500">
                <step.icon className="text-primary" size={28} />
              </div>

              <p className="text-primary font-display text-xs font-bold tracking-[0.3em] uppercase mb-2">
                {step.number}
              </p>
              <h3 className="text-lg font-display font-bold mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
