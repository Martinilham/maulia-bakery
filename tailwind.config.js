/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        goldenrod: {
          "100": "#f1c74e",
          "200": "rgba(241, 199, 78, 0.25)",
        },
        black: "#000",
        gray: "#c6c6c6",
        "main-color": "#e6af10",
        darkgoldenrod: {
          "100": "#b37d00",
          "200": "rgba(179, 125, 0, 0.09)",
        },
        gray1: "#707b6a",
      },
      spacing: {},
      fontFamily: {
        "body-large": "Inter",
        sniglet: "Sniglet",
      },
      borderRadius: {
        "2xl": "21px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      xl: "20px",
      "21xl": "40px",
      "5xl": "24px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
