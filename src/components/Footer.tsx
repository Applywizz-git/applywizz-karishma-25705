import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 overflow-hidden border-t border-white/5 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,215,0,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            <span className="gold-text-gradient">KARISHMA</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 max-w-md text-lg leading-relaxed"
          >
            Pushing the boundaries of what's possible with Generative AI and Machine Learning.
          </motion.p>

          <div className="flex gap-6">
            <FooterLink href="https://www.linkedin.com/in/karishmashaik0524/" label="LinkedIn" />
            <FooterLink href="mailto:krishshaik7@gmail.com" label="Email" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-12 border-t border-white/5 w-full max-w-4xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/20">
              © 2026 Karishma Shaik – Crafted with Precision
            </p>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--accent))", color: "black" }}
          onClick={scrollToTop}
          className="mx-auto mt-12 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white/40 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white/60 hover:text-accent text-sm uppercase tracking-widest font-medium transition-colors"
  >
    {label}
  </a>
);

