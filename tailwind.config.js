/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color: "#fff",
        ca: "#cacaca",
        lightsteelblue: "#bdd7f1",
        gray: "rgba(34, 38, 42, 0.7)",
        main: "#99b7c2",
        palegoldenrod: "#fffcb8",
        dimgray: "#51595e",
        color1: "#90b1eb",
        darkslategray: "#333",
        menucolor: "#434343",
        menuborder: "#757575"
      },
      spacing: {},
      fontFamily: {
        "noto-sans-jp": "'Noto Sans JP'",
        "zen-kaku-gothic-new": "'Zen Kaku Gothic New'",
        font: "Jost",
      },
      borderRadius: {
        xl: "20px",
        "11xl": "30px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      "17xl": "36px",
      "15xl": "34px",
      base: "16px",
      "5xl": "24px",
      "34xl": "53px",
      mid: "17px",
      lg: "18px",
      xl: "20px",
      "14xl": "33px",
      "20xl": "39px",
      "27xl": "46px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
