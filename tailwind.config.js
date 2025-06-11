/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    extend: {
      color:{
        type:{
          50:"#eefaff",
          100: "##dcf5ff",
          200:"#b2edff",
        }
      },
      fontFamily:{
        'blackpink': '"Koulen", sans-serif'
      }
    },
  },
  plugins: [],
}

