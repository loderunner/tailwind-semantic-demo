import defaultTheme from "tailwindcss/defaultTheme";
import thePlugin from "./plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  plugins: [thePlugin],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        neutral: {
          30: "rgba(251, 251, 251, 1)",
          40: "rgba(247, 247, 247, 1)",
          50: "rgba(241, 241, 241, 1)",
          60: "rgba(237, 237, 237, 1)",
          70: "rgba(227, 227, 227, 1)",
          80: "rgba(212, 212, 212, 1)",
          90: "rgba(191, 191, 191, 1)",
          100: "rgba(170, 170, 170, 1)",
          200: "rgba(149, 149, 149, 1)",
          300: "rgba(127, 127, 127, 1)",
          400: "rgba(106, 106, 106, 1)",
          500: "rgba(85, 85, 85, 1)",
          600: "rgba(64, 64, 64, 1)",
          700: "rgba(52, 52, 52, 1)",
          800: "rgba(43, 43, 43, 1)",
          900: "rgba(22, 22, 22, 1)",
        },
      },
      width: {
        card: "320px",
      },
      height: {
        card: "200px",
      },
      borderRadius: {
        card: defaultTheme.borderRadius.lg,
      },
      padding: ({ theme }) => ({
        card: theme("spacing.8"),
      }),
      backgroundColor: ({ theme }) => ({
        card: theme("colors.neutral.60"),
        "card-dark": theme("colors.neutral.500"),
      }),
      borderColor: ({ theme }) => ({
        card: theme("colors.neutral.70"),
        "card-dark": theme("colors.neutral.400"),
      }),
      textColor: ({ theme }) => ({
        card: theme("colors.neutral.700"),
        "card-dark": theme("colors.neutral.40"),
      }),
    },
  },
  plugins: [],
};
