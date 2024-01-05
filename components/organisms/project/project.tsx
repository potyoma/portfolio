import Link from "@/components/atoms/link";
import type { Project as ProjectType } from "@/lib/types/project";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

type ProjectProps = {
  project: ProjectType;
};

export function Project({ project }: ProjectProps) {
  const { name, description, github, demo, image, tech } = project;

  return (
    <div className="flex flex-col gap-8 text-typography max-w-[31rem]">
      <Image
        className="rounded object-cover h-64 sm:h-80"
        src={image}
        alt={`Project ${name} screenshot`}
        width="500"
        height="350"
      />
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h3 className="text-2xl">{name}</h3>
          <div className="flex gap-4">
            {github && (
              <Link target="__blank" external href={github}>
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            )}
            {demo && (
              <Link target="__blank" external href={demo}>
                <FontAwesomeIcon icon={faLink} />
              </Link>
            )}
          </div>
        </div>
        <p>{description}</p>
        <p className="text-primary">{tech.join(" - ")}</p>
      </div>
    </div>
  );
}
