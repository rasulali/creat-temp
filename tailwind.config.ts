import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)"],
      },
      screens: {
        "4xl": "2752px",
      },
      colors: {
        brandColor: "#292D3A",
        grayA: "#303030",
        grayALight: "#4A4A4A",
        accentColor: "#41372e",
        creatBlue: "#001b46",
        creatViolet: "#ed145a",
        creatVioletDark: "#c00848",
      },
      animation: {
        rotateY: "rotateY 2s linear infinite",
        rotateYEnds: "rotateY 2s forwards ",
        appear: "appear 2s ease-in-out forwards",
        down: "down 2s linear 2s infinite",
        right: "right 2s linear 2s infinite",
        left: "left 2s linear 2s infinite",
        "spin-once": "spin 1s ease-in-out forwards",
        scrollLeft: "scrollLeft 35s linear infinite",
        fadingBlur: "fadingBlur 2.4s linear forwards",
        infiniteScroll: "slide 12s forwards linear infinite",
      },
      keyframes: {
        slide: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2px))",
          },
        },
        fadingBlur: {
          "0%": {
            "backdrop-filter": "blur(0px)",
          },
          "100%": {
            "backdrop-filter": "blur(24px)",
          },
        },
        scrollLeft: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 16px))",
          },
        },
        rotateY: {
          from: {
            transform: "rotateY(0deg)",
          },
          to: {
            transform: "rotateY(360deg)",
          },
        },
        appear: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        down: {
          "0%": {
            transform: "translate3d(0px, 0px, 0px)",
            opacity: "0",
          },
          "33%": {
            opacity: "1",
          },
          "66%": {
            opacity: "1",
          },
          "100%": {
            transform: "translate3d(0px, 30px, 0px)",
            opacity: "0",
          },
        },
        right: {
          "0%": {
            transform: "translate3d(0px, 0px, 0px)",
            opacity: "0",
          },
          "33%": {
            opacity: "1",
          },
          "66%": {
            opacity: "1",
          },
          "100%": {
            transform: "translate3d(15px, 0px, 0px)",
            opacity: "0",
          },
        },
        left: {
          "0%": {
            transform: "translate3d(0px, 0px, 0px)",
            opacity: "0",
          },
          "33%": {
            opacity: "1",
          },
          "66%": {
            opacity: "1",
          },
          "100%": {
            transform: "translate3d(-15px, 0px, 0px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "animate-duration": (value: number) => ({
            animationDuration: value,
          }),
        },
        { values: theme("transitionDuration") },
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") },
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-ease": (value) => ({
            animationTimingFunction: value,
          }),
        },
        { values: theme("transitionTimingFunction") },
      );
    }),
  ],
};
export default config;
