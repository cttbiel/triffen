import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        triffen: {
          black: "#0b0b0b",
          dark: "#121212",
          surface: "#181818",
          border: "#262626",
          muted: "#888888",
          light: "#f5f5f5",
          sand: "#d5c5b2",
          earth: "#5a4336",
          plum: "#4c2e4f",
        },
      },
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
        mega: ".4em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
