/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#212121",
        secandari: "#009966",
        brand: "#9b9fa5",
      },
      fontFamily: {
        Popins: ["Poppins", "sans-serif"],
        NunitoFont: ["Nunito", "sans-serif"],
        Opensans: ["Open Sans", "sans-serif"],
        Monrope: ["Manrope", "serif"],
      },
    },
  },
  plugins: [],
};