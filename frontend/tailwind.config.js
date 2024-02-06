/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        "light-yellow": "#f3e98c",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
