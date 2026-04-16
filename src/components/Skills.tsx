import { motion } from "framer-motion";
import {
  SiPython,
  SiR,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiOracle,
  SiDatabricks,
  SiApachespark,
  SiApachekafka,
  SiApachehadoop,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiGithub,
} from "react-icons/si";
import { Database, BarChart3, GitBranch, Cloud, Cpu, Shield, Zap, Code, CloudCog, Brain, Bot } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & ML Systems",
    icon: Code,
    skills: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "PySpark"],
  },
  {
    title: "Generative AI & LLM Systems",
    icon: Brain,
    skills: ["RAG Architecture", "LLM Fine-Tuning (LoRA, PEFT)", "Prompt Engineering", "Agentic AI", "Multi-Agent Orchestration", "LangChain", "LlamaIndex", "LangGraph", "CrewAI"],
  },
  {
    title: "LLM Models & APIs",
    icon: Bot,
    skills: ["GPT-4", "Claude", "Gemini", "Llama 2/3", "BERT", "HuggingFace Transformers", "OpenAI API", "Anthropic API"],
  },
  {
    title: "Vector Search & Retrieval",
    icon: Zap,
    skills: ["FAISS", "Pinecone", "Weaviate", "ChromaDB", "Azure AI Search", "OpenSearch", "pgvector", "Hybrid Search", "Re-Ranking"],
  },
  {
    title: "MLOps & LLMOps",
    icon: Shield,
    skills: ["MLflow", "Airflow", "CI/CD (GitHub Actions)", "Docker", "Kubernetes", "Terraform", "Model Monitoring", "LLM Evaluation (MRR, NDCG)"],
  },
  {
    title: "Cloud & Distributed AI",
    icon: Cloud,
    skills: ["AWS (SageMaker, Bedrock)", "Azure OpenAI Service", "GCP Vertex AI", "BigQuery", "Distributed Inference Systems"],
  },
  {
    title: "Model Serving & APIs",
    icon: Cpu,
    skills: ["FastAPI", "REST APIs", "Redis Caching", "Observability", "SLA Monitoring", "vLLM"],
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["Apache Spark", "Kafka", "Snowflake", "PostgreSQL", "MongoDB", "ETL/ELT Pipelines", "Delta Lake"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-30 relative overflow-hidden bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-card/70 backdrop-blur-sm border border-border rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                 <category.icon style={{ color: "#D4AF37" }} size={24} />

                </div>
                <h3 className="text-xl font-poppins font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 bg-muted/50 border border-border rounded-lg text-sm font-medium text-foreground/90 hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icons Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-8"
        >
          {[
            { Icon: SiPython, color: "#3776AB" },
            { Icon: SiApachespark, color: "#E25A1C" },
            { Icon: SiDatabricks, color: "#FF3621" },
            { Icon: SiPostgresql, color: "#336791" },
            { Icon: SiMongodb, color: "#47A248" },
            { Icon: SiAmazon, color: "#FF9900" },
            { Icon: SiGooglecloud, color: "#4285F4" },
            { Icon: SiDocker, color: "#2496ED" },
            { Icon: SiGithub, color: "#ffffff" },
            { Icon: SiApachekafka, color: "#231F20" },
            { Icon: SiApachehadoop, color: "#66CCFF" },
          ].map(({ Icon, color }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="transition-transform duration-200"
            >
              <Icon size={48} style={{ color }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
