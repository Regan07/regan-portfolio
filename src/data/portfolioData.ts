import { getAssetPath, getGalleryImagePath, getResumePath } from "@/lib/assetUtils";

export const portfolioData = {
  name: "Regan",
  title: "Full-Stack Developer",
  tagline: "Building seamless mobile and web experiences",
  bio: "Passionate full-stack developer with expertise in building scalable web and mobile applications. I specialize in creating elegant solutions to complex problems, with a focus on performance, user experience, and clean code architecture.",
  resumeLink: getResumePath(),
  
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
    twitter: "", // Add your actual Twitter handle here
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

  highlightWorks: {
    backend: [
      {
        title: "Push Notification Integration",
        description: "Integrated Firebase push notifications to deliver real-time updates and alerts.",
        icon: "Bell",
      },
      {
        title: "WhatsApp Cloud Integration",
        description: "Implemented WhatsApp integration using WhatsApp Cloud, with support for customizable and reusable message templates.",
        icon: "MessageCircle",
      },
      {
        title: "Invoice Management Module",
        description: "Designed and developed a complete Invoice module, covering generation, validation, and lifecycle management.",
        icon: "FileText",
      },
      {
        title: "Couponing & Discount System",
        description: "Built a flexible Couponing system to handle discounts, offers, and promotional rules.",
        icon: "Tag",
      },
      {
        title: "RazorPay Integration",
        description: "Implemented Razorpay for secure payment processing with backend validation, webhook handling, and real-time transaction status updates.",
        icon: "CreditCard",
      },
      {
        title: "Transfer Order Management",
        description: "Developed a Transfer Order module to manage and track item movements between locations.",
        icon: "ArrowRightLeft",
      },
    ],
    frontend: [
      {
        title: "Invoice Management Module",
        description: "Built the complete Invoice UI with dynamic form generation, PDF preview, validation feedback, and lifecycle status tracking across the app.",
        icon: "FileText",
      },
      {
        title: "Couponing & Discount System",
        description: "Developed the frontend for coupon creation, discount rule configuration, and real-time promotional offer management with intuitive UX.",
        icon: "Tag",
      },
      {
        title: "RazorPay Integration",
        description: "Implemented the client-side Razorpay checkout flow with seamless payment UI, transaction status handling, and error recovery screens.",
        icon: "CreditCard",
      },
      {
        title: "Automation & Quality Assurance",
        description: "Automated major application modules using Patrol testing, ensuring stability, reliability, and regression coverage across key workflows.",
        icon: "ShieldCheck",
      },
    ],
  },

  projects: [
    {
      id: 1,
      title: "RentAsst (Rental Assistance Platform)",
      description: "Full-featured rental assistance platform with real-time inventory management and payment integration.",
      image: "",
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
      id: 2,
      title: "Eyarkai OIL",
      description: "Oil production management application for real-time production monitoring.",
      image: "",
      techStack: ["Flutter", "MySql", "FireBase"],
      tenure: "Feb 2024 - July 2024",
      contributions: [
        "Built cross-platform mobile app with Flutter for production monitoring",
        "Implemented UI for production batch tracking system",
        "Set up Firebase for push notifications"
      ],
    },
    {
      id: 3,
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

  gallery: {
    events: [
      {
        id: 1,
        title: "Tech Conference 2024",
        date: "Dec 2024",
        description: "Speaking at the annual developer conference",
        image: getGalleryImagePath("tech-conference.jpg"),
        category: "Speaking"
      },
      {
        id: 2,
        title: "Team Building Event",
        date: "Nov 2024",
        description: "Company team building and networking event",
        image: getGalleryImagePath("team-building.jpg"),
        category: "Team"
      },
      {
        id: 3,
        title: "Project Launch",
        date: "Oct 2024",
        description: "Successful launch of RentAsst platform",
        image: getGalleryImagePath("project-launch.jpg"),
        category: "Achievement"
      },
      {
        id: 4,
        title: "Hackathon Win",
        date: "Sep 2024",
        description: "First place at local hackathon competition",
        image: getGalleryImagePath("hackathon.jpg"),
        category: "Competition"
      },
      {
        id: 5,
        title: "Workshop Facilitation",
        date: "Aug 2024",
        description: "Conducting Flutter development workshop",
        image: getGalleryImagePath("workshop.jpg"),
        category: "Teaching"
      },
      {
        id: 6,
        title: "Award Ceremony",
        date: "Apr 2024",
        description: "Receiving Rising Star award",
        image: getGalleryImagePath("award-ceremony.jpg"),
        category: "Recognition"
      }
    ]
  },

  stats: {
    yearsOfExperience: 2,
    projectsCompleted: 3,
    techsKnown: 15,
  },
};

export type PortfolioData = typeof portfolioData;
