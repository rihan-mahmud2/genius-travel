/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#21c687",

          secondary: "#7bcaf7",

          accent: "#dae540",

          neutral: "#2C1A2E",

          "base-100": "#F9FAFB",

          info: "#4C8FDC",

          success: "#2EDC99",

          warning: "#C7A50F",

          error: "#E24B40",
        },
      },
    ],
  },
};
