export const portfolioData = {
  name: "Regan",
  title: "Full-Stack Developer",
  tagline: "Building seamless mobile and web experiences",
  bio: "Passionate full-stack developer with expertise in building scalable web and mobile applications. I specialize in creating elegant solutions to complex problems, with a focus on performance, user experience, and clean code architecture.",
  resumeLink: "/resume.pdf",
  
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
    }
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
    yearsOfExperience: 1.5,
    projectsCompleted: 3,
    techsKnown: 5,
  },
};

export type PortfolioData = typeof portfolioData;
