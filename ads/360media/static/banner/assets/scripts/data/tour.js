
window.AdPackage = {

  "adVariant": "vertical",
  "adCTA" : 'ad-panorama-logo',
  "adMacros" : {
    "clickTag" : "%%CLICK_URL_UNESC%%%%DEST_URL%%",
    "dfpAdID" : "111111",
    "cacheBust" : "0000000"
  }

  /* * * * * * * * *
   * Additional Parameters
   * - "adVariant": "billboard"
   * * * * * * * * */

}




window.AdPackageConfig = {

  controlButtons: ['fullscreen'] ,
  autoHideInfospot: false,
  autoRotateActivationDuration: 2500,
  autoRotateSpeed: 0.60,
  output: 'console'

  /* * * * * * * * *
   * Additional Parameters
   * - autoRotate: true
   * - viewIndicator: true
   * - indicatorSize: 60
   * - controlButtons: ['fullscreen', 'setting']
   * * * * * * * * */

}




window.AdPackageMedia = [

  {
    bg: "https://a.espncdn.com/promotions/bsa/2020/templates/vertical-unit/360-multimedia-banner/images/outside.jpg",
    title: "outside",
    portal: [2850.74, -23.36, -1797.88],
    infospots: {
      river: [ -5000.00, -1825.25, 197.56, 'The Rhine River - Basel Switzerland'],
      cafe: [4000.00, 500.00, 5000.00, 'Vonlanthen Cafe' ],
      park: [-100.00, 100.00, 4627.94, 'Rhine Park' ],
      skybridge: [-3312.37, 700.40, -3226.61, 'Gallery Skybridge' ]
    },
    tour: {
      paragraphs: {
        welcome: ['ESPN Presents', 'A tour of the <strong>Rhine Gallery</strong> : Outside', 'Here we go', '' ],
        spot1: ['The Rhine River','Basel, Switzerland', ''],
        spot2: ['Vonlanthen Cafe', ''],
        spot3: ['Rhine Park', ''],
        spot4: ['Gallery Skybridge', ''],
        ending: ['Stay a while', 'Take a look around', 'Then head in inside by clicking this arrow', '']
      },
    }
  },

  {
    bg: "https://a.espncdn.com/promotions/bsa/2020/templates/vertical-unit/360-multimedia-banner/images/gallery.jpg",
    title: "gallery",
    portal: [5250.83, 100.50, -2106.09],
    infospots: {
      gothicCandles: [ -5000.00, -1825.25, 197.56, 'Gothic Candles'],
      mayanFulcrum: [4000.00, 500.00, 5000.00, 'Mayan Fulcrum'],
      pseudoScience: [-100.00, 100.00, 4627.94, 'Pseudo-Science'],
      medievalAxe: [-3000.78, -600.50, -1548.38, 'Medieval Axe']
    },
    tour: {
      paragraphs: {
        welcome: ['The <strong>Rhine Gallery</strong> : Inside', '' ],
        spot1: ['Gothic Candles', ''],
        spot2: ['Mayan Fulcrum', ''],
        spot3: ['Pseudo-Science', ''],
        spot4: ['Medieval Axe', ''],
        ending: ['Let\'s keep going...', '']
      }
    },
  },

  {
    bg: "https://a.espncdn.com/promotions/bsa/2020/templates/vertical-unit/360-multimedia-banner/images/office.jpg",
    title: "office",
    portal: [-1750.97, -325.42, -4788.45],
    infospots: {
      gothicCandles: [-4682.43, -75.32, -1726.62, 'Poster: Glasshalf'],
      mayanFulcrum: [2905.29, 312.49, 4052.31, 'Patio'],
      pseudoScience: [-1519.27, 210.70, 4753.64, 'Poster: Cam\'minon'],
      medievalAxe: [-3300.07, 350.64, -3831.30, 'Gallery Live feed']
    },
    tour: {
      paragraphs: {
        welcome: ['The <strong>Rhine Gallery</strong> : Main Office', '' ],
        spot1: ['Poster: Glashalf', ''],
        spot2: ['Patio', ''],
        spot3: ['Poster: Cam\'minon', ''],
        spot4: ['Gallery Live feed', ''],
        ending: ['Let\'s keep going...', '']
      }
    },
  },

  {
    bg: "https://a.espncdn.com/promotions/bsa/2020/templates/vertical-unit/360-multimedia-banner/images/storage.jpg",
    title: "storage",
    portal: [-2000.00, 250.00, 4877.91],
    infospots: {
      matiste: [-4976.40, 70.42, -397.49, 'Matiste'],
      caravaggio: [-3777.65, 2114.80, 2482.66, 'Caravaggio'],
      monet: [-100.00, 100.00, 4627.94, 'Monet'],
      ingres: [-3312.37, 700.40, -3226.61, 'Ingres']
    },
    tour: {
      paragraphs: {
        welcome: ['ESPN Presents', 'The <strong>Rhine Gallery</strong> : Storage', '' ],
        spot1: ['Matiste', ''],
        spot2: ['Caravaggio', ''],
        spot3: ['Monet', ''],
        spot4: ['Ingres', ''],
        ending: ['Let\'s keep going...', '']
      }
    },
  },

  {
    bg: "https://a.espncdn.com/promotions/bsa/2020/templates/vertical-unit/360-multimedia-banner/images/workshop.jpg",
    title: "workshop",
    portal: [2050.00, 50.00, 5000.00],
    infospots: {
      modelPlane: [-3183.11, 547.81, 3803.89, 'Model Plane'],
      airFiltrationSystem: [2704.20, 356.26, 4180.85, 'Air Filtration System'],
      adptiveSampler: [635.86, -897.70, 4869.20, 'Adptive Sampler'],
      controlBox: [-4812.55, -722.57, 1121.06, 'Control Box']
    },
    tour: {
      paragraphs: {
        welcome: ['The <strong>Rhine Gallery</strong> : Workshop', '' ],
        spot1: ['Model Plane', ''],
        spot2: ['Air Filtration System', ''],
        spot3: ['Adptive Sampler', ''],
        spot4: ['Control Box', ''],
        ending: ['Let\'s keep going...', '']
      }
    },
  },

  {
    bg: "https://a.espncdn.com/promotions/bsa/2020/templates/vertical-unit/360-multimedia-banner/images/studio.jpg",
    title: "studio",
    portal: [-5250.49, -100.46, -2000.60],
    infospots: {
      primaryMonitor: [-5000.00, -1825.25, 197.56, 'Primary Monitor'],
      primaryTvSet: [4292.56, -1055.42, 2318.76, 'Primary Tv Set'],
      primaryCamera: [708.52, -867.37, 4863.80, 'Primary Camera'],
      secondaryTvSet: [717.86, -1380.16, -4741.29, 'Secondary Tv Set']
    },
    tour: {
      paragraphs: {
        welcome: ['The <strong>Rhine Gallery</strong> : Studio', '' ],
        spot1: ['Primary Monitor', ''],
        spot2: ['Primary Tv Set', ''],
        spot3: ['Primary Camera', ''],
        spot4: ['Secondary Tv Set', ''],
        ending: ['Let\'s keep going...', '']
      }
    },
  },

  {
    bg: "https://a.espncdn.com/promotions/bsa/2020/templates/vertical-unit/360-multimedia-banner/images/office.jpg",
    title: "office",
    portal: [-1750.97, -325.42, -4788.45],
    infospots: {
      gothicCandles: [-4682.43, -75.32, -1726.62, 'Poster: Glasshalf'],
      mayanFulcrum: [2905.29, 312.49, 4052.31, 'Patio'],
      pseudoScience: [-1519.27, 210.70, 4753.64, 'Poster: Cam\'minon'],
      medievalAxe: [-3300.07, 350.64, -3831.30, 'Gallery Live feed']
    },
    tour: {
      paragraphs: {
        welcome: ['The <strong>Rhine Gallery</strong> : Back Office', '' ],
        spot1: ['Poster: Glashalf', ''],
        spot2: ['Patio', ''],
        spot3: ['Poster: Cam\'minon', ''],
        spot4: ['Gallery Live feed', ''],
        ending: ['That\'s it for the tour', 'Feel free to look around', '']
      }
    },
  }

]
