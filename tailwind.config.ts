import type { Config } from "tailwindcss";

type PluginAPI = {
  addUtilities: (
    utilities: Record<string, object>,
    options?: { respectPrefix?: boolean; respectImportant?: boolean },
  ) => void;
};

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          350: "var(--primary-350)",
          400: "var(--primary-400)",
          450: "var(--primary-450)",
          500: "var(--primary-500)",
        },
        blue: {
          50: "var(--blue-50)",
          100: "var(--blue-100)",
          200: "var(--blue-200)",
          300: "var(--blue-300)",
          400: "rgb(from var(--blue-400) r g b / <alpha-value>)",
          500: "rgb(from var(--blue-500) r g b / <alpha-value>)",
        },
        gray: {
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          150: "var(--gray-150)",
          200: "var(--gray-200)",
          250: "var(--gray-250)",
          300: "var(--gray-300)",
          400: "rgb(from var(--gray-400) r g b / <alpha-value>)",
          450: "var(--gray-450)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
        },
        white: "var(--white)",
        black: "var(--black)",
      },
      animation: {
        tilt: "tilt 0.5s ease-in-out forwards",
        moveUp: "moveUp 1s ease-in-out forwards",
        fadeIn: "fadeIn 1s ease-in-out forwards",
        scaleUp: "scaleUp 0.8s ease-in-out forwards",
        downUp: "downUp 1.5s ease-in forwards",
      },
      keyframes: {
        tilt: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(12deg)" },
        },
        moveUp: {
          "0%": { transform: "translateY(0) translateX(0) scale(1)" },
          "40%, 50%": { transform: "translateY(10px) translateX(10px) scale(1)" },
          "100%": { transform: "translateY(-35px) translateX(-15px) scale(0.9)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(1)", "transform-origin": "left bottom" },
          "100%": { transform: "scale(1.2)", "transform-origin": "left bottom" },
        },
        downUp: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "40%, 60%": { transform: "translateY(30px) translateX(20px)" },
          "100%": { transform: "translateY(0px) translateX(20px)" },
        },
      },
    },
    fontSize: {
      "bold-24": ["24px", { lineHeight: "140%", fontWeight: 700 }],
      "bold-20": ["20px", { lineHeight: "140%", fontWeight: 700 }],
      "bold-18": ["18px", { lineHeight: "140%", fontWeight: 700 }],
      "bold-16": ["16px", { lineHeight: "140%", fontWeight: 700 }],
      "bold-14": ["14px", { lineHeight: "140%", fontWeight: 700 }],
      "bold-12": ["12px", { lineHeight: "140%", fontWeight: 700 }],
      "semibold-24": ["24px", { lineHeight: "140%", fontWeight: 600 }],
      "semibold-20": ["20px", { lineHeight: "140%", fontWeight: 600 }],
      "semibold-18": ["18px", { lineHeight: "140%", fontWeight: 600 }],
      "semibold-16": ["16px", { lineHeight: "140%", fontWeight: 600 }],
      "semibold-14": ["14px", { lineHeight: "140%", fontWeight: 600 }],
      "semibold-12": ["12px", { lineHeight: "140%", fontWeight: 600 }],
      "semibold-10": ["10px", { lineHeight: "140%", fontWeight: 600 }],
      "medium-20": ["20px", { lineHeight: "140%", fontWeight: 500 }],
      "medium-18": ["18px", { lineHeight: "140%", fontWeight: 500 }],
      "medium-16": ["16px", { lineHeight: "140%", fontWeight: 500 }],
      "medium-14": ["14px", { lineHeight: "140%", fontWeight: 500 }],
      "medium-12": ["12px", { lineHeight: "140%", fontWeight: 500 }],
      "medium-10": ["10px", { lineHeight: "140%", fontWeight: 500 }],
      "medium-8": ["8px", { lineHeight: "140%", fontWeight: 500 }],
      "regular-28": ["28px", { fontWeight: 500 }],
      "regular-16": ["16px", { lineHeight: "140%", fontWeight: 400 }],
      "regular-14": ["14px", { lineHeight: "140%", fontWeight: 400 }],
      "regular-12": ["12px", { lineHeight: "140%", fontWeight: 400 }],
      "regular-10": ["10px", { lineHeight: "140%", fontWeight: 400 }],
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".hidden-scrollbar": {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
        },
        ".hidden-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      });
    },
  ],
};
export default config;
