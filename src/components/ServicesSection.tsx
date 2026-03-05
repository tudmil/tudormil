import { motion } from "framer-motion";
import { Camera, Video, Lightbulb, Sparkles } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Photo Production",
    description:
      "Editorial & commercial photography optimized for social platforms. Product, lifestyle, and campaign shoots.",
  },
  {
    icon: Video,
    title: "Short-Form Video",
    description:
      "Reels, TikToks, and Shorts that stop the scroll. From concept to final cut, built for virality.",
  },
  {
    icon: Lightbulb,
    title: "Creative Direction",
    description:
      "Visual identity, mood boards, and content strategy tailored to your brand's voice and audience.",
  },
  {
    icon: Sparkles,
    title: "Content Strategy",
    description:
      "Data-driven content calendars, trend analysis, and platform-specific optimization for maximum reach.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            End-to-end production
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary rounded-sm p-8 hover:bg-muted transition-colors group"
            >
              <service.icon className="text-primary mb-6" size={28} />
              <h3 className="text-lg font-display font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
