/* tailwind.config.js */

const { colors } = require('tailwindcss/defaultTheme')

module.exports = {

  theme: {

    /* replace tailwind defaults */

    screens: {
      laptopLg: '1440px',
      laptopMd: '1366px',
      laptopSm: '1280px',
      tabletLg: '1024px',
      tabletMd: '800px',
      tabletSm: '768px',
      mobile:  { 'max': '639px' },
      portrait: {'raw': '(orientation: portrait)'},
      landscape: {'raw': '(orientation: landscape)'},
      print: {'raw': 'print'},
    },

    /* extend tailwind defaults */

    extend: {

      colors: {
        indigo: {
          lighter: '#b3bcf5',
          default: '#5c6ac4',
          dark: '#202e78',
        },
        primary: colors.indigo,
        secondary: colors.yellow,
        neutral: colors.gray,
      },

      fontFamily: {
        allstate1: ['SlateW01', 'sans-serif'],
        allstate2: ['SlateW02', 'sans-serif'],
      },

      fontSize: {
        basex1: '1px',
        basex2: '2px',
        basex3: '4px',
        basex4: '8px',
        basex5: '16px',
        basex6: '24px',
        basex7: '48px',
        basex8: '96px',
        header: '32px',
        subheader: '18px',
        athleteName: '24px',
        athleteSchool: '16px',
        athleteMetaValue: '22px',
        athleteMetaCaption: '18px',
        captionVote: '16px',
      },

      fontWeight: {
        weightBook: 900,
        weightBlack: 800,
        weightBold: 700,
        weightRegular: 400,
      },

      spacing: {
        basex1: '1px',
        basex2: '2px',
        basex3: '4px',
        basex4: '8px',
        basex5: '16px',
        basex6: '24px',
        basex7: '48px',
        basex8: '96px',
        percent1: '1%',
        percent2: '2.5%',
        percent5: '5%',
        percent10: '10%',
        percent12: '12.5%',
        percent15: '15%',
        percent20: '20%',
        percent25: '25%',
        percent30: '30%',
        percent35: '35%',
        percent40: '40%',
        percent45: '45%',
        percent50: '50%',
        percent55: '55%',
        percent60: '60%',
        percent65: '65%',
        percent70: '70%',
        percent75: '75%',
        percent80: '80%',
        percent85: '85%',
        percent90: '90%',
        percent95: '95%',
        percent100: '100%',
        percent110: '110%',
        percent115: '115%',
        percent120: '120%',
        percent125: '125%',
        percent130: '130%',
        percent135: '135%',
        percent140: '140%',
        percent145: '145%',
        percent150: '150%',
        percent155: '155%',
        percent160: '160%',
        percent165: '165%',
        percent170: '170%',
        percent175: '175%',
        percent180: '180%',
        percent185: '185%',
        percent190: '190%',
        percent195: '195%',
        percent200: '200%'
      },

      padding: {
        basex1: '1px',
        basex2: '2px',
        basex3: '4px',
        basex4: '8px',
        basex5: '16px',
        basex6: '24px',
        basex7: '48px',
        basex8: '96px',
        percent1: '1%',
        percent2: '2.5%',
        percent5: '5%',
        percent10: '10%',
        percent12: '12.5%',
        percent15: '15%',
        percent20: '20%',
        percent25: '25%',
        percent30: '30%',
        percent35: '35%',
        percent40: '40%',
        percent45: '45%',
        percent50: '50%',
        percent55: '55%',
        percent60: '60%',
        percent65: '65%',
        percent70: '70%',
        percent75: '75%',
        percent80: '80%',
        percent85: '85%',
        percent90: '90%',
        percent95: '95%',
        percent100: '100%',
        percent110: '110%',
        percent115: '115%',
        percent120: '120%',
        percent125: '125%',
        percent130: '130%',
        percent135: '135%',
        percent140: '140%',
        percent145: '145%',
        percent150: '150%',
        percent155: '155%',
        percent160: '160%',
        percent165: '165%',
        percent170: '170%',
        percent175: '175%',
        percent180: '180%',
        percent185: '185%',
        percent190: '190%',
        percent195: '195%',
        percent200: '200%'
      },

      maxWidth: {
        basex1: '1px',
        basex2: '2px',
        basex3: '4px',
        basex4: '8px',
        basex5: '16px',
        basex6: '24px',
        basex7: '48px',
        basex8: '96px',
        percent1: '1%',
        percent2: '2.5%',
        percent5: '5%',
        percent10: '10%',
        percent12: '12.5%',
        percent15: '15%',
        percent20: '20%',
        percent25: '25%',
        percent30: '30%',
        percent35: '35%',
        percent40: '40%',
        percent45: '45%',
        percent50: '50%',
        percent55: '55%',
        percent60: '60%',
        percent65: '65%',
        percent70: '70%',
        percent75: '75%',
        percent80: '80%',
        percent85: '85%',
        percent90: '90%',
        percent95: '95%',
        percent100: '100%',
        percent110: '110%',
        percent115: '115%',
        percent120: '120%',
        percent125: '125%',
        percent130: '130%',
        percent135: '135%',
        percent140: '140%',
        percent145: '145%',
        percent150: '150%',
        percent155: '155%',
        percent160: '160%',
        percent165: '165%',
        percent170: '170%',
        percent175: '175%',
        percent180: '180%',
        percent185: '185%',
        percent190: '190%',
        percent195: '195%',
        percent200: '200%'
      },

      maxHeight: {
        basex1: '1px',
        basex2: '2px',
        basex3: '4px',
        basex4: '8px',
        basex5: '16px',
        basex6: '24px',
        basex7: '48px',
        basex8: '96px',
        percent1: '1%',
        percent2: '2.5%',
        percent5: '5%',
        percent10: '10%',
        percent12: '12.5%',
        percent15: '15%',
        percent20: '20%',
        percent25: '25%',
        percent30: '30%',
        percent35: '35%',
        percent40: '40%',
        percent45: '45%',
        percent50: '50%',
        percent55: '55%',
        percent60: '60%',
        percent65: '65%',
        percent70: '70%',
        percent75: '75%',
        percent80: '80%',
        percent85: '85%',
        percent90: '90%',
        percent95: '95%',
        percent100: '100%',
        percent110: '110%',
        percent115: '115%',
        percent120: '120%',
        percent125: '125%',
        percent130: '130%',
        percent135: '135%',
        percent140: '140%',
        percent145: '145%',
        percent150: '150%',
        percent155: '155%',
        percent160: '160%',
        percent165: '165%',
        percent170: '170%',
        percent175: '175%',
        percent180: '180%',
        percent185: '185%',
        percent190: '190%',
        percent195: '195%',
        percent200: '200%'
      },

      inset: {
        basex1: '1px',
        basex2: '2px',
        basex3: '4px',
        basex4: '8px',
        basex5: '16px',
        basex6: '24px',
        basex7: '48px',
        basex8: '96px',
        percent1: '1%',
        percent2: '2.5%',
        percent5: '5%',
        percent10: '10%',
        percent12: '12.5%',
        percent15: '15%',
        percent20: '20%',
        percent25: '25%',
        percent30: '30%',
        percent35: '35%',
        percent40: '40%',
        percent45: '45%',
        percent50: '50%',
        percent55: '55%',
        percent60: '60%',
        percent65: '65%',
        percent70: '70%',
        percent75: '75%',
        percent80: '80%',
        percent85: '85%',
        percent90: '90%',
        percent95: '95%',
        percent100: '100%',
        percent110: '110%',
        percent115: '115%',
        percent120: '120%',
        percent125: '125%',
        percent130: '130%',
        percent135: '135%',
        percent140: '140%',
        percent145: '145%',
        percent150: '150%',
        percent155: '155%',
        percent160: '160%',
        percent165: '165%',
        percent170: '170%',
        percent175: '175%',
        percent180: '180%',
        percent185: '185%',
        percent190: '190%',
        percent195: '195%',
        percent200: '200%'
      },

    },

  },

  /* register tailwind plugins */

  plugins: [


      /* for fluid fonts */

      require('tailwindcss-fluid')({

        textSizes: {

           sm: {
             min: '8px',
             max: '10px',
             minvw: '320px',
             maxvw: '1400px'
           },

           base: {
             min: '10px',
             max: '12px',
             minvw: '320px',
             maxvw: '1400px'
           },

           md: {
             min: '12px',
             max: '18px',
             minvw: '320px',
             maxvw: '1400px'
           },

           lg: {
             min: '18px',
             max: '36px',
             minvw: '320px',
             maxvw: '1400px'
           },

           xl: {
             min: '36px',
             max: '72px',
             minvw: '320px',
             maxvw: '1400px'
           },

           header: {
             min: '16px',
             max: '48px',
             minvw: '320px',
             maxvw: '1400px'
           },

           subheader: {
             min: '12px',
             max: '24px',
             minvw: '320px',
             maxvw: '1400px'
           },

           footer: {
             min: '12px',
             max: '16px',
             minvw: '320px',
             maxvw: '1400px'
           },

           athleteName: {
             min: '18px',
             max: '22px',
             minvw: '320px',
             maxvw: '1400px'
           },

           schoolName: {
             min: '12px',
             max: '14px',
             minvw: '320px',
             maxvw: '1400px'
           },

           metadataCaption: {
             min: '22px',
             max: ' 14px',
             minvw: '320px',
             maxvw: '1400px'
           },

           metadataValue: {
             min: '24px',
             max: '18px',
             minvw: '320px',
             maxvw: '1400px'
           },

           captionVote: {
             min: '16px',
             max: '20px',
             minvw: '320px',
             maxvw: '1400px'
           },

           modalMetadataCaption: {
             min: '12px',
             max: ' 14px',
             minvw: '320px',
             maxvw: '1400px'
           },

           modalMetadataValue: {
             min: '14px',
             max: '16px',
             minvw: '320px',
             maxvw: '1400px'
           },

           modalCopy: {
             min: '14px',
             max: '16px',
             minvw: '320px',
             maxvw: '1400px'
           },

           modalClose: {
             min: '12px',
             max: '14px',
             minvw: '320px',
             maxvw: '1400px'
           },

         }

      }),


      /* for card compoenents */

      require('tailwindcss-card')({
        maxWidth: '75%',
        maxHeight: '25%',
        height: '25%',
        borderRadius: '0',
        boxShadow: '0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08)',
        padding: '0',
      }),


      /* for patterned backgrounds */

      require("tailwind-heropatterns")({
        variants: [],
        patterns: [],
        colors: {
          default: "#19295f",
          black: "#000",
          white: "#fff",
          blue: "#63b3ed"
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

  ],

}
