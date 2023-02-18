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

          "neutral": "#66FF1E",

          "base-100": "#FFFFFF",

          "info": "#07FFD2",

          "success": "#1E78FF",

          "warning": "#8E3785",

          "error": "#F32B42",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

