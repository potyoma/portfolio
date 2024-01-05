import { SCHOOLS } from "@/data/resume";
import ResumeBlock from "../resume-block";
import SchoolDescription from "../school-description";

export function Education() {
  return (
    <ResumeBlock
      heading="Education"
      items={SCHOOLS}
      transform={s => <SchoolDescription school={s} />}
    />
  );
}
