import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import legalSummaryImg from "/Enterprise_GenAI_RAG_Platform.webp";
import healthcareAnalyticsImg from "/Multi-Agent_AI_Workflow_System.webp";
import salesDashboardImg from "/LLM_Evaluation_Benchmarking_Framework.png";

const projects = [
  {
    title: "Enterprise GenAI RAG Platform",
    description: "Semantic document retrieval system using LangChain, FAISS, and OpenSearch",
    image: legalSummaryImg, // Placeholder image
    details: [
      "Enabled faster access to financial records, reducing lookup time by 35%",
      "Improved answer relevance by implementing embedding pipelines and re-ranking logic",
      "Built FastAPI endpoints and containerized services with Docker",
      "Resulted in more accurate responses for complex enterprise queries",
    ],
    tech: ["LangChain", "FAISS", "OpenSearch", "FastAPI", "Docker", "Python"],
  },
  {
    title: "Multi-Agent AI Workflow System",
    description: "Automation system using LangGraph and CrewAI for data validation and summarization",
    image: healthcareAnalyticsImg, // Placeholder image
    details: [
      "Coordinated data validation and structured output generation across workflows",
      "Improved throughput and reduced turnaround time by 50% on large datasets",
      "Implemented asynchronous task execution and agent orchestration",
      "Integrated validation steps ensuring consistency of automated outputs",
    ],
    tech: ["LangGraph", "CrewAI", "Python", "Agentic AI", "AsyncIO"],
  },
  {
    title: "LLM Evaluation & Benchmarking Framework",
    description: "Framework using MRR and NDCG to benchmark GPT, Claude, and Gemini models",
    image: salesDashboardImg, // Placeholder image
    details: [
      "Structured evaluation pipelines to assess response relevance and ranking quality",
      "Enabled consistent comparison of model performance across experiments",
      "Reduced model selection time by 30% via standardized benchmark reports",
      "Helped teams choose optimal LLM configurations for enterprise use cases",
    ],
    tech: ["MRR", "NDCG", "Python", "LLM Evaluation", "Benchmarking"],
  },
];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return projects.length - 1;
      if (next >= projects.length) return 0;
      return next;
    });
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Innovative <span className="gold-text-gradient">Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2">
                      {currentProject.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-3 py-1 bg-accent/20 backdrop-blur-md border border-accent/30 rounded-full text-[10px] font-bold text-accent uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <div className="space-y-8">
                  <div>
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                      {currentProject.title}
                    </motion.h3>
                    <p className="text-xl font-medium text-accent/80 mb-6 italic">
                      {currentProject.description}
                    </p>
                  </div>

                  <div className="glass-card p-6 border-white/5">
                    <ul className="space-y-4">
                      {currentProject.details.map((detail, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 text-white/70 text-sm md:text-base"
                        >
                          <span className="text-accent font-bold mt-1">/</span>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {currentProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-white/60 hover:border-accent/30 hover:text-accent transition-all cursor-default uppercase tracking-tighter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-16 px-4">
              <button
                onClick={() => paginate(-1)}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all group"
              >
                <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
              </button>

              <div className="flex gap-3">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex
                        ? "bg-accent w-12"
                        : "bg-white/10 w-4 hover:bg-white/20"
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={() => paginate(1)}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all group"
              >
                <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

