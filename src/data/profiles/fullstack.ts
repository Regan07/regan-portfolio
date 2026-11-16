import { flutterData } from "./flutter";

// Fullstack profile: content taken from the "Fullstack developer" resume.
export const fullstackData = {
  ...flutterData,
  title: "Full-Stack Developer",
  tagline: "Building scalable web and mobile applications end to end",
  bio: "Full Stack Developer with 2 years and 9 months of experience designing, developing, and maintaining scalable web applications using C#, ASP.NET Core, .NET, React, TypeScript, and Flutter. Experienced in REST API development, database design, third-party integrations, payment gateway implementation, and cloud deployments, with a strong understanding of backend development, application architecture, and end-to-end product development.",
  resume: { file: "ReganAnto_Fullstack_Resume.pdf", filename: "ReganAnto_Fullstack_Resume.pdf" },

  hero: {
    typedSkills: ["C#", "ASP.NET Core", "React", "TypeScript", "Flutter"],
  },

  skills: {
    frontend: [
      { name: "React JS", icon: "Code2" },
      { name: "TypeScript", icon: "FileCode" },
      { name: "JavaScript", icon: "FileCode" },
      { name: "Vue JS", icon: "Code2" },
      { name: "Flutter", icon: "Smartphone" },
      { name: "Dart", icon: "Code2" },
    ],
    backend: [
      { name: "C#", icon: "Code" },
      { name: "ASP.NET Core", icon: "Server" },
      { name: ".NET 6/7/8", icon: "Server" },
      { name: "REST API Design", icon: "Link" },
      { name: "Laravel", icon: "Server" },
    ],
    devops: [
      { name: "Linux", icon: "Terminal" },
      { name: "AWS", icon: "Cloud" },
      { name: "DigitalOcean", icon: "Cloud" },
      { name: "Git & GitHub", icon: "GitBranch" },
      { name: "Sentry", icon: "Bug" },
    ],
    database: [
      { name: "MySQL", icon: "Database" },
      { name: "PostgreSQL", icon: "Database" },
      { name: "SQL", icon: "Database" },
      { name: "Firebase", icon: "Flame" },
    ],
  },

  highlightWorks: {
    backend: [
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
        title: "Razorpay Integration",
        description: "Implemented Razorpay for secure payment processing with backend validation, webhook handling, and real-time transaction status updates.",
        icon: "CreditCard",
      },
      {
        title: "Transfer Order Management",
        description: "Developed a Transfer Order module to manage and track item movements between locations.",
        icon: "ArrowRightLeft",
      },
      {
        title: "Ticket & Support Management",
        description: "Developed a support ticketing system for customer queries, ticket assignment, priority tracking, status updates, and issue resolution.",
        icon: "LifeBuoy",
      },
      {
        title: "Push Notification Integration",
        description: "Integrated Firebase notifications to deliver real-time updates and alerts.",
        icon: "Bell",
      },
    ],
    frontend: [
      {
        title: "Invoice Management UI",
        description: "Built the Invoice UI in React and TypeScript with dynamic forms, validation feedback, and lifecycle status tracking.",
        icon: "FileText",
      },
      {
        title: "Razorpay Checkout Flow",
        description: "Implemented the client-side Razorpay checkout with transaction status handling and error recovery screens.",
        icon: "CreditCard",
      },
      {
        title: "Ticket & Support UI",
        description: "Built the ticketing interface for assignment, priority tracking, and status updates, using Redux and React Router.",
        icon: "LifeBuoy",
      },
    ],
  },

  projects: [
    {
      id: 1,
      title: "RentAsst | Inventory & Rental Management System",
      description: "Inventory and rental management platform to streamline inventory tracking, rental operations, invoicing, payments, and order management.",
      image: "",
      techStack: ["React", "TypeScript", "Redux", "React Router", "C#", ".NET", "Firebase", "WhatsApp Cloud API"],
      tenure: "July 2024 - Present",
      contributions: [
        "Razorpay integration with webhook handling",
        "WhatsApp notifications via WhatsApp Cloud API",
        "Invoice management, couponing and transfer orders",
        "Firebase notifications and support ticket management",
      ],
      website: "https://rentasst.com/",
    },
    {
      id: 2,
      title: "IyarkaiOil | Oil Production & Logistics Management System",
      description: "Centralized platform to manage oil production and logistics workflows, including processing, loading, and dispatch operations.",
      image: "",
      techStack: ["React", "TypeScript", "Redux", "React Router", "C#", ".NET"],
      tenure: "April 2024 - July 2024",
      contributions: [
        "Built production, loading and dispatch workflows end to end",
      ],
    },
  ],

  experience: [
    {
      id: 1,
      role: "Full-Stack Developer",
      company: "ProcessDrive",
      duration: "Feb 2024 - Present",
      description: [
        "As a core Full-Stack Developer, I lead end-to-end application development from UI to backend integration.",
        "Implemented WhatsApp Cloud integration with reusable message templates.",
        "Designed and developed the Invoice module.",
        "Implemented Razorpay payments with webhook handling.",
        "Developed Transfer Order and Ticket & Support modules.",
      ],
    },
  ],

  education: [
    {
      id: 1,
      degree: "Master of Computer Application",
      institution: "Bharathidasan University, Trichy",
      year: "2024 - 2026",
    },
    {
      id: 2,
      degree: "B.Sc in Mathematics",
      institution: "Pondicherry University, PJP College, Pondicherry",
      year: "2019 - 2023",
    },
  ],

  certifications: [
    { id: 1, name: "Claude Certified Architect - Foundation", issuer: "Anthropic", year: "Certified" },
    { id: 2, name: "UI/UX Design Certification", issuer: "Udemy", year: "Certified" },
    { id: 3, name: "AWS Certification", issuer: "Udemy", year: "Certified" },
  ],

  awards: [
    {
      id: 1,
      name: "Creative Spark Award",
      date: "Apr 2025",
      description: "Recognized at ProcessDrive for creativity and innovation",
    },
    {
      id: 2,
      name: "Best Performer of the Month",
      date: "Oct 2025",
      description: "Awarded at ProcessDrive for outstanding monthly performance",
    },
    {
      id: 3,
      name: "Best Performer of the Month",
      date: "Aug 2026",
      description: "Awarded at ProcessDrive for outstanding monthly performance",
    },
  ],

  stats: { yearsOfExperience: 2, projectsCompleted: 2, techsKnown: 15 },
};
