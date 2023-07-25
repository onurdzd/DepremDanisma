/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "theme-blue": "#243c5a",
        "theme-yellow": "#F6BE31",
        "theme-dark": "#000C5C",
      },
    },
  },
  plugins: [],
};
