export const portfolioData = {
  name: "Regan",
  title: "Full-Stack Developer",
  tagline: "Building seamless mobile and web experiences",
  bio: "Passionate full-stack developer with expertise in building scalable web and mobile applications. I specialize in creating elegant solutions to complex problems, with a focus on performance, user experience, and clean code architecture.",
  resumeLink: "/resume.pdf",
  
  hero: {
    typedSkills: ["Flutter", "Laravel", "Docker", "AWS", "React", "TypeScript"],
  },

  social: {
    github: "https://github.com/regan",
    linkedin: "https://linkedin.com/in/regan",
    twitter: "https://twitter.com/regan",
    email: "regan@example.com",
  },

  skills: {
    frontend: [
      { name: "Flutter", icon: "Smartphone" },
      { name: "React", icon: "Code2" },
      { name: "TypeScript", icon: "FileCode" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "Next.js", icon: "Layers" },
    ],
    backend: [
      { name: "Laravel", icon: "Server" },
      { name: "Node.js", icon: "Cpu" },
      { name: "PHP", icon: "Code" },
      { name: "REST APIs", icon: "Link" },
      { name: "GraphQL", icon: "Network" },
    ],
    devops: [
      { name: "Docker", icon: "Container" },
      { name: "AWS", icon: "Cloud" },
      { name: "CI/CD", icon: "GitBranch" },
      { name: "Kubernetes", icon: "Boxes" },
      { name: "Nginx", icon: "Globe" },
    ],
    database: [
      { name: "PostgreSQL", icon: "Database" },
      { name: "MySQL", icon: "Database" },
      { name: "MongoDB", icon: "Database" },
      { name: "Redis", icon: "Zap" },
    ],
  },

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with real-time inventory management and payment integration.",
      image: "ecommerce",
      techStack: ["Laravel", "React", "PostgreSQL", "Stripe"],
      github: "https://github.com/regan/ecommerce-platform",
      demo: "https://demo.example.com",
    },
    {
      id: 2,
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with workout plans, progress analytics, and social features.",
      image: "fitness",
      techStack: ["Flutter", "Firebase", "Node.js"],
      github: "https://github.com/regan/fitness-app",
      demo: "https://demo.example.com",
    },
    {
      id: 3,
      title: "DevOps Dashboard",
      description: "Real-time monitoring dashboard for infrastructure metrics and deployment pipelines.",
      image: "dashboard",
      techStack: ["React", "Docker", "AWS", "GraphQL"],
      github: "https://github.com/regan/devops-dashboard",
      demo: "https://demo.example.com",
    },
    {
      id: 4,
      title: "Task Management System",
      description: "Collaborative task management tool with team workspaces and project tracking.",
      image: "tasks",
      techStack: ["Next.js", "Laravel", "MySQL", "Redis"],
      github: "https://github.com/regan/task-manager",
      demo: "https://demo.example.com",
    },
  ],

  experience: [
    {
      id: 1,
      role: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      duration: "2021 - Present",
      description: [
        "Led development of microservices architecture serving 100K+ users",
        "Reduced application load time by 40% through optimization",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      id: 2,
      role: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      duration: "2019 - 2021",
      description: [
        "Built and deployed 15+ client projects using Laravel and React",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with designers to create responsive interfaces",
      ],
    },
    {
      id: 3,
      role: "Mobile Developer",
      company: "App Studio",
      duration: "2017 - 2019",
      description: [
        "Developed cross-platform mobile apps with Flutter",
        "Integrated third-party APIs and payment gateways",
        "Published 8 apps to App Store and Play Store",
      ],
    },
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      year: "2017",
      description: "Graduated with honors, specialized in Software Engineering",
    },
  ],

  certifications: [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2022",
    },
    {
      id: 2,
      name: "Flutter Development Bootcamp",
      issuer: "Udemy",
      year: "2021",
    },
  ],

  stats: {
    yearsOfExperience: 7,
    projectsCompleted: 45,
    clientsSatisfied: 30,
  },
};

export type PortfolioData = typeof portfolioData;
