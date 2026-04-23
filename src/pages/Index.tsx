import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { IntroAnimation } from "@/components/IntroAnimation";
import { BackgroundVisuals } from "@/components/BackgroundVisuals";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black selection:bg-accent/30 selection:text-accent overflow-x-hidden">
      {/* Premium Custom Cursor / Spark Effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent/50 pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? "rgba(255, 215, 0, 0.1)" : "rgba(255, 215, 0, 0)",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-accent rounded-full pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 400, mass: 0.2 }}
      />

      <IntroAnimation />
      <BackgroundVisuals />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 gold-gradient-bg z-[70] origin-left"
        style={{ scaleX }}
      />

      <Header />
      
      <main className="relative">
        <Hero />
        
        <SectionWrapper><About /></SectionWrapper>
        <SectionWrapper><Experience /></SectionWrapper>
        <SectionWrapper><Projects /></SectionWrapper>
        <SectionWrapper><Skills /></SectionWrapper>
        <SectionWrapper><Certifications /></SectionWrapper>
        <SectionWrapper><Education /></SectionWrapper>
        <SectionWrapper><Contact /></SectionWrapper>
      </main>

      <Footer />
    </div>
  );
};

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="relative"
  >
    {children}
  </motion.section>
);

export default Index;
