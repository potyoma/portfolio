import { School } from "@/lib/types/school";

type SchoolsDescriptionProps = {
  school: School;
};

export function SchoolDescription({ school }: SchoolsDescriptionProps) {
  const { country, date, degree, name } = school;

  return (
    <div className="w-[100%] font-light grid grid-cols-6 gap-3 auto-rows-min text-sm">
      <h3 className="text-2xl row-start-1 col-span-4">{name}</h3>
      <span className="row-start-1 col-span-2 justify-self-end">
        {date.from}/{date.to}
      </span>
      <span className="text-primary">{country}</span>
      <ul className="row-start-3 pl-5 col-span-6 list-disc">
        <li>{degree}</li>
      </ul>
    </div>
  );
}
