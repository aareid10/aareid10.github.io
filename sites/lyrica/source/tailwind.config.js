/* tailwind.config.js */

const { colors } = require('tailwindcss/defaultTheme')

module.exports = {

  theme: {

    /* extend tailwind defaults */

    extend: {

      colors: {
        primary: colors.indigo,
        secondary: colors.yellow,
        neutral: colors.gray,
      },

      fontSize: {
        hero: '48px',
        body: '18px',
      },

      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        1: '1%',
        2: '2.5%',
        5: '5%',
        10: '10%',
        15: '15%',
        20: '20%',
        25: '25%',
        30: '30%',
        35: '35%',
        40: '40%',
        45: '45%',
        50: '50%',
        55: '55%',
        60: '60%',
        65: '65%',
        70: '70%',
        75: '75%',
        80: '80%',
        85: '85%',
        90: '90%',
        95: '95%',
        100: '100%'
      },

      padding: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        1: '1%',
        2: '2.5%',
        5: '5%',
        10: '10%',
        15: '15%',
        20: '20%',
        25: '25%',
        30: '30%',
        35: '35%',
        40: '40%',
        45: '45%',
        50: '50%',
        55: '55%',
        60: '60%',
        65: '65%',
        70: '70%',
        75: '75%',
        80: '80%',
        85: '85%',
        90: '90%',
        95: '95%',
        100: '100%'
      },

      letterSpacing: {
        logo: '-.15em',
        header: '-.075em'
      },

      borderWidth: {
        32: '32px'
      }

    },

  },

  /* register tailwind plugins */

  plugins: [

      require('tailwindcss-card')({

        maxWidth: '100%',
        maxHeight: '20%',
        Height: '5%',
        borderRadius: '0',
        padding: '0'

      }),

      require("tailwind-heropatterns")({

        variants: [],

        patterns: [],

        colors: {
          default: "#19295f",
          black: "#000",
          white: "#fff",
          yellow: "#f6e05e"
        },

        opacity: {
          default: "0.1",
          "100": "1.0",
          "75": ".75",
          "50": ".5",
          "25": ".25",
          "15": ".15",
          "10": ".10",
          "5": ".05"
        }

      })

  ]

}
