import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Azure AI Engineer Associate (AI-102)",
    issuer: "Microsoft",
    description: "Designing and implementing AI solutions using Azure services",
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "Coursera",
    description: "Deep dive into Transformer architectures, fine-tuning, and RLHF",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    description: "Comprehensive study of supervised and unsupervised learning algorithms",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    description: "Neural networks, CNNs, RNNs, and hyperparameter tuning",
  },
  {
    title: "MLOps Specialization",
    issuer: "Coursera",
    description: "Production ML system design, deployment, and monitoring",
  },
  {
    title: "Data Engineering on Google Cloud",
    issuer: "Coursera",
    description: "ETL pipelines, data warehousing, and streaming analytics on GCP",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Global <span className="gold-text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="glass-card h-full p-8 border-white/5 hover:border-accent/30 hover:bg-accent/5 transition-all duration-500 relative overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Award className="text-accent" size={28} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">Verified</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors leading-tight">
                    {cert.title}
                  </h3>

                  <div className="text-sm font-bold text-white/40 uppercase tracking-widest">
                    {cert.issuer}
                  </div>

                  <p className="text-sm text-white/60 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

