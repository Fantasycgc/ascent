/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center:true
    },
    extend: {
      fontFamily:{
        "nunito":['Nunito', 'system-ui'],
        "Bubblegum-Sans":["Bubblegum Sans", 'sans-serif']
      }
    },
  },
  plugins: [],
}