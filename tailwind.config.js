/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
 ],
 theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#FFD700', // Yellow for primary
        light: '#FFEA75',
        dark: '#BDB76B',
      },
      secondary: {
        DEFAULT: '#FF4500', // Red for secondary
        light: '#FF6347',
        dark: '#B22222',
      },
      // Add more custom colors as needed
    },
  },
  fontFamily: {
    showtime: ['showtime', 'sans-serif'],
    wonderbar: ['wonderbar', 'sans-serif'],
  }
},
  plugins: [
    require("tailgrids/plugin"),
    require('@tailwindcss/typography'),
  ],
}