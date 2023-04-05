/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'text-cyan-800',
    'text-blue-800',
    'text-purple-800',
    'text-orange-800',
    'text-green-800',
    'border-cyan-800',
    'border-blue-800',
    'border-purple-800',
    'border-orange-800',
    'border-green-800',
    'bg-cyan-100',
    'bg-blue-100',
    'bg-purple-100',
    'bg-orange-100',
    'bg-green-100',
  ],
  theme: {
    extend: {
      colors:
      {
        white: "#FFF",
        black: "#000",
        red: "#FF5925",
        blue: "#3E83FB",
        yellow: "#FBBF24"
      }
    }
  },
  plugins: [],
}
