import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Eye, Users, Zap, TrendingUp } from "lucide-react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedCounter = ({ target, suffix = "", prefix = "", duration = 2 }: AnimatedCounterProps) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const motionVal = useMotionValue(0);
          const unsubscribe = motionVal.on("change", (v) => setValue(Math.round(v)));
          animate(motionVal, target, { duration, ease: "easeOut" });
          return () => unsubscribe();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {prefix}{value.toLocaleString("ro-RO")}{suffix}
    </span>
  );
};

const stats = [
  { icon: Eye, value: 800, suffix: "K+", label: "Vizualizări Generate", prefix: "" },
  { icon: Users, value: 10, suffix: "+", label: "Branduri Partenere", prefix: "" },
  { icon: Zap, value: 150, suffix: "+", label: "Proiecte Livrate", prefix: "" },
  { icon: TrendingUp, value: 95, suffix: "%", label: "Rată de Retenție", prefix: "" },
];

const StatsSection = () => {
  return (
    <section className="py-20 md:py-28 border-y border-border bg-secondary/50">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="text-center"
            >
              <stat.icon className="mx-auto mb-4 text-primary" size={24} />
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </p>
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-display">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
