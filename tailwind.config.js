/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    textColor: {
      white: "#FFF",
      black: "#000",
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {},
  },
  plugins: [],
}
