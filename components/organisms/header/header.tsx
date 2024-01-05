import ThemeSwitch from "@/components/molecules/theme-switch";
import { LINKS } from "@/data/header";
import Link from "@/components/atoms/link";

export function Header() {
  return (
    <header className="content-block w-[100%] max-w-screen-lg md:px-5">
      <nav className="flex justify-between py-7 px-2">
        <Link className="text-typography uppercase" href="/">
          potyoma.
        </Link>
        <ul className="flex gap-2 md:gap-5">
          {LINKS.map(({ name, href }) => (
            <li key={name}>
              <Link className="text-typography" href={href}>
                {name}
              </Link>
            </li>
          ))}
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
}
