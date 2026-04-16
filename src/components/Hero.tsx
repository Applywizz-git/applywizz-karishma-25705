

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import profileImage from "/woman_images.avif";

const techStack = [
  "LLMs",
  "Generative AI",
  "RAG",
  "PyTorch",
  "LangChain",
  "MLOps",
];

export const Hero = () => {
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, hsl(var(--accent)) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, hsl(var(--accent)) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, hsl(var(--accent)) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, hsl(var(--accent)) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, hsl(var(--accent)) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 dark:bg-accent/20 rounded-full blur-3xl -top-20 -left-20 animate-float" />
        <div
          className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-primary-glow/10 dark:bg-primary-glow/20 rounded-full blur-3xl -bottom-20 -right-20 animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* On mobile: image first; on large: text left, image right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Right Content - Profile Image (appears first on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div
              className="relative w-[320px] h-[500px] rounded-[50%_50%_50%_50%/30%_30%_30%_30%]
    overflow-hidden neon-border animate-pulse-glow"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-[#0A192F] opacity-70 blur-2xl"></div>
              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#0A192F]/80 blur-3xl"></div>

              <img
                src={profileImage}
                alt="Karishma Shaik"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

          </motion.div>

          {/* Left Content - Text (appears second on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block text-foreground">Karishma Shaik</span>
              <span className="block mt-4">
                Engineering Production{" "}
                <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
                  AI Systems
                </span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl mb-4 font-medium text-foreground/90"
            >
              LLM & GenAI Expert •{" "}
              <motion.span
                key={currentTech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-accent font-semibold"
              >
                {techStack[currentTech]}
              </motion.span>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              AI/ML Engineer specializing in <span className="text-accent font-semibold">LLM engineering, RAG</span>, and agent-based AI workflows with 5+ years of experience in building production AI systems.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05, boxShadow: "var(--shadow-glow)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent to-primary-glow text-accent-foreground font-semibold rounded-lg shadow-gold hover:shadow-glow transition-all focus:outline-none focus:ring-2 focus:ring-accent/50 flex items-center gap-2"
              >
                View Projects
                <ArrowDown className="group-hover:translate-y-1 transition-transform" />
              </motion.button>
              <motion.a
                href="/resume_karishma-shaik_aiml.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all focus:outline-none focus:ring-2 focus:ring-accent/50 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
