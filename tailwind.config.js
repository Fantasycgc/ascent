/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {




    
    container: {
      center: true
   },
   fontFamily: {
      bum: ['Bubblegum Sans', 'sans-serif'],
      nunito: ['Nunito','sans-serif'],
   },
   
    extend: {
      borderRadius: {
        'xl': '50px' 
     },
     gridColumn: {
        'gril-cols': '37\%_auto'
     },
     lineHeight: {
        'leading': 'leading-\[130\%\]'
     },

     backgroundImage: {
        'egg': "url('/ascent/src/assets/images/egg-shap.png')",
        'img' : "url('/ascent/src/assets/images/bg-img.png')",
        'client': "url('/ascent/src/assets/images/service-details-5.png')",
     },

     animation: {
        "anime-img": "anime-img 20s linear 0s 9999999999 normal both",
        'lineari': 'linearr 1s linear',
        'left-right' : 'leftRight 3s ease-in-out infinite',
         'fadeOut' : 'fadeInUp 1s ease-out',
     },

     keyframes: {
        'anime-img': {
        "0%, 100%": {
          Transform: "translateX(0)",
        },

        "10%, 30%, 50%, 70%": {
           Transform: "translateX(-10px)",
        },

        "20%, 40%, 60%": {
           Transform: "translateX(10px)",
        },

        "80%": {
           Transform: "translateX(8px)",
        },

        "90%": {
           Transform: "translateX(-8px)",
        },
        },

        'linearr': {
           '0%': {
            transform: "translate3d(0,0,0)",
           },
           '100%': {
            transform: "translate3d(100%,0,0)",
        },
        },
      'leftRight': {
         '0%': { transform: 'translateX(0)' },
         '50%': { transform: 'translateX(40px)' },
         '100%': { transform: 'translateX(0)' },
       },

       'fadeInUp': {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
       }
     },
    },
  },
  plugins: [],
}