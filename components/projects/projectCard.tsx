import Image from "next/image"
import LinkBadge from "./badge"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Badge from "../core/badge"

type Props = {
  preview: string
  projectLink: string
  githubLink: string
  children: string | JSX.Element | JSX.Element[]
  name: string
  techStack: string[]
}

const ProjectCard: React.FC<Props> = ({
  preview,
  projectLink,
  githubLink,
  children,
  techStack,
  name,
}) => (
  <div className="grid grid-rows-6 rounded-lg border border-blue-100 p-5 hover:shadow-xl hover:shadow-slate-900">
    <div className="row-span-3 relative">
      <div className="flex absolute z-10 -top-2 -right-2 justify-end gap-2">
        <LinkBadge icon={faArrowUpRightFromSquare} to={projectLink} />
        <LinkBadge icon={faGithub} to={githubLink} />
      </div>
      <Image
        className="object-cover rounded-lg hover:shadow-md hover:shadow-slate-900"
        src={preview}
        alt={name}
        fill
      />
    </div>
    <div className="row-span-1 mt-2">
      <h2 className="font-bold text-xl">{name}</h2>
    </div>
    <div className="row-span-1">{children}</div>
    <div className="row-span-1 flex flex-grow gap-2 justify-start">
      {techStack.map(t => (
        <Badge key={t}>{t}</Badge>
      ))}
    </div>
  </div>
)

export default ProjectCard
