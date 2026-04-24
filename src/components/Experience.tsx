import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import bestbuyLogo from "@/assets/logos/bestbuy_logo.png";
import toyotaLogo from "@/assets/logos/toyota_logo.png";
import genpactLogo from "@/assets/logos/genpact_logo.png";
import jntuhLogo from "@/assets/logos/jntuh_logo.png";

const experiences = [
  {
    role: "Generative AI Engineer",
    company: "Best Buy",
    logo: bestbuyLogo,
    location: "Remote",
    duration: "Feb 2026 - Present",
    achievements: [
      "Built a production RAG system using LangChain, LlamaIndex, and FAISS, reducing manual search effort by 40%",
      "Improved answer relevance by 28% using semantic chunking, hybrid search (BM25 + embeddings), and re-ranking models",
      "Fine-tuned GPT-4 and Llama 3 using PEFT LoRA and RLHF, increasing response accuracy by 25%",
      "Scaled automated content generation from 15 to 24,000 daily executions using LangGraph and CrewAI multi-agent workflows",
    ],
  },
  {
    role: "AI Product Manager",
    company: "Toyota North America",
    logo: toyotaLogo,
    location: "Dallas, TX",
    duration: "Mar 2024 - Dec 2025",
    achievements: [
      "Defined AI product architecture for connected vehicle analytics using TensorFlow and Vertex AI, reducing deployment timelines by 35%",
      "Benchmarked transformer models using evaluation metrics (MRR, NDCG), improving prediction accuracy by 30%",
      "Designed low-latency real-time inference architecture on AWS SageMaker for high-volume automotive data",
      "Implemented A/B testing frameworks for predictive models, enabling data-driven validation of AI feature performance",
    ],
  },
  {
    role: "AI Developer",
    company: "Genpact",
    logo: genpactLogo,
    location: "Hyderabad, India",
    duration: "Aug 2021 - Nov 2023",
    achievements: [
      "Designed distributed data pipelines using PySpark on Databricks with Delta Lake, achieving 99.9% reliability",
      "Improved model accuracy by 30% through feature engineering pipelines for fraud detection and risk modeling",
      "Developed data architectures using Snowflake and PostgreSQL, enabling faster data access",
      "Architected scalable vector databases for enterprise-wide search applications, improving information retrieval efficiency",
    ],
  },
  {
    role: "AI & Data Analytics Intern",
    company: "Genpact",
    logo: genpactLogo,
    location: "Hyderabad, India",
    duration: "Feb 2021 - Jul 2021",
    achievements: [
      "Built data pipelines using Python and SQL to prepare structured financial datasets, reducing preprocessing time by 30%",
      "Improved downstream model accuracy by 20% through data cleaning and anomaly detection",
      "Engineered automated data validation scripts to ensure data integrity across multiple financial systems",
      "Assisted in the deployment of cloud-based data warehouses, facilitating streamlined analytical reporting",
    ],
  },
  {
    role: "Lead Researcher - AI & ML",
    company: "JNTUH College of Engineering",
    logo: jntuhLogo,
    location: "Hyderabad, India",
    duration: "Feb 2020 - Jan 2021",
    achievements: [
      "Built NLP classification models using PyTorch and BERT, improving classification accuracy by 18%",
      "Developed ensemble models using XGBoost and SMOTE, increasing F1-score by 22%",
      "Designed and implemented custom data visualization tools to analyze model performance metrics",
      "Conducted comprehensive literature reviews on state-of-the-art deep learning architectures for research projects",
    ],
  },
];


export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">
            Expertise <span className="gold-gradient-text">& Journey</span>
          </h2>
          <div className="w-20 h-1 gold-gradient-bg mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-32">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid lg:grid-cols-12 gap-8 items-start"
            >
              {/* Date & Location Column */}
              <div className="lg:col-span-3 space-y-4 pt-2">
                <div className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm tracking-widest uppercase">
                  {exp.duration}
                </div>
                <div className="flex items-center gap-2 text-white/40 text-sm font-medium">
                  <MapPin size={14} className="text-accent/40" />
                  {exp.location}
                </div>
              </div>

              {/* Main Content Column */}
              <div className="lg:col-span-9 relative">
                {/* Visual Connector (Minimalist Dot) */}
                <div className="absolute -left-[41px] top-4 w-4 h-4 rounded-full border-4 border-black bg-accent hidden lg:block z-10 shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
                
                <div className="glass-panel p-8 md:p-12 premium-card-hover border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 p-3 flex items-center justify-center group-hover:border-accent/40 transition-colors duration-500 overflow-hidden shadow-xl">
                        {exp.logo ? (
                          <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                        ) : (
                          <Briefcase className="text-accent" size={32} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-1 group-hover:gold-gradient-text transition-all duration-500">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-white/50 font-bold tracking-tight uppercase">{exp.company}</p>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-6">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-5 text-white/60 text-lg leading-relaxed group/item"
                      >
                        <span className="mt-3 w-2 h-2 rounded-full bg-accent/20 border border-accent/40 group-hover/item:bg-accent group-hover/item:shadow-[0_0_10px_rgba(255,215,0,1)] transition-all duration-300 shrink-0" />
                        <span className="group-hover/item:text-white transition-colors duration-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
