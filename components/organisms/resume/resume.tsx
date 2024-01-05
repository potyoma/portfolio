import { JOBS } from "@/data/resume";
import JobDescription from "../job-description";
import ResumeBlock from "../resume-block";

export function Resume() {
  return (
    <ResumeBlock
      id="resume"
      heading="Experience"
      items={JOBS}
      transform={j => <JobDescription job={j} />}
    />
  );
}
