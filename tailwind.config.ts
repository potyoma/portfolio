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
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        animatebg: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "50% 50%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 3s ease infinite alternate",
        bg: "animatebg 60s linear infinite alternate",
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
