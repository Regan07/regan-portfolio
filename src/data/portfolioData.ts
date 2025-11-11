export const portfolioData = {
  name: "Regan",
  title: "Full-Stack Developer",
  tagline: "Building seamless mobile and web experiences",
  bio: "Passionate full-stack developer with expertise in building scalable web and mobile applications. I specialize in creating elegant solutions to complex problems, with a focus on performance, user experience, and clean code architecture.",
  resumeLink: "/ReganAnto_Resume.docx",
  
  hero: {
    typedSkills: [
      "Flutter", 
      "Laravel", 
      // "Docker", 
      // "AWS (EC2, EBS, S3)", 
      "React", 
      "TypeScript"
    ],
  },

  social: {
    github: "https://github.com/Regan07",
    linkedin: "https://www.linkedin.com/in/regan-anto",
    email: "regananto986@gmail.com",
    twitter: "https://twitter.com/regananto", // Add your actual Twitter handle here
  },

  skills: {
    frontend: [
      { name: "Flutter", icon: "Smartphone" },
      { name: "React", icon: "Code2" },
      { name: "TypeScript", icon: "FileCode" },
      { name: "Dart", icon: "Code2" },
      // { name: "Tailwind CSS", icon: "Palette" },
      // { name: "Next.js", icon: "Layers" },
    ],
    backend: [
      { name: "Laravel", icon: "Server" },
      // { name: "Node.js", icon: "Cpu" },
      { name: "PHP", icon: "Code" },
      { name: "REST APIs", icon: "Link" },
      { name: "GraphQL", icon: "Network" },
    ],
    devops: [
      { name: "Docker", icon: "Container" },
      { name: "AWS (EC2, EBS, S3)", icon: "Cloud" },
      { name: "CI/CD", icon: "GitBranch" },
      // { name: "Kubernetes", icon: "Boxes" },
      // { name: "Nginx", icon: "Globe" },
    ],
    database: [
      { name: "PostgreSQL", icon: "Database" },
      { name: "MySQL", icon: "Database" },
      { name: "MongoDB", icon: "Database" },
      // { name: "Redis", icon: "Zap" },
    ],
  },

  projects: [
    {
      id: 1,
      title: "RentAsst (Rental Assistance Platform)",
      description: "Full-featured rental assistance platform with real-time inventory management and payment integration.",
      image: "ecommerce",
      techStack: ["Laravel", "Flutter", "MySql", "FireBase"],
      tenure: "2024 - Present",
      contributions: [
        "Designed and developed RESTful APIs using Laravel",
        "Built cross-platform mobile app with Flutter",
        "Implemented real-time inventory tracking system",
        "Integrated payment gateway for secure transactions",
        "Set up Firebase for push notifications and analytics"
      ],
      website: "https://rentasst.com/",
      demo: "https://play.google.com/store/apps/details?id=com.processdrive.rentasst",
    },
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills.",
      image: "portfolio",
      techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
      tenure: "2025 - Present",
      contributions: [
        "Designed and developed the portfolio website using Next.js and Tailwind CSS",
        "Implemented responsive design for optimal viewing on all devices",
        "Deployed the website using github pages",
      ],
      website: "https://rentasst.com/",
    }
  ],

  experience: [
    {
      id: 1,
      role: "Full-Stack Developer",
      company: "Process Drive India pvt ltd",
      duration: "2024 Feb - Present",
      description: [
        "Im working as a Full-Stack Developer at Process Drive India Pvt Ltd since February 2024. My role involves developing and maintaining mobile application, collaborating with cross-functional teams to deliver high-quality software solutions.",
        "Integrated Firebase notifications.",
        "Implemented WhatsApp integration with customizable templates synced with WhatsApp Cloud.",
        "Developed Invoice Module.",
        "Built Couponing System.",
        "Developed Transfer Order Module.",
      ],
    }
  ],

  education: [
    {
      id: 1,
      degree: "Master of Computer Applications",
      institution: "Bharathidasan University - Thiruchirappalli",
      year: "2023 - 2025 (Pursuing)",
    },
    {
      id: 2,
      degree: "B.sc, B.Ed Mathematics",
      institution: "Pondicherry University",
      year: "2019 - 2023",
    },
  ],

  certifications: [
    {
      id: 1,
      name: "AWS Certified Solutions Architect - In Progress",
      issuer: "Udemy",
      year: "2025",
    },
    {
      id: 2,
      name: "UI/UX Design",
      issuer: "Udemy",
      year: "2025",
    },
  ],

  awards: [
    {
      id: 1,
      name: "Rising Star",
      date: "Apr 2025",
      description: "Recognized for exceptional performance and innovation in early career development",
    },
    {
      id: 2,
      name: "Best Performer of the Month",
      date: "Oct 2025",
      description: "Awarded for outstanding contribution and excellence in monthly performance metrics",
    },
  ],

  stats: {
    yearsOfExperience: 1.5,
    projectsCompleted: 3,
    techsKnown: 10,
  },
};

export type PortfolioData = typeof portfolioData;
