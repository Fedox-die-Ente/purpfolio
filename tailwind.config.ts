import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        lightColour: "#F5F5F5",
        lowPriority: "#848191",

        primary: "#7562E0",
        secondary: "#282162",
        extraDark: "#1A1A29",
        midDark: "#181824",
        darkColour: "#000036"
      },
    },
  },
  plugins: [],
};
export default config;
