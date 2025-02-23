/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.jsx",
    "./src/components/Home/*.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};

