/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        SwitzerR: 'SwitzerR',
        SwitzerB: 'SwitzerB',
        SwitzerM: 'SwitzerM',
        CanelaC: 'CanelaC',
        SoehneSD: 'SoehneSD',
        SoehneSH: 'SoehneSH'
      }
    },
  },
  plugins: [],
};
