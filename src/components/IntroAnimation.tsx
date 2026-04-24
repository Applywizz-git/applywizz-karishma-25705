import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const IntroAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  const name = "Karishma Shaik";
  const role = "Generative AI / ML Engineer";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#000000] overflow-hidden"
        >
          {/* Golden Ambient Glare */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-[150px]" />

          <div className="text-center z-10 space-y-6">
            <div className="relative">
              <motion.h1 
                className="text-5xl md:text-8xl font-black tracking-tighter text-white flex justify-center"
              >
                {name.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.05,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className={`${char === " " ? "mr-6" : ""} relative`}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
              
              {/* Golden Progress Line Under Name */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                className="h-[1px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mt-4 shadow-[0_0_20px_#FFD700]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="overflow-hidden"
            >
              <p className="text-lg md:text-2xl font-bold tracking-[0.4em] uppercase text-[#FFD700]/60">
                {role}
              </p>
            </motion.div>
          </div>

          {/* Corner Highlights */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD700]/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFD700]/5 blur-[100px] rounded-full" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
