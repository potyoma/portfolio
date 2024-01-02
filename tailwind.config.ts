import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        background: "var(--color-background)",
        buttons: "var(--color-buttons)",
        typography: "var(--color-typography)",
        heading: "var(--color-heading)",
        icons: "var(--color-icons)",
      },
    },
  },
  plugins: [],
};
export default config;
