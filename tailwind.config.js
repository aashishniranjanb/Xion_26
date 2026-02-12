/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: "#FFD700",
          light: "#F4C430",
          dark: "#DAA520"
        },
        black: {
          deep: "#0A0A0A",
          primary: "#1A1A1A",
          secondary: "#2A2A2A"
        }
      },
      fontFamily: {
        futuristic: ["Orbitron", "sans-serif"],
        techno: ["Rajdhani", "sans-serif"]
      }
    },
  },
  plugins: [],
}
