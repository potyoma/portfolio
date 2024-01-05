import ThemeSwitch from "@/components/molecules/theme-switch";
import { LINKS } from "@/data/header";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <nav className="flex justify-between py-3 px-2">
        <Link className="text-typography uppercase" href="/">
          potyoma.
        </Link>
        <ul className="flex gap-2">
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
