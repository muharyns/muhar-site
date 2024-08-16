/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 20px 20px 0 rgba(112, 144, 176, 0.2)",
      },
      // fontFamily: {
      //   sans: ["CircularStd", "sans-serif"],
      //   'serif': ['ui-serif', 'Georgia'],
      //   // body: ['"CircularStd"'],
      //   display: ["CircularStd"],
      //   body: ['"CircularStd"'],
      // },
      // screens: {
      //   sm: "480px",
      //   md: "768px",
      //   lg: "976px",
      //   xl: "1440px",
      // },
      backgroundColor: {
        "main-20": "#F5EDFF",
      },
      fontFamily: {
        sans: ['"CircularStd"', ...defaultTheme.fontFamily.sans],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],

        // body: ['"CircularStd"'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gray-60": "#5D87A8",
        "main-50": "#AF48FF",
        "main-20": "#F5EDFF",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
    },
  },
  plugins: [],
};
