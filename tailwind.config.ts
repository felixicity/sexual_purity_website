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
        lato: ["var(--font-lato)"],
        dancing: ["var(--font-dancing-script)"],
        aurore: ["var(--font-la-belle-aurore)"],
        kalam: ["var(--font-kalam)"],
      },
      colors: {
        lipstick: "#CD2527",
        lipred: "#B31B38",
        greenilike: "#216969",
        grey: "#70787E",
      },
    },
  },
  plugins: [],
};
export default config;
