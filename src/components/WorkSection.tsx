import { motion } from "framer-motion";
import workPhoto from "@/assets/work-photo.jpg";
import workVideo from "@/assets/work-video.jpg";
import workStrategy from "@/assets/work-strategy.jpg";

const projects = [
  {
    image: workPhoto,
    title: "Fashion Editorial",
    category: "Photo Production",
    description: "Campaign shoot for luxury brand launch across Instagram & TikTok.",
  },
  {
    image: workVideo,
    title: "Urban Reels Series",
    category: "Short-Form Video",
    description: "30-day content sprint generating 12M+ organic views.",
  },
  {
    image: workStrategy,
    title: "Content Strategy",
    category: "Creative Direction",
    description: "Full-service social strategy for emerging DTC brands.",
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
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Content that commands attention
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
