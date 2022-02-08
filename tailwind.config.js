const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  purge: [
    "./public/**/*.html",
    "./public/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],

  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",

        dark: "#101010",
        accent1: "#0d6efd",
        accent2: "#FE7745",
        accent3: "#FFD947",
        accent4: "#0d6efd",
        alpha: "#DDDDDD",
        dark2: "#1E1E1E",
        cobra: "#242424",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
