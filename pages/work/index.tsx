import ProjectCard from "@/components/projects/projectCard"

type Project = {
  name: string
  githubName: string
  projectLink: string
  preview: string
  description: string
  techStack: string[]
}

const projects: Project[] = [
  {
    name: "Calculator",
    projectLink: "https://calculator-one-kohl.vercel.app/",
    githubName: "calculator",
    description: "Just a calculator app running on web technologies",
    preview: "/img/calculator.png",
    techStack: ["TypeScript", "React", "TailwindCSS", "Vite"],
  },
  {
    name: "Drums",
    projectLink: "https://drum-machine-olive.vercel.app/",
    githubName: "drum-machine",
    description: "Drum machine imitator",
    preview: "/img/drums.png",
    techStack: ["TypeScript", "React", "TailwindCSS", "Vite"],
  },
  {
    name: "Portfolio",
    projectLink: "https://portfolio-xi-blue-40.vercel.app/",
    githubName: "portfolio",
    description: "My own portfolio page (you're currently viewing it)",
    preview: "/img/portfolio.png",
    techStack: ["TypeScript", "React", "Next.js", "TailwindCSS"],
  },
  {
    name: "Quotes",
    projectLink: "https://random-quote-generator-mocha-seven.vercel.app/",
    githubName: "random-quote-generator",
    description: "An app to generate random quotes",
    preview: "/img/quotes.png",
    techStack: ["TypeScript", "React", "Bootstrap"],
  },
]

const Work = () => (
  <div>
    <h1 className="text-center mt-6 font-bold text-5xl">Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 content-center  gap-5 p-8">
      {projects.map(p => (
        <ProjectCard
          key={p.name}
          name={p.name}
          githubLink={`https://github.com/potyoma/${p.githubName}`}
          projectLink={p.projectLink}
          preview={p.preview}
          techStack={p.techStack}
        >
          <p>{p.description}</p>
        </ProjectCard>
      ))}
    </div>
  </div>
)

export default Work
