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
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4">
            About <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-accent to-primary-glow mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8 shadow-elegant hover:shadow-glow transition-all">
              <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
                I am an <span className="text-accent font-semibold">AI/ML Engineer</span> with over{" "}
                <span className="text-accent font-semibold">5 years of experience</span> in system design and building 
                production AI systems. I specialize in <span className="text-accent font-semibold">LLM engineering, Retrieval 
                Augmented Generation (RAG)</span>, and agent-based AI workflows across complex enterprise environments.
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8 shadow-elegant hover:shadow-glow transition-all">
              <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
                I focus on designing end-to-end machine learning pipelines using <span className="text-accent font-semibold">
                PyTorch, HuggingFace, and LangChain</span>. My expertise in <span className="text-accent font-semibold">
                MLOps and LLMOps</span> allows me to deploy scalable AI systems across AWS, Azure, and GCP, 
                delivering measurable impact by optimizing model accuracy and system performance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-glow transition-all duration-300 group"
              >
                <item.icon className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110" style={{ color: item.color }} />
                <span className="text-xs sm:text-sm font-medium text-center text-foreground/90">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-elegant"
        >
          <Counter end={24000} label="Daily Executions" />
          <Counter end={5} label="Years" />
          <Counter end={99} label="SLA Compliance" />
        </motion.div>
      </div>
    </section>
  );
};
