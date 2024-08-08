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
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
        },
        gray: {
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
        },
        white: "var(--white)",
        black: "var(--black)",
      },
    },
    fontSize: {
      "bold-24": ["24px", { lineHeight: "140%", fontWeight: 700 }],
      "bold-20": ["20px", { lineHeight: "140%", fontWeight: 700 }],
      "bold-18": ["18px", { lineHeight: "140%", fontWeight: 700 }],
      "bold-14": ["14px", { lineHeight: "140%", fontWeight: 700 }],
      "semibold-24": ["24px", { lineHeight: "140%", fontWeight: 600 }],
      "semibold-20": ["20px", { lineHeight: "140%", fontWeight: 600 }],
      "semibold-18": ["18px", { lineHeight: "140%", fontWeight: 600 }],
      "semibold-16": ["16px", { lineHeight: "140%", fontWeight: 600 }],
      "medium-16": ["16px", { lineHeight: "140%", fontWeight: 500 }],
      "medium-14": ["14px", { lineHeight: "140%", fontWeight: 500 }],
      "medium-12": ["12px", { lineHeight: "140%", fontWeight: 500 }],
      "medium-10": ["10px", { lineHeight: "140%", fontWeight: 500 }],
      "regular-16": ["16px", { lineHeight: "140%", fontWeight: 400 }],
      "regular-14": ["14px", { lineHeight: "140%", fontWeight: 400 }],
      "regular-12": ["12px", { lineHeight: "140%", fontWeight: 400 }],
      "regular-10": ["10px", { lineHeight: "140%", fontWeight: 400 }],
    },
  },
  plugins: [],
};
export default config;
