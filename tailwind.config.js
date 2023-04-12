/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
  ],
  safelist: [
    'text-green-800',
    'border-green-800',
    'bg-green-100',
    'text-rose-800',
    'border-rose-800',
    'bg-rose-100',
    'text-sky-800',
    'border-sky-800',
    'bg-sky-100',
    'text-orange-800',
    'border-orange-800',
    'bg-orange-100',
    'text-violet-800',
    'border-violet-800',
    'bg-violet-100',
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
