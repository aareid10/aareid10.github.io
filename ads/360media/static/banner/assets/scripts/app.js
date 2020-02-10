import events from '@modules/events'
import icons from '@modules/icons'
import Ad from '@classes/Ad'
import Media from '@classes/Media'


const AdPackage = {
  "adVariant": "vertical",
}

const AdClickthrough = (url, dfpAdID, cacheBust) => {
  if (typeof window.parent.app === 'object') {
    if (typeof window.parent.app.ads === 'object') {
      event.preventDefault()
      if (shopunit.dfpAdID !== undefined) {
        if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
          window.parent.app.ads.clickThrough(`${url}?ord=${shopunit.cacheBust}`, shopunit.dfpAdID)
        } else {
          window.parent.app.ads.clickThrough(url, shopunit.dfpAdID)
        }
      } else if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
        window.parent.app.ads.clickThrough(`${url}?ord=${shopunit.cacheBust}`)
      } else {
        window.parent.app.ads.clickThrough(url)
      }
    } else {
      window.open(url, '_blank')
    }
  } else if (typeof mraid !== 'undefined') {
    mraid.open(url)
  } else {
    window.open(url, '_blank')
  }

  console.warn(url, dfpAdID, cacheBust)
}

const AdMacros = (macros, target) => {
    const { clickTag, dfpAdID, cacheBust } = macros
    const clickArea = document.getElementById(target)
    console.warn('clickArea:', target)
    clickArea.addEventListener('click', () => {
      AdClickthrough(clickTag, dfpAdID, cacheBust)
    })
}

const AdPackageMedia = [
  {
    bg: "./assets/media/images/outside.jpg",
    title: "outside",
    portal: [2850.74, -23.36, -1797.88],
    tour: {
      paragraphs: {
        welcome: ['ESPN Presents', 'A tour of the <strong>Rhine Gallery</strong> : Outside', 'Here we go', '' ],
        spot1: ['The Rhine River','Basel, Switzerland', ''],
        spot2: ['Vonlanthen Cafe - Breakfast · Outdoor seating · Cozy', ''],
        spot3: ['Rhine Park', ''],
        spot4: ['Gallery Skybridge', ''],
        ending: ['Stay a while', 'Take a look around', 'Then head in inside by clicking this arrow', '']
      },
      intro: (paragraphs) => {

        threesixtyPanorama.panoramas[0].children
          .forEach((infospot, idx) => {
            window[`tourstop${idx > 0 ? idx : 's'}`] = () => {
              let nextCopy  = Object.keys(paragraphs)[idx + 1]
              let nextFn    = window[`tourstop${idx+1}`]
              let params    = {
                strings: paragraphs[`${nextCopy}`],
                typeSpeed: 50,
                showCursor: false,
                startDelay: 1500,
              }
              if (idx <= Object.keys(paragraphs).length) params.onComplete = nextFn
              new Typed( "#typed", params)
              infospot.focus(1000)
            }
          })

        new Typed( "#typed", {
          strings: paragraphs.welcome,
          typeSpeed: 50,
          showCursor: false,
          startDelay: 1500,
          onComplete: tourstops
        })

      }
    },
    infospots: {
      river: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -5000.00, -1825.25, 197.56 )
        infospot.addHoverText('The Rhine River - Basel Switzerland')
        infospot.setElementStyle('color', this, '#f2d398')
        return infospot
      },
      cafe: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( 4000.00, 500.00, 5000.00 )
        infospot.addHoverText('Vonlanthen Cafe - Breakfast · Outdoor seating · Cozy')
        infospot.setElementStyle('color', this, '#f2d398')
        return infospot
      },
      park: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -100.00, 100.00, 4627.94 )
        infospot.addHoverText('Rhine Park')
        infospot.setElementStyle('color', this, '#f2d398')
        return infospot
      },
      skybridge: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -3312.37, 700.40, -3226.61 )
        infospot.addHoverText('Gallery Skybridge')
        infospot.setElementStyle('color', this, '#f2d398')
        return infospot
      }
    }
  },
  {
    bg: "./assets/media/images/gallery.jpg",
    title: "gallery",
    portal: [5250.83, 100.50, -2106.09],
    tour: {
      paragraphs: {
        welcome: ['The <strong>Rhine Gallery</strong> : Inside', '' ],
        spot1: ['Gothic Candles', ''],
        spot2: ['Mayan Fulcrum', ''],
        spot3: ['Pseudo-Science', ''],
        spot4: ['Medieval Axe', ''],
        ending: ['Let\'s keep going...', '']
      },
      intro: (paragraphs) => {

        threesixtyPanorama.panoramas[1].children
          .forEach((infospot, idx) => {
            window[`tourstop${idx > 0 ? idx : 's'}`] = () => {
              let nextCopy  = Object.keys(paragraphs)[idx + 1]
              let nextFn    = window[`tourstop${idx+1}`]
              let params    = {
                strings: paragraphs[`${nextCopy}`],
                typeSpeed: 50,
                showCursor: false,
                startDelay: 1500,
              }
              if (idx <= Object.keys(paragraphs).length) params.onComplete = nextFn
              new Typed( "#typed", params)
              infospot.focus(1000)
            }
          })

        new Typed( "#typed", {
          strings: paragraphs.welcome,
          typeSpeed: 50,
          showCursor: false,
          startDelay: 1500,
          onComplete: tourstops
        })

      }
    },
    infospots: {
      gothicCandles: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -5000.00, -1825.25, 197.56 )
        infospot.addHoverText('Gothic Candles')
        return infospot
      },
      mayanFulcrum: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( 4000.00, 500.00, 5000.00 )
        infospot.addHoverText('Mayan Fulcrum')
        return infospot
      },
      pseudoScience: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -100.00, 100.00, 4627.94 )
        infospot.addHoverText('Pseudo-Science')
        return infospot
      },
      medievalAxe: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -3000.78, -600.50, -1548.38 )
        infospot.addHoverText('Medieval Axe')
        return infospot
      }
    }
  },
  {
    bg: "./assets/media/images/office.jpg",
    title: "office",
    portal: [-1750.97, -325.42, -4788.45],
    tour: {
      paragraphs: {
        welcome: ['The <strong>Rhine Gallery</strong> : Main Office', '' ],
        spot1: ['Poster: Glashalf', ''],
        spot2: ['Patio', ''],
        spot3: ['Poster: Cam\'minon', ''],
        spot4: ['Gallery Live feed', ''],
        ending: ['Let\'s keep going...', '']
      },
      intro: (paragraphs) => {

        threesixtyPanorama.panoramas[2].children
          .forEach((infospot, idx) => {
            window[`tourstop${idx > 0 ? idx : 's'}`] = () => {
              let nextCopy  = Object.keys(paragraphs)[idx + 1]
              let nextFn    = window[`tourstop${idx+1}`]
              let params    = {
                strings: paragraphs[`${nextCopy}`],
                typeSpeed: 50,
                showCursor: false,
                startDelay: 1500,
              }
              if (idx <= Object.keys(paragraphs).length) params.onComplete = nextFn
              new Typed( "#typed", params)
              infospot.focus(1000)
            }
          })
        new Typed( "#typed", {
          strings: paragraphs.welcome,
          typeSpeed: 50,
          showCursor: false,
          startDelay: 1500,
          onComplete: tourstops
        })

      }
    },
    infospots: {
      glasshalf: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -4682.43, -75.32, -1726.62 )
        infospot.addHoverElement( document.getElementById( "glasshalf" ), 200 )
        return infospot
      },
      patio: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( 2905.29, 312.49, 4052.31 )
        infospot.addHoverText('Patio')
        return infospot
      },
      camminon: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -1519.27, 210.70, 4753.64 )
        infospot.addHoverText('Poster: Cam\'minon')
        return infospot
      },
      galleryLiveFeed: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -3300.07, 350.64, -3831.30 )
        infospot.addHoverText('Gallery Live feed')
        return infospot
      }
    }
  },
  {
    bg: "./assets/media/images/storage.jpg",
    title: "storage",
    portal: [-2000.00, 250.00, 4877.91],
    tour: {
      paragraphs: {
        welcome: ['ESPN Presents', 'The <strong>Rhine Gallery</strong> : Storage', '' ],
        spot1: ['Matiste', ''],
        spot2: ['Caravaggio', ''],
        spot3: ['Monet', ''],
        spot4: ['Ingres', ''],
        ending: ['Let\'s keep going...', '']
      },
      intro: (paragraphs) => {

        threesixtyPanorama.panoramas[3].children
          .forEach((infospot, idx) => {
            window[`tourstop${idx > 0 ? idx : 's'}`] = () => {
              let nextCopy  = Object.keys(paragraphs)[idx + 1]
              let nextFn    = window[`tourstop${idx+1}`]
              let params    = {
                strings: paragraphs[`${nextCopy}`],
                typeSpeed: 50,
                showCursor: false,
                startDelay: 1500,
              }
              if (idx <= Object.keys(paragraphs).length) params.onComplete = nextFn
              new Typed( "#typed", params)
              infospot.focus(1000)
            }
          })
        new Typed( "#typed", {
          strings: paragraphs.welcome,
          typeSpeed: 50,
          showCursor: false,
          startDelay: 1500,
          onComplete: tourstops
        })

      }
    },
    infospots: {
      matiste: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -4976.40, 70.42, -397.49 )
        infospot.addHoverText('Matiste')
        return infospot
      },
      caravaggio: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -3777.65, 2114.80, 2482.66 )
        infospot.addHoverText('Caravaggio')
        return infospot
      },
      monet: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -100.00, 100.00, 4627.94 )
        infospot.addHoverText('Monet')
        return infospot
      },
      ingres: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -3312.37, 700.40, -3226.61 )
        infospot.addHoverText('Ingres')
        return infospot
      }
    }
  },
  {
    bg: "./assets/media/images/workshop.jpg",
    title: "workshop",
    portal: [2050.00, 50.00, 5000.00],
    tour: {
      paragraphs: {
        welcome: ['The <strong>Rhine Gallery</strong> : Workshop', '' ],
        spot1: ['Model Plane', ''],
        spot2: ['Air Filtration System', ''],
        spot3: ['Adptive Sampler', ''],
        spot4: ['Control Box', ''],
        ending: ['Let\'s keep going...', '']
      },
      intro: (paragraphs) => {

        threesixtyPanorama.panoramas[4].children
          .forEach((infospot, idx) => {
            window[`tourstop${idx > 0 ? idx : 's'}`] = () => {
              let nextCopy  = Object.keys(paragraphs)[idx + 1]
              let nextFn    = window[`tourstop${idx+1}`]
              let params    = {
                strings: paragraphs[`${nextCopy}`],
                typeSpeed: 50,
                showCursor: false,
                startDelay: 1500,
              }
              if (idx <= Object.keys(paragraphs).length) params.onComplete = nextFn
              new Typed( "#typed", params)
              infospot.focus(1000)
            }
          })
        new Typed( "#typed", {
          strings: paragraphs.welcome,
          typeSpeed: 50,
          showCursor: false,
          startDelay: 1500,
          onComplete: tourstops
        })

      }
    },
    infospots: {
      modelPlane: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -3183.11, 547.81, 3803.89 )
        infospot.addHoverText('Model Plane')
        return infospot
      },
      airFiltrationSystem: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( 2704.20, 356.26, 4180.85 )
        infospot.addHoverText('Air Filtration System')
        return infospot
      },
      adptiveSampler: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( 635.86, -897.70, 4869.20 )
        infospot.addHoverText('Adptive Sampler')
        return infospot
      },
      controlBox: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -4812.55, -722.57, 1121.06 )
        infospot.addHoverText('Control Box')
        return infospot
      }
    }
  },
  {
    bg: "./assets/media/images/studio.jpg",
    title: "studio",
    portal: [-5250.49, -100.46, -2000.60],
    tour: {
      paragraphs: {
        welcome: ['The <strong>Rhine Gallery</strong> : Studio', '' ],
        spot1: ['Primary Monitor', ''],
        spot2: ['Primary Tv Set', ''],
        spot3: ['Primary Camera', ''],
        spot4: ['Secondary Tv Set', ''],
        ending: ['Let\'s keep going...', '']
      },
      intro: (paragraphs) => {

        threesixtyPanorama.panoramas[5].children
          .forEach((infospot, idx) => {
            window[`tourstop${idx > 0 ? idx : 's'}`] = () => {
              let nextCopy  = Object.keys(paragraphs)[idx + 1]
              let nextFn    = window[`tourstop${idx+1}`]
              let params    = {
                strings: paragraphs[`${nextCopy}`],
                typeSpeed: 50,
                showCursor: false,
                startDelay: 1500,
              }
              if (idx <= Object.keys(paragraphs).length) params.onComplete = nextFn
              new Typed( "#typed", params)
              infospot.focus(1000)
            }
          })
        new Typed( "#typed", {
          strings: paragraphs.welcome,
          typeSpeed: 50,
          showCursor: false,
          startDelay: 1500,
          onComplete: tourstops
        })

      }
    },
    infospots: {
      primaryMonitor: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -5000.00, -1825.25, 197.56 )
        infospot.addHoverText('Primary Monitor')
        return infospot
      },
      primaryTvSet: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( 4292.56, -1055.42, 2318.76 )
        infospot.addHoverText('Primary Tv Set')
        return infospot
      },
      primaryCamera: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( 708.52, -867.37, 4863.80 )
        infospot.addHoverText('Primary Camera')
        return infospot
      },
      secondaryTvSet: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( 717.86, -1380.16, -4741.29 )
        infospot.addHoverText('Secondary Tv Set')
        return infospot
      }
    }
  },
  {
    bg: "./assets/media/images/office.jpg",
    title: "office",
    portal: [-1750.97, -325.42, -4788.45],
    tour: {
      paragraphs: {
        welcome: ['The <strong>Rhine Gallery</strong> : Back Office', '' ],
        spot1: ['Poster: Glashalf', ''],
        spot2: ['Patio', ''],
        spot3: ['Poster: Cam\'minon', ''],
        spot4: ['Gallery Live feed', ''],
        ending: ['That\'s it for the tour', 'Feel free to look around', '']
      },
      intro: (paragraphs) => {

        threesixtyPanorama.panoramas[6].children
          .forEach((infospot, idx) => {
            window[`tourstop${idx > 0 ? idx : 's'}`] = () => {
              let nextCopy  = Object.keys(paragraphs)[idx + 1]
              let nextFn    = window[`tourstop${idx+1}`]
              let params    = {
                strings: paragraphs[`${nextCopy}`],
                typeSpeed: 50,
                showCursor: false,
                startDelay: 1500,
              }
              if (idx <= Object.keys(paragraphs).length) params.onComplete = nextFn
              new Typed( "#typed", params)
              infospot.focus(1000)
            }
          })
        new Typed( "#typed", {
          strings: paragraphs.welcome,
          typeSpeed: 50,
          showCursor: false,
          startDelay: 1500,
          onComplete: tourstops
        })

      }
    },
    infospots: {
      glasshalf: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -4682.43, -75.32, -1726.62 )
        infospot.addHoverElement( document.getElementById( "glasshalf" ), 200 )
        return infospot
      },
      patio: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( 2905.29, 312.49, 4052.31 )
        infospot.addHoverText('Patio')
        return infospot
      },
      camminon: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -1519.27, 210.70, 4753.64 )
        infospot.addHoverText('Poster: Cam\'minon')
        return infospot
      },
      galleryLiveFeed: () => {
        var infospot = new panolens.Infospot(250, adIcons.dataImages.media)
        infospot.position.set( -3300.07, 350.64, -3831.30 )
        infospot.addHoverText('Gallery Live feed')
        return infospot
      }
    }
  }
]

const WebApp = () => {

  window.adIcons      = icons
  window.adInstance   = new Ad(window.AdPackage || AdPackage)
  window.mediaPackage = new Media(window.AdPackageMedia || [AdPackageMedia[1]])

  const panolensInst  = document.querySelector('.panolens-container')
  const panolensBrand = document.querySelector('#ad-panorama-logo')

  events.onMouseenter(panolensInst, panolensBrand.classList.add('pulse'))
  events.onMouseleave(panolensInst, panolensBrand.classList.remove('pulse'))

  AdMacros(window.AdPackage.adMacros, window.AdPackage.adCTA)

}

events.onContentLoaded(window, WebApp)
