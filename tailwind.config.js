/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        "nunito": ['Nunito', 'system-ui'],
        "Bubblegum-Sans": ["Bubblegum Sans", 'sans-serif'],
        "jost": ["Jost", 'sans-serif']
      },
      animation: {
        "anime-img": "anime-img 20s linear 0s 9999999999 normal both",
      },
      keyframes: {
        "anime-img": {
          "0%,100%": {
            transform: "translateX(0)",
          },

          "10%,30%,50%,70%": {
            transform: "translateX(-10px)",
          },

          "20%,40%,60%": {
            transform: "translateX(10px)",
          },
          "80%": {
            transform: "translateX(8px)",
          },
          "90%": {
            transform: "translateX(-8px)",
          }
        }
      }
    },
  },
  plugins: [],
}