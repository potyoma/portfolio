import Hero from "@/components/organisms/hero";
import Projects from "@/components/organisms/projects";
import Resume from "@/components/organisms/resume";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-7">
      <Hero />
      <Projects />
      <Resume />
    </div>
  );
}
