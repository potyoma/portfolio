import type { Theme } from "@/lib/types/theme";
import { getInitialColorMode, saveColorMode } from "@/lib/utils";
import { useEffect, useState } from "react";

export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(getInitialColorMode());

  useEffect(() => {
    saveColorMode(theme);
  }, [theme]);

  const toggleTheme = () => {
    const update = theme === "dark" ? "light" : "dark";
    setTheme(update);
  };

  return [theme, toggleTheme];
}
