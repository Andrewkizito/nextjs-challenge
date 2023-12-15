import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#cc0087",
        "white-shade": "#fcf8f7",
      },
      gap: {
        "0.5": "0.125rem",
      },
      padding: {
        "0.5": "0.125rem",
      },
      heading: {
        "0.5": "0.125rem",
      },
    },
  },
  plugins: [],
};
export default config;
