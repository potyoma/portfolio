"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import Button from "@/components/atoms/button";
import { useTheme } from "@/hooks/use-theme";

export function ThemeSwitch() {
  const [theme, toggle] = useTheme();

  const icon = theme === "dark" ? faSun : faMoon;

  return (
    <Button onClick={toggle}>
      <FontAwesomeIcon className="text-typography" icon={icon} />
    </Button>
  );
}
