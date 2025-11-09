/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // blue
        accent: "#16a34a",  // green
      },
    },
  },
  plugins: [],
};
