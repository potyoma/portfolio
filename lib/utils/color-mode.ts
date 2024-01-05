import type { Theme } from "../types/theme";

export function getInitialColorMode(): Theme {
  if (!document) return "dark";

  const datasetTheme = document.body.dataset.theme as Theme;

  if (!!datasetTheme) return datasetTheme;

  const persistedPreference = window.localStorage.getItem(
    "color-mode"
  ) as Theme;

  if (!!persistedPreference) return persistedPreference;

  const colorMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  if (typeof colorMediaQuery.matches === "boolean")
    return colorMediaQuery.matches ? "dark" : "light";

  return "dark";
}

export function saveColorMode(theme: Theme) {
  document.body.dataset.theme = theme;
  window.localStorage.setItem("color-mode", theme);
}
