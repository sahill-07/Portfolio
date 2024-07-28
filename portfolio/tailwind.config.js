/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        'display' : ['Poppins' , 'sans-serif'],
        'body' : ['Inter' , 'sans-serif']
      }
    },
  },
  plugins: [],
}

