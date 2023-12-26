/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    

  ],
  daisyui: {
    themes: ["light", "dark", "emerald"],
  },
}

