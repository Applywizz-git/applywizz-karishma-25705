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
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
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
    <section id="projects" className="py-8 md:py-30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-background to-card/20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
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
                  opacity: { duration: 0.2 },
                }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300"
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-poppins font-bold mb-4 text-foreground">
                      {currentProject.title}
                    </h3>
                    <p className="text-xl text-secondary font-semibold mb-4 " style={{ color: "#D4AF37" }}>
                      {currentProject.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {currentProject.details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-foreground/90"
                      >
                        <span className="text-secondary mt-1">▸</span>
                        <span className="flex-1">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {currentProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg text-sm font-medium ${
                          tech === "LangChain" ? "text-[#13B621]" : "text-accent"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-8 mt-12">
              <Button
                onClick={() => paginate(-1)}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-elegant"
              >
                <ChevronLeft size={24} />
              </Button>

              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                        ? "bg-secondary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                onClick={() => paginate(1)}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-elegant"
              >
                <ChevronRight size={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
