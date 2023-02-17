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
    techStack: ["React", "TailwindCSS", "Vite"],
  },
]

const Work = () => (
  <div className="flex flex-grow justify-around items-center">
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
)

export default Work
