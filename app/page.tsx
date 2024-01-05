import Hero from "@/components/organisms/hero";
import Projects from "@/components/organisms/projects";
import Resume from "@/components/organisms/resume";
import Image from "next/image";
import { Education } from "../components/organisms/education/education";
import Contacts from "@/components/organisms/contacts";

export default function Home() {
  return (
    <div className="flex flex-col gap-7">
      <Hero />
      <Projects />
      <Resume />
      <Education />
      <Contacts />
    </div>
  );
}
