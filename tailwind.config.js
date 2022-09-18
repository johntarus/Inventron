/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { lightBlue: "#2951FE" },
      backgroundColor: { mainBg: "#FFFFFF" },
      height: { maxHeight: "1080px" },
      margin: { marginLeft: "ml-16" },
    },
  },
  plugins: [],
};
