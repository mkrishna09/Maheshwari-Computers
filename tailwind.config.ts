/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{json}",
  ],

  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060D14",
          900: "#0D1B2A",
          800: "#112236",
          700: "#1A3A5C",
          600: "#1E4D7B",
        },

        teal: {
          600: "#0B6E8F",
          500: "#0E89B0",
          400: "#12A5CC",
        },

        warm: {
          white: "#FAF9F7",
        },

        brand: {
          text: "#1C1C1E",
          muted: "#5C5C60",
          whatsapp: "#25A244",
        },
      },
    },
  },

  plugins: [],
};