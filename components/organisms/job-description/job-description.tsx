import Link from "@/components/atoms/link";
import { Job } from "@/lib/types/job";

type JobDescriptionProps = {
  job: Job;
};

export function JobDescription({ job }: JobDescriptionProps) {
  const { company, role, date, points, stack } = job;

  return (
    <div className="w-[100%] font-light grid grid-cols-6 gap-3 auto-rows-min text-sm">
      <h3 className="text-2xl row-start-1 col-span-4">{role}</h3>
      <span className="row-start-1 col-span-2 justify-self-end">
        {date.from} - {date.to}
      </span>
      <Link external href={company.link ?? ""} className="text-primary">
        {company.name}
      </Link>
      <span className="text-primary row-start-3 col-span-6">
        {stack.join(" - ")}
      </span>
      <ul className="row-start-4 pl-5 col-span-6 list-disc">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
