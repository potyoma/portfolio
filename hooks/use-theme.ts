import type { Theme } from "@/lib/types/theme";
import { getInitialColorMode, saveColorMode } from "@/lib/utils";
import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialColorMode());

  useEffect(() => {
    saveColorMode(theme);
  }, [theme]);

  return [theme, setTheme];
}
