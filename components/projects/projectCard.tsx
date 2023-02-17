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
  <div className="grid grid-rows-6 rounded-lg border bg-slate-100 text-slate-900 p-5 hover:shadow-xl hover:shadow-slate-900">
    <div className="row-span-4 relative">
      <div className="flex absolute z-10 -top-2 -right-2 justify-end gap-2">
        <LinkBadge icon={faArrowUpRightFromSquare} to={projectLink} />
        <LinkBadge icon={faGithub} to={githubLink} />
      </div>
      <Image
        className="object-cover border-8 border-slate-900 rounded-lg hover:shadow-md hover:shadow-slate-900"
        src={preview}
        alt={name}
        fill
      />
    </div>
    <div className="row-span-2">
      <div className="mt-2">
        <h2 className="font-bold text-xl">{name}</h2>
      </div>
      <div className="mt-2">{children}</div>
      <div className="mt-3">
        <div className="flex flex-grow flex-wrap gap-2 justify-start">
          {techStack.map(t => (
            <Badge
              color="bg-slate-800 border-slate-800"
              hoverColor="hover:bg-slate-100 hover:border-blue-600 hover:text-blue-600"
              key={t}
            >
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default ProjectCard
