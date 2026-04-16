import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
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
      "Reduced API response latency by 35% using FastAPI-based inference services with Redis caching and OpenSearch",
      "Streamlined model deployment by building scalable LLMOps pipelines using MLflow, Airflow, and GitHub Actions",
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
      "Improved production stability with MLOps standards using MLflow, reducing model regression incidents by 45%",
      "Mentored engineering teams on system design and model evaluation, reducing iteration cycles by 20%",
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
      "Developed data architectures using Snowflake and PostgreSQL, enabling faster data access and improving query performance",
      "Reduced manual review effort by 70% by integrating processed datasets into downstream fraud detection systems",
      "Provisioned scalable environments using Terraform on Azure, reducing setup time and improving consistency",
    ],
  },
  {
    role: "AI & Data Analytics Intern",
    company: "Genpact",
    logo: genpactLogo,
    location: "Hyderabad, India",
    duration: "Feb 2021 - Jul 2021",
    achievements: [
      "Built data pipelines using Python and SQL to prepare structured financial datasets for ML models, reducing preprocessing time by 30%",
      "Improved downstream model accuracy by 20% through data cleaning and anomaly detection using Pandas and NumPy",
      "Automated ETL processes using Python and SQL, reducing reporting cycle time by 35%",
      "Created Power BI dashboards with DAX to visualize model outputs and key metrics for stakeholders",
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
      "Developed ensemble models using XGBoost and SMOTE, increasing F1-score by 22% on imbalanced datasets",
      "Designed recommendation systems using TF-IDF and embeddings, improving precision by 20%",
      "Reduced training time by 25% through hyperparameter tuning and optimized batch processing in PyTorch",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-8 sm:py-20 md:py-18 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-accent to-primary-glow mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary-glow" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="absolute left-6 md:left-1/2 w-6 h-6 bg-accent rounded-full border-4 border-background transform -translate-x-1/2 shadow-gold"
              />

              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8 shadow-elegant hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg shrink-0 w-16 h-16 flex items-center justify-center overflow-hidden">
                      {exp.logo ? (
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                      ) : (
                        <Briefcase className="text-accent" size={24} />
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-accent font-semibold mb-3">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.1 * i }}
                        className="flex items-start gap-3 text-foreground/90"
                      >
                        <span className="text-accent mt-1">▸</span>
                        <span className="flex-1">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
