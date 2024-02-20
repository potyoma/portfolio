import type { Project } from "@/lib/types/project";

export const PROJECTS: Project[] = [
  {
    name: "Image Keeper",
    description: "The app allows you to upload and view saved images.",
    github: "https://github.com/potyoma/image-uploader",
    demo: "https://image-uploader-fe.onrender.com/",
    tech: [
      "Node.js",
      "Nest",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "React.js",
      "Next.js",
      "Zustand",
      "HTML/CSS",
    ],
    image: "/images/projects/image-uploader.webp",
  },
  {
    name: "Rock, Paper, Scissors",
    description: "Everyone knows this game!",
    github: "https://github.com/potyoma/rock-paper-scissors",
    demo: "https://rock-paper-scissors-potyoma.vercel.app/",
    tech: ["Vite", "React", "TypeScript", "Styled Components", "HTML/CSS"],
    image: "/images/projects/rock-paper-scissors.webp",
  },
  {
    name: "GitHub Explorer",
    description: "Find users on Github abd explore their repositories.",
    github: "https://github.com/potyoma/github-explorer",
    demo: "https://github-explorer-snowy.vercel.app/",
    tech: ["Vite", "React", "TypeScript", "HTML/CSS"],
    image: "/images/projects/github-explorer.webp",
  },
];
