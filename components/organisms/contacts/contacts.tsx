import { CONTACTS } from "@/data/contacts";
import ResumeBlock from "../resume-block";
import Contact from "@/components/molecules/contact";

export function Contacts() {
  return (
    <ResumeBlock heading="Contacts">
      <ul className="flex flex-wrap gap-4">
        {CONTACTS.map((c, i) => (
          <li key={i}>
            <Contact contact={c} />
          </li>
        ))}
      </ul>
    </ResumeBlock>
  );
}
