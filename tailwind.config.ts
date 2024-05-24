import type { Config } from "tailwindcss";
import responsive from "./src/utils/breakpoints";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "500": "500%",
      },
      keyframes: {
        entryRightSide: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        exitRightSide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        entryLeftSide: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        exitLeftSide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        expand: {
          from: { width: "0px" },
          to: { width: "500px" },
        },
        fadeIn: {
          "0%, 80%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "90%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "entryRightSide-300": "entryRightSide .3s forwards",
        "exitRightSide-300": "exitRightSide .3s forwards",
        "entryRightSide-200": "entryRightSide .2s forwards",
        "exitRightSide-200": "exitRightSide .2s forwards",
        "entryLeftSide-200": "entryLeftSide .2s forwards",
        "exitLeftSide-200": "exitLeftSide .2s forwards",
        expand: "expand .4s forwards",
        fadeIn: "fadeIn .3s forwards",
        fadeOut: "fadeOut 1s forwards",
        scaleUp: "scaleUp .2s forwards",
      },
      colors: {
        brand: {
          primary: "#34219F",
          primaryLight: "#4935B7",
          primaryDark: "#281787",
          secondary: "#FF3E41",
          secondaryLight: "#FF5053",
          secondaryDark: "#DD2B2E",
        },
        text: {
          main: "#3E3E3E",
          light: "#9A9A9A",
          dark: "#292929",
        },
        background: {
          light: "#FAFAFA",
          softLight: "#E9E9E9",
          dark: "#1B1B1B",
          softDark: "#5F5F5F",
        },
        notify: {
          success: "#6DB95A",
          error: "#DD5E5E",
          warning: "#D89614",
          info: "#177DDC",
        },
      },
      maxWidth: {
        container: "1368px",
        // container: '1320px',
      },
    },
    screens: {
      md: `${responsive.breakpoints.md}px`, // Minimum 450px ( tablet )
      lg: `${responsive.breakpoints.lg}px`, // Minimum 900px ( desktop )
    },
  },
  plugins: [],
};
export default config;
