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
    <section id="education" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4">
             <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card/70 backdrop-blur-sm border border-border rounded-xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <GraduationCap style={{ color: "#D4AF37" }} size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FCEFB4] bg-clip-text text-transparent">

                    {edu.institution}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  <span>{edu.location}</span>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed">
                {edu.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-gold opacity-5 rounded-tl-full transform group-hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
