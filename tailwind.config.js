module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#09FB5B",

          "secondary": "#FDC703",

          "accent": "#42990D",

          "neutral": "#076969",

          "base-100": "#FFFFFF",

          "info": "#17233e",

          "success": "#029E9D",

          "warning": "#27334C",

          "error": "#F32B42",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

