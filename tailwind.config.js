/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "yellow":"#FFFFD2",
        "pink":"#FCBAD3",
        "purple":"#AA96DA",
        "blue":"#A8D8EA",
        "grey":"#EAE7DC",
        "dark-grey":"#D8c3A5",
        "black":"#8E8D8A",
        "light-red":"#E98074",
        "red":"#E85A4F",
      },
     
    },
  },
  plugins: [],
}