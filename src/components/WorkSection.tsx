import { motion } from "framer-motion";
import workFashion from "@/assets/work-fashion.jpg";
import workStrategy from "@/assets/work-strategy.jpg";

interface Project {
  type: "image" | "video";
  src: string;
  title: string;
  category: string;
  description: string;
}

const projects: Project[] = [
  {
    type: "image",
    src: workFashion,
    title: "Editorial de Modă",
    category: "Producție Foto",
    description: "Ședință foto pentru lansarea unui brand de lux pe Instagram și TikTok.",
  },
  {
    type: "video",
    src: "/videos/reels-urban-v2.mp4",
    title: "Serie de Reels",
    category: "Video Short-Form",
    description: "Conținut rapid, autentic și ușor de consumat.",
  },
  {
    type: "image",
    src: workStrategy,
    title: "Strategie de Conținut",
    category: "Direcție Creativă",
    description: "Strategie completă de social media pentru branduri DTC emergente.",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Lucrări Selectate
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Conținut care captează atenția
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-sm aspect-[4/5] mb-4">
                {project.type === "video" ? (
                  <video
                    src={project.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-xs text-primary font-display font-semibold tracking-[0.2em] uppercase mb-1">
                {project.category}
              </p>
              <h3 className="text-xl font-display font-bold mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
