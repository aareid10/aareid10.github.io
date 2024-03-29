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
        // allstate1: ['SlateW01', 'sans-serif'],
        // allstate2: ['SlateW02', 'sans-serif'],
      },

      fontWeight: {
        weightBook: 900,
        weightBlack: 800,
        weightBold: 700,
        weightRegular: 400,
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
              headline: '18vw',
              subheader: '18px',
              subheadline: '6vw',
              title: '5vw',
              desc: '3vw',
              vh1: '1vh',
              vh2: '2.5vh',
              vh5: '5vh',
              vh10: '10vh',
              vh12: '12.5vh',
              vh15: '15vh',
              vh20: '20vh',
              vh25: '25vh',
              vh30: '30vh',
              vh35: '35vh',
              vh40: '40vh',
              vh45: '45vh',
              vh50: '50vh',
              vh55: '55vh',
              vh60: '60vh',
              vh65: '65vh',
              vh70: '70vh',
              vh75: '75vh',
              vh80: '80vh',
              vh85: '85vh',
              vh90: '90vh',
              vh95: '95vh',
              vh100: '100vh',
              vh110: '110vh',
              vh115: '115vh',
              vh120: '120vh',
              vh125: '125vh',
              vh130: '130vh',
              vh135: '135vh',
              vh140: '140vh',
              vh145: '145vh',
              vh150: '150vh',
              vh155: '155vh',
              vh160: '160vh',
              vh165: '165vh',
              vh170: '170vh',
              vh175: '175vh',
              vh180: '180vh',
              vh185: '185vh',
              vh190: '190vh',
              vh195: '195vh',
              vh200: '200vh',
              vw1: '1vw',
              vw2: '2.5vw',
              vw5: '5vw',
              vw10: '10vw',
              vw12: '12.5vw',
              vw15: '15vw',
              vw20: '20vw',
              vw25: '25vw',
              vw30: '30vw',
              vw35: '35vw',
              vw40: '40vw',
              vw45: '45vw',
              vw50: '50vw',
              vw55: '55vw',
              vw60: '60vw',
              vw65: '65vw',
              vw70: '70vw',
              vw75: '75vw',
              vw80: '80vw',
              vw85: '85vw',
              vw90: '90vw',
              vw95: '95vw',
              vw100: '100vw',
              vw110: '110vw',
              vw115: '115vw',
              vw120: '120vw',
              vw125: '125vw',
              vw130: '130vw',
              vw135: '135vw',
              vw140: '140vw',
              vw145: '145vw',
              vw150: '150vw',
              vw155: '155vw',
              vw160: '160vw',
              vw165: '165vw',
              vw170: '170vw',
              vw175: '175vw',
              vw180: '180vw',
              vw185: '185vw',
              vw190: '190vw',
              vw195: '195vw',
              vw200: '200vw'
            },

      spacing: {
        auto: 'auto',
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
        percent200: '200%',
        pixel1: '1px',
        pixel2: '2.5px',
        pixel5: '5px',
        pixel10: '10px',
        pixel12: '12.5px',
        pixel15: '15px',
        pixel20: '20px',
        pixel25: '25px',
        pixel30: '30px',
        pixel35: '35px',
        pixel40: '40px',
        pixel45: '45px',
        pixel50: '50px',
        pixel55: '55px',
        pixel60: '60px',
        pixel65: '65px',
        pixel70: '70px',
        pixel75: '75px',
        pixel80: '80px',
        pixel85: '85px',
        pixel90: '90px',
        pixel95: '95px',
        pixel100: '100px',
        pixel110: '110px',
        pixel115: '115px',
        pixel120: '120px',
        pixel125: '125px',
        pixel130: '130px',
        pixel135: '135px',
        pixel140: '140px',
        pixel145: '145px',
        pixel150: '150px',
        pixel155: '155px',
        pixel160: '160px',
        pixel165: '165px',
        pixel170: '170px',
        pixel175: '175px',
        pixel180: '180px',
        pixel185: '185px',
        pixel190: '190px',
        pixel195: '195px',
        pixel200: '200px',
        vh1: '1vh',
        vh2: '2.5vh',
        vh5: '5vh',
        vh10: '10vh',
        vh12: '12.5vh',
        vh15: '15vh',
        vh20: '20vh',
        vh25: '25vh',
        vh30: '30vh',
        vh35: '35vh',
        vh40: '40vh',
        vh45: '45vh',
        vh50: '50vh',
        vh55: '55vh',
        vh60: '60vh',
        vh65: '65vh',
        vh70: '70vh',
        vh75: '75vh',
        vh80: '80vh',
        vh85: '85vh',
        vh90: '90vh',
        vh95: '95vh',
        vh100: '100vh',
        vh110: '110vh',
        vh115: '115vh',
        vh120: '120vh',
        vh125: '125vh',
        vh130: '130vh',
        vh135: '135vh',
        vh140: '140vh',
        vh145: '145vh',
        vh150: '150vh',
        vh155: '155vh',
        vh160: '160vh',
        vh165: '165vh',
        vh170: '170vh',
        vh175: '175vh',
        vh180: '180vh',
        vh185: '185vh',
        vh190: '190vh',
        vh195: '195vh',
        vh200: '200vh',
        vw1: '1vw',
        vw2: '2.5vw',
        vw5: '5vw',
        vw10: '10vw',
        vw12: '12.5vw',
        vw15: '15vw',
        vw20: '20vw',
        vw25: '25vw',
        vw30: '30vw',
        vw35: '35vw',
        vw40: '40vw',
        vw45: '45vw',
        vw50: '50vw',
        vw55: '55vw',
        vw60: '60vw',
        vw65: '65vw',
        vw70: '70vw',
        vw75: '75vw',
        vw80: '80vw',
        vw85: '85vw',
        vw90: '90vw',
        vw95: '95vw',
        vw100: '100vw',
        vw110: '110vw',
        vw115: '115vw',
        vw120: '120vw',
        vw125: '125vw',
        vw130: '130vw',
        vw135: '135vw',
        vw140: '140vw',
        vw145: '145vw',
        vw150: '150vw',
        vw155: '155vw',
        vw160: '160vw',
        vw165: '165vw',
        vw170: '170vw',
        vw175: '175vw',
        vw180: '180vw',
        vw185: '185vw',
        vw190: '190vw',
        vw195: '195vw',
        vw200: '200vw'
      },

      lineHeight: {
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
        percent200: '200%',
        pixel1: '1px',
        pixel2: '2.5px',
        pixel5: '5px',
        pixel10: '10px',
        pixel12: '12.5px',
        pixel15: '15px',
        pixel20: '20px',
        pixel25: '25px',
        pixel30: '30px',
        pixel35: '35px',
        pixel40: '40px',
        pixel45: '45px',
        pixel50: '50px',
        pixel55: '55px',
        pixel60: '60px',
        pixel65: '65px',
        pixel70: '70px',
        pixel75: '75px',
        pixel80: '80px',
        pixel85: '85px',
        pixel90: '90px',
        pixel95: '95px',
        pixel100: '100px',
        pixel110: '110px',
        pixel115: '115px',
        pixel120: '120px',
        pixel125: '125px',
        pixel130: '130px',
        pixel135: '135px',
        pixel140: '140px',
        pixel145: '145px',
        pixel150: '150px',
        pixel155: '155px',
        pixel160: '160px',
        pixel165: '165px',
        pixel170: '170px',
        pixel175: '175px',
        pixel180: '180px',
        pixel185: '185px',
        pixel190: '190px',
        pixel195: '195px',
        pixel200: '200px',
        vh1: '1vh',
        vh2: '2.5vh',
        vh5: '5vh',
        vh10: '10vh',
        vh12: '12.5vh',
        vh15: '15vh',
        vh20: '20vh',
        vh25: '25vh',
        vh30: '30vh',
        vh35: '35vh',
        vh40: '40vh',
        vh45: '45vh',
        vh50: '50vh',
        vh55: '55vh',
        vh60: '60vh',
        vh65: '65vh',
        vh70: '70vh',
        vh75: '75vh',
        vh80: '80vh',
        vh85: '85vh',
        vh90: '90vh',
        vh95: '95vh',
        vh100: '100vh',
        vh110: '110vh',
        vh115: '115vh',
        vh120: '120vh',
        vh125: '125vh',
        vh130: '130vh',
        vh135: '135vh',
        vh140: '140vh',
        vh145: '145vh',
        vh150: '150vh',
        vh155: '155vh',
        vh160: '160vh',
        vh165: '165vh',
        vh170: '170vh',
        vh175: '175vh',
        vh180: '180vh',
        vh185: '185vh',
        vh190: '190vh',
        vh195: '195vh',
        vh200: '200vh',
        vw1: '1vw',
        vw2: '2.5vw',
        vw5: '5vw',
        vw10: '10vw',
        vw12: '12.5vw',
        vw15: '15vw',
        vw20: '20vw',
        vw25: '25vw',
        vw30: '30vw',
        vw35: '35vw',
        vw40: '40vw',
        vw45: '45vw',
        vw50: '50vw',
        vw55: '55vw',
        vw60: '60vw',
        vw65: '65vw',
        vw70: '70vw',
        vw75: '75vw',
        vw80: '80vw',
        vw85: '85vw',
        vw90: '90vw',
        vw95: '95vw',
        vw100: '100vw',
        vw110: '110vw',
        vw115: '115vw',
        vw120: '120vw',
        vw125: '125vw',
        vw130: '130vw',
        vw135: '135vw',
        vw140: '140vw',
        vw145: '145vw',
        vw150: '150vw',
        vw155: '155vw',
        vw160: '160vw',
        vw165: '165vw',
        vw170: '170vw',
        vw175: '175vw',
        vw180: '180vw',
        vw185: '185vw',
        vw190: '190vw',
        vw195: '195vw',
        vw200: '200vw',
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
        percent200: '200%',
        pixel1: '1px',
        pixel2: '2.5px',
        pixel5: '5px',
        pixel10: '10px',
        pixel12: '12.5px',
        pixel15: '15px',
        pixel20: '20px',
        pixel25: '25px',
        pixel30: '30px',
        pixel35: '35px',
        pixel40: '40px',
        pixel45: '45px',
        pixel50: '50px',
        pixel55: '55px',
        pixel60: '60px',
        pixel65: '65px',
        pixel70: '70px',
        pixel75: '75px',
        pixel80: '80px',
        pixel85: '85px',
        pixel90: '90px',
        pixel95: '95px',
        pixel100: '100px',
        pixel110: '110px',
        pixel115: '115px',
        pixel120: '120px',
        pixel125: '125px',
        pixel130: '130px',
        pixel135: '135px',
        pixel140: '140px',
        pixel145: '145px',
        pixel150: '150px',
        pixel155: '155px',
        pixel160: '160px',
        pixel165: '165px',
        pixel170: '170px',
        pixel175: '175px',
        pixel180: '180px',
        pixel185: '185px',
        pixel190: '190px',
        pixel195: '195px',
        pixel200: '200px',
        vh1: '1vh',
        vh2: '2.5vh',
        vh5: '5vh',
        vh10: '10vh',
        vh12: '12.5vh',
        vh15: '15vh',
        vh20: '20vh',
        vh25: '25vh',
        vh30: '30vh',
        vh35: '35vh',
        vh40: '40vh',
        vh45: '45vh',
        vh50: '50vh',
        vh55: '55vh',
        vh60: '60vh',
        vh65: '65vh',
        vh70: '70vh',
        vh75: '75vh',
        vh80: '80vh',
        vh85: '85vh',
        vh90: '90vh',
        vh95: '95vh',
        vh100: '100vh',
        vh110: '110vh',
        vh115: '115vh',
        vh120: '120vh',
        vh125: '125vh',
        vh130: '130vh',
        vh135: '135vh',
        vh140: '140vh',
        vh145: '145vh',
        vh150: '150vh',
        vh155: '155vh',
        vh160: '160vh',
        vh165: '165vh',
        vh170: '170vh',
        vh175: '175vh',
        vh180: '180vh',
        vh185: '185vh',
        vh190: '190vh',
        vh195: '195vh',
        vh200: '200vh',
        vw1: '1vw',
        vw2: '2.5vw',
        vw5: '5vw',
        vw10: '10vw',
        vw12: '12.5vw',
        vw15: '15vw',
        vw20: '20vw',
        vw25: '25vw',
        vw30: '30vw',
        vw35: '35vw',
        vw40: '40vw',
        vw45: '45vw',
        vw50: '50vw',
        vw55: '55vw',
        vw60: '60vw',
        vw65: '65vw',
        vw70: '70vw',
        vw75: '75vw',
        vw80: '80vw',
        vw85: '85vw',
        vw90: '90vw',
        vw95: '95vw',
        vw100: '100vw',
        vw110: '110vw',
        vw115: '115vw',
        vw120: '120vw',
        vw125: '125vw',
        vw130: '130vw',
        vw135: '135vw',
        vw140: '140vw',
        vw145: '145vw',
        vw150: '150vw',
        vw155: '155vw',
        vw160: '160vw',
        vw165: '165vw',
        vw170: '170vw',
        vw175: '175vw',
        vw180: '180vw',
        vw185: '185vw',
        vw190: '190vw',
        vw195: '195vw',
        vw200: '200vw',
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
        percent200: '200%',
        pixel1: '1px',
        pixel2: '2.5px',
        pixel5: '5px',
        pixel10: '10px',
        pixel12: '12.5px',
        pixel15: '15px',
        pixel20: '20px',
        pixel25: '25px',
        pixel30: '30px',
        pixel35: '35px',
        pixel40: '40px',
        pixel45: '45px',
        pixel50: '50px',
        pixel55: '55px',
        pixel60: '60px',
        pixel65: '65px',
        pixel70: '70px',
        pixel75: '75px',
        pixel80: '80px',
        pixel85: '85px',
        pixel90: '90px',
        pixel95: '95px',
        pixel100: '100px',
        pixel110: '110px',
        pixel115: '115px',
        pixel120: '120px',
        pixel125: '125px',
        pixel130: '130px',
        pixel135: '135px',
        pixel140: '140px',
        pixel145: '145px',
        pixel150: '150px',
        pixel155: '155px',
        pixel160: '160px',
        pixel165: '165px',
        pixel170: '170px',
        pixel175: '175px',
        pixel180: '180px',
        pixel185: '185px',
        pixel190: '190px',
        pixel195: '195px',
        pixel200: '200px',
        vh1: '1vh',
        vh2: '2.5vh',
        vh5: '5vh',
        vh10: '10vh',
        vh12: '12.5vh',
        vh15: '15vh',
        vh20: '20vh',
        vh25: '25vh',
        vh30: '30vh',
        vh35: '35vh',
        vh40: '40vh',
        vh45: '45vh',
        vh50: '50vh',
        vh55: '55vh',
        vh60: '60vh',
        vh65: '65vh',
        vh70: '70vh',
        vh75: '75vh',
        vh80: '80vh',
        vh85: '85vh',
        vh90: '90vh',
        vh95: '95vh',
        vh100: '100vh',
        vh110: '110vh',
        vh115: '115vh',
        vh120: '120vh',
        vh125: '125vh',
        vh130: '130vh',
        vh135: '135vh',
        vh140: '140vh',
        vh145: '145vh',
        vh150: '150vh',
        vh155: '155vh',
        vh160: '160vh',
        vh165: '165vh',
        vh170: '170vh',
        vh175: '175vh',
        vh180: '180vh',
        vh185: '185vh',
        vh190: '190vh',
        vh195: '195vh',
        vh200: '200vh',
        vw1: '1vw',
        vw2: '2.5vw',
        vw5: '5vw',
        vw10: '10vw',
        vw12: '12.5vw',
        vw15: '15vw',
        vw20: '20vw',
        vw25: '25vw',
        vw30: '30vw',
        vw35: '35vw',
        vw40: '40vw',
        vw45: '45vw',
        vw50: '50vw',
        vw55: '55vw',
        vw60: '60vw',
        vw65: '65vw',
        vw70: '70vw',
        vw75: '75vw',
        vw80: '80vw',
        vw85: '85vw',
        vw90: '90vw',
        vw95: '95vw',
        vw100: '100vw',
        vw110: '110vw',
        vw115: '115vw',
        vw120: '120vw',
        vw125: '125vw',
        vw130: '130vw',
        vw135: '135vw',
        vw140: '140vw',
        vw145: '145vw',
        vw150: '150vw',
        vw155: '155vw',
        vw160: '160vw',
        vw165: '165vw',
        vw170: '170vw',
        vw175: '175vw',
        vw180: '180vw',
        vw185: '185vw',
        vw190: '190vw',
        vw195: '195vw',
        vw200: '200vw'
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
        percent200: '200%',
        pixel1: '1px',
        pixel2: '2.5px',
        pixel5: '5px',
        pixel10: '10px',
        pixel12: '12.5px',
        pixel15: '15px',
        pixel20: '20px',
        pixel25: '25px',
        pixel30: '30px',
        pixel35: '35px',
        pixel40: '40px',
        pixel45: '45px',
        pixel50: '50px',
        pixel55: '55px',
        pixel60: '60px',
        pixel65: '65px',
        pixel70: '70px',
        pixel75: '75px',
        pixel80: '80px',
        pixel85: '85px',
        pixel90: '90px',
        pixel95: '95px',
        pixel100: '100px',
        pixel110: '110px',
        pixel115: '115px',
        pixel120: '120px',
        pixel125: '125px',
        pixel130: '130px',
        pixel135: '135px',
        pixel140: '140px',
        pixel145: '145px',
        pixel150: '150px',
        pixel155: '155px',
        pixel160: '160px',
        pixel165: '165px',
        pixel170: '170px',
        pixel175: '175px',
        pixel180: '180px',
        pixel185: '185px',
        pixel190: '190px',
        pixel195: '195px',
        pixel200: '200px',
        vh1: '1vh',
        vh2: '2.5vh',
        vh5: '5vh',
        vh10: '10vh',
        vh12: '12.5vh',
        vh15: '15vh',
        vh20: '20vh',
        vh25: '25vh',
        vh30: '30vh',
        vh35: '35vh',
        vh40: '40vh',
        vh45: '45vh',
        vh50: '50vh',
        vh55: '55vh',
        vh60: '60vh',
        vh65: '65vh',
        vh70: '70vh',
        vh75: '75vh',
        vh80: '80vh',
        vh85: '85vh',
        vh90: '90vh',
        vh95: '95vh',
        vh100: '100vh',
        vh110: '110vh',
        vh115: '115vh',
        vh120: '120vh',
        vh125: '125vh',
        vh130: '130vh',
        vh135: '135vh',
        vh140: '140vh',
        vh145: '145vh',
        vh150: '150vh',
        vh155: '155vh',
        vh160: '160vh',
        vh165: '165vh',
        vh170: '170vh',
        vh175: '175vh',
        vh180: '180vh',
        vh185: '185vh',
        vh190: '190vh',
        vh195: '195vh',
        vh200: '200vh',
        vw1: '1vw',
        vw2: '2.5vw',
        vw5: '5vw',
        vw10: '10vw',
        vw12: '12.5vw',
        vw15: '15vw',
        vw20: '20vw',
        vw25: '25vw',
        vw30: '30vw',
        vw35: '35vw',
        vw40: '40vw',
        vw45: '45vw',
        vw50: '50vw',
        vw55: '55vw',
        vw60: '60vw',
        vw65: '65vw',
        vw70: '70vw',
        vw75: '75vw',
        vw80: '80vw',
        vw85: '85vw',
        vw90: '90vw',
        vw95: '95vw',
        vw100: '100vw',
        vw110: '110vw',
        vw115: '115vw',
        vw120: '120vw',
        vw125: '125vw',
        vw130: '130vw',
        vw135: '135vw',
        vw140: '140vw',
        vw145: '145vw',
        vw150: '150vw',
        vw155: '155vw',
        vw160: '160vw',
        vw165: '165vw',
        vw170: '170vw',
        vw175: '175vw',
        vw180: '180vw',
        vw185: '185vw',
        vw190: '190vw',
        vw195: '195vw',
        vw200: '200vw'
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
        percent200: '200%',
        pixel1: '1px',
        pixel2: '2.5px',
        pixel5: '5px',
        pixel10: '10px',
        pixel12: '12.5px',
        pixel15: '15px',
        pixel20: '20px',
        pixel25: '25px',
        pixel30: '30px',
        pixel35: '35px',
        pixel40: '40px',
        pixel45: '45px',
        pixel50: '50px',
        pixel55: '55px',
        pixel60: '60px',
        pixel65: '65px',
        pixel70: '70px',
        pixel75: '75px',
        pixel80: '80px',
        pixel85: '85px',
        pixel90: '90px',
        pixel95: '95px',
        pixel100: '100px',
        pixel110: '110px',
        pixel115: '115px',
        pixel120: '120px',
        pixel125: '125px',
        pixel130: '130px',
        pixel135: '135px',
        pixel140: '140px',
        pixel145: '145px',
        pixel150: '150px',
        pixel155: '155px',
        pixel160: '160px',
        pixel165: '165px',
        pixel170: '170px',
        pixel175: '175px',
        pixel180: '180px',
        pixel185: '185px',
        pixel190: '190px',
        pixel195: '195px',
        pixel200: '200px',
        vh1: '1vh',
        vh2: '2.5vh',
        vh5: '5vh',
        vh10: '10vh',
        vh12: '12.5vh',
        vh15: '15vh',
        vh20: '20vh',
        vh25: '25vh',
        vh30: '30vh',
        vh35: '35vh',
        vh40: '40vh',
        vh45: '45vh',
        vh50: '50vh',
        vh55: '55vh',
        vh60: '60vh',
        vh65: '65vh',
        vh70: '70vh',
        vh75: '75vh',
        vh80: '80vh',
        vh85: '85vh',
        vh90: '90vh',
        vh95: '95vh',
        vh100: '100vh',
        vh110: '110vh',
        vh115: '115vh',
        vh120: '120vh',
        vh125: '125vh',
        vh130: '130vh',
        vh135: '135vh',
        vh140: '140vh',
        vh145: '145vh',
        vh150: '150vh',
        vh155: '155vh',
        vh160: '160vh',
        vh165: '165vh',
        vh170: '170vh',
        vh175: '175vh',
        vh180: '180vh',
        vh185: '185vh',
        vh190: '190vh',
        vh195: '195vh',
        vh200: '200vh',
        vw1: '1vw',
        vw2: '2.5vw',
        vw5: '5vw',
        vw10: '10vw',
        vw12: '12.5vw',
        vw15: '15vw',
        vw20: '20vw',
        vw25: '25vw',
        vw30: '30vw',
        vw35: '35vw',
        vw40: '40vw',
        vw45: '45vw',
        vw50: '50vw',
        vw55: '55vw',
        vw60: '60vw',
        vw65: '65vw',
        vw70: '70vw',
        vw75: '75vw',
        vw80: '80vw',
        vw85: '85vw',
        vw90: '90vw',
        vw95: '95vw',
        vw100: '100vw',
        vw110: '110vw',
        vw115: '115vw',
        vw120: '120vw',
        vw125: '125vw',
        vw130: '130vw',
        vw135: '135vw',
        vw140: '140vw',
        vw145: '145vw',
        vw150: '150vw',
        vw155: '155vw',
        vw160: '160vw',
        vw165: '165vw',
        vw170: '170vw',
        vw175: '175vw',
        vw180: '180vw',
        vw185: '185vw',
        vw190: '190vw',
        vw195: '195vw',
        vw200: '200vw'
      },

    },

  },

  /* register tailwind plugins */

  plugins: [

    // require('tailwindcss-aspect-ratio'),
    // require('tailwindcss-fluid-container'),
    // require('tailwindcss-touch'),
    // require('tailwindcss-typography'),
    // require('tailwindcss-children'),
    // require('tailwindcss-scrims'),
    // require('tailwindcss-alpha'),
    // require('tailwindcss-blend-mode'),
    // require('tailwindcss-colorize'),
    // require('tailwindcss-plugins/gradients'),
    // require('tailwindcss-border-gradients'),
    // require('tailwindcss-filters'),
    // require('tailwind-heropatterns'),
    // require('tailwindcss-transitions'),
    // require('tailwindcss-responsive-embed'),
    // require('@tailwindcss/custom-forms'),
    // require('tailwindcss-spinner'),
    // require('tailwindcss-interaction-variants'),

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
             min: '24px',
             max: '30px',
             minvw: '320px',
             maxvw: '1400px'
           },

           schoolName: {
             min: '15px',
             max: '18px',
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
