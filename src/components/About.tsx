import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SiPython, SiMysql, SiDatabricks, SiAmazon } from "react-icons/si";
import { Database, BarChart3, Cloud } from "lucide-react";

const highlights = [
  { icon: SiPython, label: "Python", color: "#3776AB" },
  { icon: Database, label: "PyTorch", color: "#EE4C2C" },
  { icon: BarChart3, label: "LangChain", color: "#13B621" },
  { icon: SiDatabricks, label: "HuggingFace", color: "#FFD21E" },
  { icon: Cloud, label: "Azure/AWS", color: "#0078D4" },
  { icon: SiAmazon, label: "MLOps", color: "#FF9900" },
];

const Counter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-accent mb-2">
        {count}
        {label.includes("Years") && "+"}
        {label.includes("Dashboards") && "+"}
        {label.includes("Accuracy") && "%"}
      </div>
      <div className="text-sm sm:text-base text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Pioneering <span className="gold-text-gradient">AI Frontiers</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 border-accent/10 hover:border-accent/20 transition-all duration-500">
              <p className="text-lg leading-relaxed text-white/80">
                I am a dedicated <span className="text-accent font-bold">AI/ML Engineer</span> with over{" "}
                <span className="text-accent font-bold">5 years of excellence</span> in architecting complex AI ecosystems. 
                My focus lies at the intersection of <span className="text-white font-semibold">Generative AI, LLM Engineering</span>, and <span className="text-white font-semibold">Scalable MLOps</span>.
              </p>
            </div>

            <div className="glass-card p-8 border-accent/10 hover:border-accent/20 transition-all duration-500">
              <p className="text-lg leading-relaxed text-white/80">
                From developing sophisticated <span className="text-accent">RAG frameworks</span> to orchestrating 
                <span className="text-accent">multi-agent systems</span>, I specialize in transforming raw AI potential 
                into production-ready enterprise solutions that drive meaningful business transformation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 215, 0, 0.05)" }}
                className="glass-card p-6 flex flex-col items-center justify-center gap-3 border-white/5 hover:border-accent/30 transition-all duration-300 group"
              >
                <item.icon className="text-4xl group-hover:scale-110 transition-transform duration-500" style={{ color: item.color }} />
                <span className="text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 glass-card p-12 border-accent/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <Counter end={24000} label="Daily Executions" />
          <Counter end={5} label="Years Experience" />
          <Counter end={99} label="SLA Compliance" />
        </motion.div>
      </div>
    </section>
  );
};

