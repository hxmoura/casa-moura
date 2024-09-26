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
        entryRight: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        exitRight: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        entryLeft: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        exitLeft: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        expand: {
          from: { width: "0px" },
          to: { width: "500px" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
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
        rotate: {
          from: { transform: "rotate(0)" },
          to: { transform: "rotate(360deg)" },
        },
        entryBottom: {
          from: { transform: "translateY(100%)", bottom: "0" },
          to: { transform: "translateY(50%)", bottom: "50%" },
        },
        exitBottom: {
          from: { transform: "translateY(50%)", bottom: "50%" },
          to: { transform: "translateY(100%)", bottom: "0" },
        },
      },
      animation: {
        entryRight: "entryRight .2s forwards",
        exitRight: "exitRight .2s forwards",
        entryLeft: "entryLeft .2s forwards",
        exitLeft: "exitLeft .2s forwards",
        expand: "expand .4s forwards",
        fadeIn: "fadeIn .3s forwards",
        fadeOut: "fadeOut .3s forwards",
        scaleUp: "scaleUp .3s forwards",
        rotate: "rotate .8s infinite linear",
        entryBottom: "entryBottom .4s forwards",
        exitBottom: "exitBottom .4s forwards",
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
          light: "#F5F5F5",
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
