import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer & Information Science",
    institution: "Avila University",
    location: "Kansas City, MO",
    duration: "Jan 2024 – Dec 2025",
    description: "Specialized in advanced AI systems, machine learning, and data engineering",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "JNTUH College of Engineering",
    location: "Hyderabad, India",
    duration: "Jun 2019 – Jul 2023",
    description: "Core computer science studies with research focus on AI and Machine Learning",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Academic <span className="gold-text-gradient">Foundation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-10 border-white/5 hover:border-accent/30 transition-all duration-500 relative overflow-hidden h-full">
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
                    <GraduationCap className="text-accent" size={40} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-lg font-bold text-accent">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-white/40">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-white/60 leading-relaxed italic">
                  {edu.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full transform group-hover:scale-125 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

