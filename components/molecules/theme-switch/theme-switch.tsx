"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import Button from "@/components/atoms/button";
import { useTheme } from "@/hooks/use-theme";
import clsx from "clsx";

export function ThemeSwitch() {
  const [theme, toggle] = useTheme();

  const icon = theme === "dark" ? faSun : faMoon;

  const label = `Switch to ${theme === "light" ? "dark" : "light"} theme`;

  return (
    <Button
      onClick={toggle}
      aria-label={label}
      className="group hover:animate-spin-slow"
    >
      <FontAwesomeIcon
        className={clsx(
          `text-typography transition-colors`,
          theme === "dark"
            ? "group-hover:text-yellow-500"
            : "group-hover:text-sky-500"
        )}
        icon={icon}
      />
    </Button>
  );
}
