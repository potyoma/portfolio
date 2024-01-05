import { PROJECTS } from "@/data/projects";
import Project from "../project";

export function Projects() {
  return (
    <div
      id="projects"
      className="content-block w-100 p-3 md:py-7 md:px-5 flex flex-col gap-12"
    >
      <h2 className="uppercase text-typography font-light text-lg">
        Featured projects
      </h2>
      <ul className="grid justify-center sm:grid-cols-2 gap-14">
        {PROJECTS.map(p => (
          <li key={p.name.replace(" ", "-")}>
            <Project project={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
