import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import profileImage from "/karishma_portfolio.png";

const TypingText = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[index];
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setSpeed(150);
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setSpeed(50);
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, speed, texts]);

  return (
    <span className="text-accent min-h-[1.5em] inline-block">
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
};

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = ["LLM Architectures", "RAG Systems", "Agentic AI Workflows", "Generative AI", "Machine Learning"];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm"
              >
                <Sparkles size={14} className="text-accent animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Leading Generative AI Innovation</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter text-white">
                Karishma Shaik
              </h1>
              
              <div className="text-xl sm:text-2xl font-bold mt-4 h-8">
                <TypingText texts={skills} />
              </div>

              <p className="text-lg sm:text-xl text-white max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Engineering the next generation of intelligent systems with advanced <span className="text-white">AI Architectures</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 gold-gradient-bg text-black font-bold rounded-2xl shadow-[0_20px_40px_rgba(255,215,0,0.2)] transition-all flex items-center gap-3 group"
              >
                View Projects
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </motion.button>
              
              <motion.a
                href="/resume_karishma-shaik_aiml.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 glass-panel border border-accent/20 text-white font-bold transition-all flex items-center gap-3 hover:bg-accent/10"
              >
                <Download size={20} />
                Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Profile Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end pr-8"
          >
            <div className="relative">
              {/* Premium Glow Aura */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-[80px] animate-pulse" />
              
              {/* Circular Photo Container */}
              <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] rounded-full p-2 bg-gradient-to-tr from-accent/40 via-transparent to-accent/40 backdrop-blur-sm z-10 overflow-visible">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-accent/20 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Karishma Shaik"
                    className="w-full h-full object-cover object-[center_15%] transform hover:scale-110 transition-transform duration-1000"
                  />
                </div>

                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-6 -right-6 z-20"
                >
                  <div className="flex items-center gap-3 px-6 py-3 bg-[#1A1A1A] border border-accent/30 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md group hover:border-accent/50 transition-all duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_#FFD700]" />
                    <span className="text-sm md:text-base font-bold text-white whitespace-nowrap">
                      5+ <span className="text-accent">Years Experience</span>
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Background Decorative Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] rounded-full border border-accent/10 border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-80px] rounded-full border border-accent/5"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

