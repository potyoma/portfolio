import type { Job } from "@/lib/types/job";

export const JOBS: Job[] = [
  {
    role: "Frontend Developer",
    company: { name: "Kappa", link: "https://kappa.work" },
    date: { from: "Oct 2023", to: "Present" },
    stack: ["JavaScript", "HTML/CSS", "Lit", "React", "11ty", "Next.js"],
    points: [],
  },

  {
    role: "Frontend Mentor",
    company: { name: "html academy", link: "https://htmlacademy.org/" },
    date: { from: "Jun 2023", to: "Present" },
    stack: ["JavaScript", "TypeScript", "HTML/CSS", "React", "Cypress"],
    points: [
      "Successfully lead a group of students from writing the first JS function to developing a full app",
      "Group calls with students and personal consultations",
      "Code reviews",
    ],
  },
  {
    role: "Frontend Developer",
    company: { name: "Bejamas", link: "https://bejamas.io" },
    date: { from: "Jun 2023", to: "Aug 2023" },
    stack: [
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "React",
      "Gatsby",
      "Next.js",
    ],
    points: [
      "Worked closely with design and QA team",
      "Collaborated with clients",
      "Implemented complex animations (CSS + JS)",
      "Improved styling control through CMS to optimize software engineer's involvement in website development",
      "Developed responsive layouts",
      "Estimated projects' timeline and was involved in selecting the optimal technical solutions",
    ],
  },
  {
    role: "Fullstack Developer",
    company: { name: "Versta", link: "https://versta.io/" },
    date: { from: "Jun 2021", to: "Jun 2023" },
    stack: [
      "TypeScript",
      "SQL",
      "Redux.js",
      "HTML/CSS",
      "Next.js",
      "PostgreSQL",
      "React.js",
      "ASP.NET Core",
      "C#",
      ".NET Core",
      "JavaScript",
      "Docker",
      "Kubernetes",
    ],
    points: [
      "Designed and developed logistics aggregator platform with advanced algorithmic techniques and external APIs",
      "Migrated app to Kubernetes for improved stability and scalability",
      "Created an embeddable widget for client web apps, driving business growth",
      "Improved app's observability by implementing a united logging system",
      "Reduced operational costs by optimizing requests for geographical information",
    ],
  },

  {
    role: ".NET Developer Intern",
    company: { name: "EPAM Systems", link: "https://htmlacademy.org/" },
    date: { from: "Apr 2021", to: "Jun 2021" },
    stack: ["SQL", ".NET Core", "C#", "PostgreSQL", "Docker"],
    points: [
      "Developed and extended email subscription web app functionality",
      "Optimized address tree loading speed, improving app responsiveness",
      "Utilized technical expertise in C#, .NET, and PostgreSQL",
      "Communicated effectively with colleagues, designers and project managers",
      "Consistently met project deadlines while maintaining high code quality and attention to detail",
    ],
  },
  {
    role: "Fullstack Developer",
    company: { name: "Freelance" },
    date: { from: "Aug 2020", to: "Apr 2021" },
    stack: ["JavaScript", "HTML/CSS", "React", "Bootstrap"],
    points: [
      "Took charge of developing of visually appealing, highly functional and user-friendly websites",
      "Enhanced the website's performance by optimizing key web vitals",
      "Leveraged advanced CSS and JavaScript techniques to create engaging animations",
      "Worked closely with the design team to bring their creative concepts to life",
      "Actively engaged with clients to understand their project requirements, objectives, and preferences",
    ],
  },
];
