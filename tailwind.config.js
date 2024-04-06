/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'click':"0 0 10px 5px rgba(50, 132, 255, 0.30)",
        'shadowLight':"5px 5px 10px 0px rgba(50, 132, 255, 0.10)",
        'xl':"5px 5px 10px 0px rgba(50, 132, 255, 0.30)",
        '2xl':"5px 5px 20px 0px rgba(50, 132, 255, 0.50)",
        '3xl':"15px 25px 25px 0px rgba(50, 132, 255, 0.30)",
        '4xl':"15px 25px 25px 0px rgba(50, 132, 255, 0.50)",
        '5xl':"2px 2px 60px 0px rgba(50, 132, 255, 0.50)"
    },
  },
  },
  plugins: [],
}