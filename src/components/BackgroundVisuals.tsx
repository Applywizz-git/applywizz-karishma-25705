import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export const BackgroundVisuals = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax effects for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#050505]">
      {/* Dynamic Grid Background */}
      <motion.div 
        style={{ 
          x: mousePosition.x * -0.5,
          y: mousePosition.y * -0.5
        }}
        className="absolute inset-0 neural-grid opacity-[0.08] mask-radial"
      />

      {/* Layer 1: Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '2s' }} />

      {/* Layer 2: Abstract AI Neural Pattern (SVG) */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="neural-net" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1.5" fill="currentColor" className="text-accent" />
            <circle cx="350" cy="150" r="1.5" fill="currentColor" className="text-accent" />
            <circle cx="200" cy="350" r="1.5" fill="currentColor" className="text-accent" />
            <line x1="50" y1="50" x2="350" y2="150" stroke="currentColor" strokeWidth="0.5" className="text-accent/30" />
            <line x1="350" y1="150" x2="200" y2="350" stroke="currentColor" strokeWidth="0.5" className="text-accent/30" />
            <line x1="200" y1="350" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-accent/30" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#neural-net)" />
        </svg>
      </motion.div>

      {/* Layer 3: Floating Sparks (Golden Particles) */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              scale: Math.random() * 0.5 + 0.5,
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%" 
            }}
            animate={{
              y: [null, "-200px"],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute w-[2px] h-[2px] bg-accent rounded-full shadow-[0_0_8px_rgba(255,215,0,0.6)]"
          />
        ))}
      </motion.div>

      {/* Layer 4: Futuristic Horizontal Glare */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>
    </div>
  );
};
