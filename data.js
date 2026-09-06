/** Site configuration and resume-backed content. */
window.SITE = {
  profile: {
    name: "Anuraj Singh",
    prompt: "anuraj@dev:~$",
    email: "anurajsingh0909@gmail.com",
    phone: "+91 9838242460",
    location: "India",
    availability: "Open to Remote",
    role: "Senior Software Engineer",
    focusLine: "AI / ML · Data Engineering · Backend",
    github: "https://github.com/AnurajSingh9",
    linkedin: "https://www.linkedin.com/in/anuraj-singh/",
    resume: "./assets/Anuraj-Singh-Resume.pdf",
    summary:
      "Building production-grade AI evaluation systems, RL/agent environments, and scalable data platforms.",
  },

  proof: [
    { value: "5+", label: "Years professional experience" },
    { value: "100K–500K+", label: "Records processed for AI-ready datasets" },
    { value: "99.5%+", label: "Data accuracy on AI-ready pipelines" },
    { value: "99.9%", label: "Production pipeline reliability" },
    { value: "50%", label: "Reduction in manual data processing" },
    { value: "100+", label: "Data issues resolved daily (Wipro)" },
  ],

  skills: [
    {
      title: "AI / ML",
      items: [
        "AI Model Evaluation",
        "RL / Agent Environments",
        "LLM Evaluation",
        "LangChain",
        "OpenAI API",
        "RAG",
        "Prompt Evaluation",
        "Verifiers & Reward Design",
        "Adversarial Soundness Testing",
      ],
    },
    {
      title: "Programming",
      items: ["Python", "SQL"],
    },
    {
      title: "Data Engineering",
      items: [
        "Apache Spark",
        "PySpark",
        "Spark SQL",
        "Apache Airflow",
        "Kafka",
        "AWS Glue",
        "dbt",
        "Delta Lake",
      ],
    },
    {
      title: "Data / Storage",
      items: [
        "Pandas",
        "NumPy",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Snowflake",
        "Redis",
        "Parquet",
        "Avro",
        "Great Expectations",
      ],
    },
    {
      title: "Cloud",
      items: ["AWS", "S3", "Lambda", "Redshift", "IAM", "EC2"],
    },
    {
      title: "Backend / DevOps",
      items: [
        "FastAPI",
        "REST APIs",
        "Docker",
        "Git",
        "GitHub",
        "GitHub Actions",
        "Linux",
        "Jenkins",
        "Prometheus",
      ],
    },
  ],

  projects: [
    {
      name: "EvalForge",
      label: "Production LLM Evaluation Platform",
      tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS S3"],
      description:
        "Production LLM evaluation platform focused on regression gates, CI gate-checks, multi-turn trajectory evaluation, result traces, multi-provider inference, async workers, data quality validation, and Prometheus monitoring.",
      highlights: [
        "Regression Gates",
        "CI Evaluation",
        "Trajectory Evaluation",
        "Async Workers",
        "Observability",
      ],
      github: "https://github.com/AnurajSingh9/evalforge",
      secondaryLabel: "Release",
      secondaryUrl: "https://github.com/AnurajSingh9/evalforge/releases/tag/v2.0.0",
    },
    {
      name: "ledger-repair",
      label: "AI Agent Evaluation Environment",
      tech: ["Python", "SQL"],
      description:
        "RL evaluation environment for AI agent debugging with oracle grading and soundness verification.",
      highlights: ["RL Evaluation", "Oracle Grading", "Soundness Verification"],
      github: "https://github.com/AnurajSingh9/ledger-repair",
      secondaryLabel: null,
      secondaryUrl: null,
    },
  ],

  experience: [
    {
      title: "Senior Software Engineer — RL Environments",
      company: "Tensium",
      location: "Remote",
      dates: "Aug 2026 – Present",
      bullets: [
        "Design and implement RL/agent evaluation environments for frontier coding models.",
        "Build task specs, synthetic datasets, and reward/verifier logic.",
        "Run adversarial soundness testing so grading tracks real task completion.",
      ],
      more: [],
    },
    {
      title: "Senior Software Engineer — AI Evaluation & Benchmarks",
      company: "Handshake AI",
      location: "Remote",
      dates: "Jul 2026 – Present",
      bullets: [
        "Build Python evaluation pipelines for automated benchmark execution and LLM quality assessment.",
        "Create benchmark datasets and reporting pipelines with Docker, Git, and Linux workflows.",
        "Use deterministic validation for reproducible evaluation runs.",
      ],
      more: [],
    },
    {
      title: "AI Data Engineer",
      company: "Mercor",
      location: "Remote",
      dates: "Aug 2025 – Jul 2026",
      bullets: [
        "Architect Python, SQL, and AWS pipelines transforming 100K–500K+ records into AI-ready datasets.",
        "Support LLM training, evaluation, and analytics workloads with strong QA practices.",
        "Delivered 99.5%+ data accuracy on AI-ready data platforms.",
      ],
      more: [],
    },
    {
      title: "Data Engineer",
      company: "Team Computers",
      location: "Remote",
      dates: "Aug 2024 – Jul 2025",
      bullets: [
        "Build ETL/ELT pipelines with Python, SQL, PySpark, and Airflow for high-volume enterprise data.",
        "Cut manual data processing by 50% through automation.",
        "Design PostgreSQL/MySQL models and maintain 99.9% production pipeline reliability.",
      ],
      more: [],
    },
    {
      title: "Project Engineer",
      company: "Wipro",
      location: "Remote (Pune)",
      dates: "Sep 2021 – Aug 2024",
      bullets: [
        "Optimize enterprise data pipelines and workflows using Python, SQL, and AWS.",
        "Resolve 100+ data-related issues daily while contributing to 4.8/5 CSAT.",
        "Reduce manual reporting effort by 25% through automation and analytics.",
      ],
      more: [],
    },
  ],

  architecture: [
    { stage: "Ingestion", detail: "APIs · Kafka · AWS Glue" },
    { stage: "Validation", detail: "Great Expectations · QA checks" },
    { stage: "Processing", detail: "Python · Spark · PySpark" },
    { stage: "Storage", detail: "PostgreSQL · S3 · Snowflake · Redis" },
    { stage: "Evaluation / ML", detail: "LLM Evaluation · RAG · RL Environments" },
    { stage: "Serving", detail: "FastAPI · REST" },
    { stage: "Observability", detail: "Prometheus · logging · metrics" },
  ],

  specialization: [
    {
      title: "Benchmark Engineering",
      text: "Reproducible evaluation workflows for LLM and agent systems.",
    },
    {
      title: "Verifier Design",
      text: "Deterministic grading and reward logic you can trust.",
    },
    {
      title: "Soundness Testing",
      text: "Adversarial checks so evaluation tracks real completion.",
    },
    {
      title: "LLM Pipelines",
      text: "Evaluation, RAG, and GenAI workflows for production use.",
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
