import Link from "@/components/atoms/link";
import type { Contact as ContactType } from "@/lib/types/contact";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const selectIcon = (name: string) => {
  switch (name) {
    case "telegram":
      return faTelegram;
    case "github":
      return faGithub;
    case "linkedin":
      return faLinkedin;
    default:
      return faEnvelope;
  }
};

type ContactProps = {
  contact: ContactType;
};

export function Contact({ contact }: ContactProps) {
  const { icon, link, name } = contact;

  return (
    <Link
      className="rounded border-2 p-2 flex gap-2 items-center w-max"
      href={link}
      external
      target="__blank"
    >
      <FontAwesomeIcon icon={selectIcon(icon)} />
      {name}
    </Link>
  );
}
