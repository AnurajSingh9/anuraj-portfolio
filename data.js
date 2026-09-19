/** Site configuration — Senior Data Engineer positioning. */
window.SITE = {
  profile: {
    name: "Anuraj Singh",
    prompt: "anuraj@dev:~$",
    email: "anurajsingh0909@gmail.com",
    phone: "+91 9838242460",
    location: "India",
    availability: "Remote-friendly",
    role: "Senior Data Engineer",
    company: "JioHotstar",
    focusLine: "Spark · ETL · SQL · AdTech Data Platforms",
    github: "https://github.com/AnurajSingh9",
    linkedin: "https://www.linkedin.com/in/anuraj-singh/",
    resume: "./assets/Anuraj-Singh-Resume.pdf",
    summary:
      "Large-scale Spark ETL, cloud data platforms, and AI-ready / analytics datasets for product, advertising, and ML use cases.",
  },

  proof: [
    { value: "5+", label: "Years in data engineering & platforms" },
    { value: "100K–500K+", label: "Records processed in production pipelines" },
    { value: "99.5%+", label: "Data accuracy on AI-ready datasets" },
    { value: "99.9%", label: "Production pipeline reliability" },
    { value: "50%", label: "Reduction in manual data processing" },
    { value: "100+", label: "Data issues resolved daily (Wipro)" },
  ],

  skills: [
    {
      title: "Data Engineering",
      items: [
        "Apache Spark",
        "Scala",
        "PySpark",
        "Spark SQL",
        "ETL / ELT",
        "Apache Airflow",
        "Kafka",
        "AWS Glue",
        "dbt",
        "Delta Lake",
      ],
    },
    {
      title: "Programming",
      items: ["Python", "SQL", "Scala"],
    },
    {
      title: "Data / Storage",
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Snowflake",
        "Redis",
        "Pandas",
        "NumPy",
        "Parquet",
        "Avro",
        "Great Expectations",
      ],
    },
    {
      title: "Cloud",
      items: [
        "AWS",
        "S3",
        "Lambda",
        "Redshift",
        "IAM",
        "EC2",
        "GCS",
        "Kubernetes",
      ],
    },
    {
      title: "Backend / DevOps",
      items: [
        "FastAPI",
        "Docker",
        "GitHub Actions",
        "Jenkins",
        "Linux",
        "Prometheus",
      ],
    },
    {
      title: "Also worked in",
      items: [
        "AI-ready datasets",
        "LLM data pipelines",
        "AI / LLM Evaluation",
        "LangChain",
        "RAG",
      ],
    },
  ],

  projects: [
    {
      name: "Multi-Cloud Data Platform",
      label: "GCP-first lakehouse · data engineering",
      tech: ["Spark", "Airflow", "dbt", "BigQuery", "Terraform", "GCS"],
      description:
        "Lakehouse-style ops metrics platform: medallion layers, Airflow orchestration, Spark/pandas transforms, dbt marts, quality gates, and AWS mapping for the same design.",
      highlights: [
        "Medallion Architecture",
        "Incremental Loads",
        "Quality Gates",
        "IaC",
      ],
      github: "https://github.com/AnurajSingh9/multi-cloud-data-platform",
      secondaryLabel: null,
      secondaryUrl: null,
    },
    {
      name: "EvalForge",
      label: "Production data / eval platform",
      tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS S3"],
      description:
        "Production platform for large eval runs — async workers, data validation, metrics/export, and CI-style regression gates. Shows backend + data systems engineering.",
      highlights: [
        "Async Workers",
        "Data Validation",
        "Regression Gates",
        "Observability",
      ],
      github: "https://github.com/AnurajSingh9/evalforge",
      secondaryLabel: "Release",
      secondaryUrl: "https://github.com/AnurajSingh9/evalforge/releases/tag/v2.0.0",
    },
    {
      name: "ledger-repair",
      label: "Agent evaluation environment",
      tech: ["Python", "SQL"],
      description:
        "RL-style evaluation environment with oracle grading and soundness checks — secondary to core data engineering work.",
      highlights: ["Oracle Grading", "Soundness Checks"],
      github: "https://github.com/AnurajSingh9/ledger-repair",
      secondaryLabel: null,
      secondaryUrl: null,
    },
  ],

  experience: [
    {
      title: "Senior Data Engineer (Full-Time)",
      company: "JioHotstar",
      location: "Remote",
      dates: "Sep 2026 – Present",
      bullets: [
        "Build and maintain large-scale ETL pipelines for AdTech advertising insights and analytics; develop and optimize distributed Spark applications (Scala / PySpark) and SQL for batch and streaming workloads.",
        "Drive data quality, performance, and cost efficiency across production pipelines; partner with engineering, product, and analytics on cloud and containerized data platform deliveries.",
      ],
      more: [],
    },
    {
      title: "RL Environments Engineer (Contract)",
      company: "Tensium",
      location: "Remote",
      dates: "Aug 2026 – Sep 2026",
      bullets: [
        "Design and implement RL/agent evaluation environments for frontier coding models, including task specs, synthetic datasets, and reward/verifier logic.",
        "Ran adversarial soundness testing and quality checks so grades track real task completion.",
      ],
      more: [],
    },
    {
      title: "Senior Software Engineer - AI Evaluation & Benchmarks (Contract)",
      company: "Handshake AI",
      location: "Remote",
      dates: "Jul 2026 – Sep 2026",
      bullets: [
        "Developed Python-based AI evaluation pipelines for automated benchmark execution, LLM quality assessment, and deterministic validation using reproducible evaluation workflows.",
        "Built benchmark datasets, automated evaluation and reporting pipelines, and improved engineering workflows using Docker, Git, Linux, and production software engineering practices.",
      ],
      more: [],
    },
    {
      title: "AI Data Engineer (Contract)",
      company: "Mercor",
      location: "Remote",
      dates: "Aug 2025 – Jul 2026",
      bullets: [
        "Architected scalable Python, SQL, and AWS-based data pipelines to transform and standardize 100K–500K+ records into AI-ready datasets for LLM training, model evaluation, and analytics workloads.",
        "Delivered AI-ready data platforms supporting machine learning and Generative AI workloads, achieving 99.5%+ data accuracy through robust quality assurance and scalable data engineering practices.",
      ],
      more: [],
    },
    {
      title: "Data Engineer (Full-Time)",
      company: "Team Computers",
      location: "Remote",
      dates: "Aug 2024 – Jul 2025",
      bullets: [
        "Built and maintained scalable ETL/ELT pipelines using Python, SQL, Apache Spark (PySpark), and Apache Airflow to process high-volume enterprise data, improving pipeline performance and reducing manual data processing by 50%.",
        "Designed and optimized PostgreSQL/MySQL data models while collaborating with cross-functional teams to automate data workflows, implement data quality validation, and maintain production pipelines with 99.9% reliability for business-critical reporting.",
      ],
      more: [],
    },
    {
      title: "Project Engineer (Full-Time)",
      company: "Wipro",
      location: "Remote (Pune)",
      dates: "Sep 2021 – Aug 2024",
      bullets: [
        "Optimized enterprise data pipelines and workflows using Python, SQL, and AWS, integrating HPSM and OSM systems to resolve 100+ data-related issues daily while improving data reliability and contributing to a CSAT score of 4.8/5.0.",
        "Modernized Python- and SQL-based data transformation, reporting, and automation solutions using AWS, Tableau, and Excel, reducing manual reporting effort by 25% and improving business visibility through analytics-driven insights.",
      ],
      more: [],
    },
  ],

  architecture: [
    { stage: "Ingestion", detail: "APIs · Kafka · AWS Glue · GCS" },
    { stage: "Validation", detail: "Great Expectations · quality checks" },
    { stage: "Processing", detail: "Spark · Scala · PySpark · SQL" },
    { stage: "Storage", detail: "S3 · GCS · PostgreSQL · Snowflake" },
    { stage: "Orchestration", detail: "Airflow · batch & streaming" },
    { stage: "Serving", detail: "Analytics marts · APIs" },
    { stage: "Ops", detail: "K8s · Docker · cost & performance" },
  ],

  specialization: [
    {
      title: "Large-scale ETL",
      text: "Batch and streaming pipelines built for volume, reliability, and cost.",
    },
    {
      title: "Distributed processing",
      text: "Spark / Scala / PySpark jobs tuned for performance and correctness.",
    },
    {
      title: "Data quality",
      text: "Validation, consistency checks, and metrics teams can trust.",
    },
    {
      title: "Cloud data platforms",
      text: "AWS and GCS-backed platforms with containerized workloads.",
    },
  ],

  education: [
    {
      title: "MBA — Data Science & Business Analytics",
      school: "DY Patil University",
      dates: "2025–2027",
    },
    {
      title: "Software Engineering Diploma (GNIIT)",
      school: "NIIT, New Delhi",
      dates: "2018–2021",
    },
    {
      title: "BCA",
      school: "IEC University",
      dates: "2015–2018",
    },
  ],

  certification: {
    title: "Google Cloud GenAI Program (L1–L3)",
    detail: "Wipro · Google Cloud aligned",
  },
};
