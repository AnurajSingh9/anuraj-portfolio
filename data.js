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
      "Building large-scale Spark ETL and data platforms for AdTech analytics.",
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
        "AI / LLM Evaluation",
        "RL Environments",
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
      title: "Senior Data Engineer",
      company: "JioHotstar",
      location: "Mumbai · Remote",
      dates: "Sep 2026 – Present",
      bullets: [
        "Build and maintain large-scale ETL pipelines for AdTech advertising insights and analytics.",
        "Develop and optimize distributed data applications with Apache Spark (Scala/PySpark) and SQL.",
        "Own data quality, performance, and cost efficiency across batch and streaming workloads.",
        "Partner with engineering, product, and analytics; support cloud and containerized deployments.",
      ],
      more: [],
    },
    {
      title: "AI Data Engineer",
      company: "Mercor",
      location: "Remote",
      dates: "Aug 2025 – Jul 2026",
      bullets: [
        "Architected Python, SQL, and AWS pipelines transforming 100K–500K+ records into analytics-ready datasets.",
        "Delivered 99.5%+ data accuracy through quality assurance on large workloads.",
        "Supported training, evaluation, and analytics use cases with production-minded ETL.",
      ],
      more: [],
    },
    {
      title: "Data Engineer",
      company: "Team Computers",
      location: "Remote",
      dates: "Aug 2024 – Jul 2025",
      bullets: [
        "Built ETL/ELT with Python, SQL, PySpark, and Airflow for high-volume enterprise data.",
        "Reduced manual data processing by ~50% through automation.",
        "Designed PostgreSQL/MySQL models; maintained ~99.9% production pipeline reliability.",
      ],
      more: [],
    },
    {
      title: "Project Engineer",
      company: "Wipro",
      location: "Remote (Pune)",
      dates: "Sep 2021 – Aug 2024",
      bullets: [
        "Optimized enterprise data pipelines and workflows using Python, SQL, and AWS.",
        "Resolved 100+ data-related issues daily; contributed to 4.8/5 CSAT.",
        "Cut manual reporting effort by ~25% through automation.",
      ],
      more: [],
    },
    {
      title: "RL Environments Engineer (Contract)",
      company: "Tensium",
      location: "Remote",
      dates: "Aug 2026 – Sep 2026",
      bullets: [
        "Built evaluation environments and verifier tooling in Python.",
        "Secondary to core data engineering career path.",
      ],
      more: [],
    },
    {
      title: "AI Evaluation & Benchmarks (Contract)",
      company: "Handshake AI",
      location: "Remote",
      dates: "Jul 2026 – Sep 2026",
      bullets: [
        "Built Python evaluation and reporting pipelines with Docker/Git workflows.",
        "Secondary contract work alongside data engineering focus.",
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
