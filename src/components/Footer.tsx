import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 bg-black overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          {/* Social Icons */}
          <div className="flex gap-6 mb-8">
            <SocialIcon 
              href="https://www.linkedin.com/in/karishmashaik0524/" 
              icon={<Linkedin size={20} className="text-white/60 group-hover:text-accent transition-colors" />} 
            />
            <SocialIcon 
              href="mailto:krishshaik7@gmail.com" 
              icon={<Mail size={20} className="text-white/60 group-hover:text-accent transition-colors" />} 
            />
          </div>

          {/* Copyright Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md shadow-[0_0_25px_rgba(255,215,0,0.1)] relative group"
          >
            <div className="absolute inset-0 rounded-full bg-accent/5 blur-md group-hover:bg-accent/10 transition-colors" />
            <p className="text-[10px] md:text-xs text-white/50 font-medium tracking-widest uppercase relative z-10">
              © 2026 Karishma Shaik. All rights reserved.
            </p>
          </motion.div>
        </div>

        {/* Scroll to Top - Positioned Right */}
        <div className="absolute right-6 md:right-12 bottom-12">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--accent))", color: "black" }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center text-accent transition-all duration-300 bg-black shadow-[0_0_15px_rgba(255,215,0,0.2)] group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>


  );
};

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, borderColor: "hsl(var(--accent))" }}
    whileTap={{ scale: 0.9 }}
    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-accent/5 group"
  >
    {icon}
  </motion.a>
);

