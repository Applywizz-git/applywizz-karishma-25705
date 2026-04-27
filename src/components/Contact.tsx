import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Linkedin, Sparkles, Github, Twitter, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#FFD700", "#FFFFFF", "#FDB931"],
    });

    toast({
      title: "Connection Initialized! 🚀",
      description: "Your message has been transmitted through the neural network.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 relative overflow-visible">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left: Interactive Contact Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/5 border border-accent/20"
                >
                  <Sparkles size={14} className="text-accent" />
                  <span className="text-xs font-bold uppercase tracking-widest text-accent/80">Open for Collaboration</span>
                </motion.div>

                <h2 className="text-5xl md:text-7xl font-black text-white leading-none">
                  Let's Build the <span className="gold-gradient-text italic">Future.</span>
                </h2>

                <p className="text-xl text-white/50 leading-relaxed max-w-md">
                  Whether it's a revolutionary RAG system or an autonomous agentic framework, I'm ready to bring your vision to life.
                </p>
              </div>

              <div className="space-y-8">
                <ContactLink
                  href="mailto:krishshaik7@gmail.com"
                  icon={<Mail className="text-black" size={24} />}
                  label="Direct Email"
                  value="krishshaik7@gmail.com"
                />
                <ContactLink
                  href="tel:+14695866952"
                  icon={<Phone className="text-black" size={24} />}
                  label="Phone"
                  value="+1 (469) 586-6952"
                />
                <ContactLink
                  href="#"
                  icon={<MapPin className="text-black" size={24} />}
                  label="Location"
                  value="Open to Relocate"
                />
                <ContactLink
                  href="https://www.linkedin.com/in/karishmashaik0524/"
                  icon={<Linkedin className="text-black" size={24} />}
                  label="Professional Network"
                  value="linkedin.com/in/karishmashaik0524"
                />
              </div>

              <div className="flex gap-4 pt-4">
                {/* <SocialIcon href="https://github.com" icon={<Github size={20} />} /> */}
                {/* <SocialIcon href="https://twitter.com" icon={<Twitter size={20} />} /> */}
              </div>
            </motion.div>

            {/* Right: Premium Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Form Glow Background */}
              <div className="absolute -inset-4 bg-accent/5 rounded-[40px] blur-3xl" />

              <div className="glass-panel p-8 md:p-12 relative border-white/5 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="bg-white/5 border-white/10 focus:border-accent text-white placeholder:text-white/20 h-14 rounded-2xl transition-all"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@ai.com"
                        className="bg-white/5 border-white/10 focus:border-accent text-white placeholder:text-white/20 h-14 rounded-2xl transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Your Vision</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-white/5 border-white/10 focus:border-accent text-white placeholder:text-white/20 rounded-2xl resize-none p-5 transition-all"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gold-gradient-bg hover:opacity-90 text-black font-black h-16 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        Transmit Message
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


const ContactLink = ({ href, icon, label, value }: { href: string; icon: React.ReactNode; label: string; value: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ x: 10 }}
    className="flex items-center gap-6 group"
  >
    <div className="w-14 h-14 rounded-2xl gold-gradient-bg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <p className="text-xs font-black uppercase tracking-widest text-white/30 group-hover:text-accent transition-colors">{label}</p>
      <p className="text-xl font-bold text-white group-hover:gold-gradient-text transition-all">{value}</p>
    </div>
  </motion.a>
);

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    whileHover={{ y: -5, backgroundColor: "rgba(255, 215, 0, 0.1)" }}
    className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/40 transition-all"
  >
    {icon}
  </motion.a>
);
