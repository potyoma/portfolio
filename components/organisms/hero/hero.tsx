import ContactLink from "@/components/molecules/contact-link";
import PrettyHeading from "@/components/molecules/pretty-heading";
import { INTRODUCTION } from "@/data/hero";

export function Hero() {
  const { intro, name, bio } = INTRODUCTION;

  return (
    <div className="content-block p-3 flex flex-col gap-3 md:py-7 md:px-5">
      <p className="text-typography font-extralight">{intro}</p>
      <PrettyHeading className="text-5xl">{name}</PrettyHeading>
      <p className="text-typography font-extralight">{bio}</p>
      <ContactLink />
    </div>
  );
}
