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
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="gold-text-gradient">Ecosystem</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 border-white/5 hover:border-accent/30 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <category.icon className="text-accent" size={24} />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest leading-tight">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-white/60 hover:text-accent hover:border-accent/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
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
          transition={{ duration: 1 }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
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
              whileHover={{ scale: 1.2 }}
              className="transition-transform duration-300"
            >
              <Icon size={40} className="hover:filter-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

