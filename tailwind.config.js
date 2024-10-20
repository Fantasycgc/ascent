/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,

    },
    extend: {
      fontFamily: {
        "nunito": ['Nunito', 'system-ui'],
        "Bubblegum-Sans": ["Bubblegum Sans", 'sans-serif'],
        "jost": ["Jost", 'sans-serif']
      },
      animation: {
        "anime-img": "anime-img 20s linear 0s 9999999999 normal both",
        "anime-circle1": "anime-circle1 20s linear 0s 9999999999 normal both",
        "anime-updown": "anime-updown 13s linear 0s 9999999999 normal both",
        "anime-img2": "anime-img2 15s ease 0s 999999 normal forwards",
        "fadeInUp": "fadeInUp 5s ease-out both"

      },
      keyframes: {
        "fadeInUp": {
          "from": {
            opacity: 0,
            transform: "translate3d(0, 50%, 0)"

          },
          "to": {
            opacity: 1,
            transform: "none"
          }
        },
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
        },
        "anime-circle1": {
          "0%,100%": {
            transform: "translateX(-30px)",
          },

          "10%,30%,50%,70%": {
            transform: "translateX(-8px)",
          },

          "20%,40%,60%": {
            transform: "translateX(-40px)",
          },
          "80%": {
            transform: "translateX(-30px)",
          },
          "90%": {
            transform: "translateX(-2px)",
          }
        },
        "anime-updown": {
          "0%,100%": {
            transform: "translateY(0)",
          },
          "10%,30%,50%,70%": {
            transform: "translateY(-8px)",
          },
          "20%,40%,60%": {
            transform: "translateY(8px)",
          },
          "80%": {
            transform: "translateY(6.4px)",
          },
          "90%": {
            transform: "translateY(-6.4px)",
          }
        },
        "anime-img2": {
          "0%,100%": {
            transform: "rotate(0deg)",
            // transform-origin: "50% 50%",
          },
          "10%": {
            transform: "rotate(8deg)",
          },

          "20%,40%,60%": {
            transform: "rotate(-10deg)",
          },
          "30%,50%,70%": {
            transform: "rotate(10deg)",
          },

          "80%": {
            transform: "rotate(-8deg)",
          },
          "90%": {
            transform: "rotate(8deg)",
          }
        }
      }
    },
  },
  plugins: [],
}