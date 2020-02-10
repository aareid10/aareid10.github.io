/**
 * This module manages the generall App logic. This module requires the modules {@link module:StateGlobal} {@link module:ShopHotspot} {@link module:ShopPanel}.
 * @module
 * @requires module:StateGlobal
 * @requires module:ShopHotspot
 * @requires module:ShopPanel
 * @property {element}  shopunit.app        - Top-level app DOM element
 * @property {element}  shopunit.flexFonts  - DOM element list of dynamic font candidates.
 * @see {@link http://github.com|https://code.espn.com/CreativeWorks-Internal/creativeworks-templates/tree/master/ads/vertical-shoppable-banner|GitHub Repo}
 * @since 1.0.0
 */

import StateGlobal from '@states/state.global'
import StateHotspots from '@data/hotspots.json'
import ShopPlayer from '@classes/shopPlayer'

const shopunit = {

  app: document.querySelector('#shopunit'),
  components: document.querySelector("#shop__components"),
  player: document.querySelector("#shop__bg__player"),
  flexFonts: document.querySelectorAll('.flexFont'),
  maxWidth: 640,
  maxHeight: 960,

  /**
   * Member function (init) in app which provides a point of reference for the responsive sizing & positioning of elements.
   * @function auditDimensions
   * @access public
   * @example
   * app.auditDimensions()
   * @returns {null} no return value
   */
  auditDimensions() {
    if (window.shopunit.logging) console.info("auditing dimensions & hotspots")
    document.querySelectorAll(".hotspot").forEach(hotspot => {
      hotspot.dataset.valignmax = parseInt(hotspot.style.top)
    })
  },


  /**
   * Member function (adjustDimensions) in app which manages the responsive sizing.
   * @function adjustDimensions
   * @access public
   * @example
   * app.adjustDimensions()
   * @returns {null} no return value
   */
  adjustDimensions() {
    if (window.shopunit.logging) console.info("adjusting dimensions")
    const heightDelta = (shopunit.maxHeight*(window.innerWidth/shopunit.maxWidth))
    document.querySelector("body").style.height              = `${heightDelta}px`
    document.querySelector("#shopunit").style.height         = `${heightDelta}px`
    document.querySelector("#shop__components").style.height = `${heightDelta}px`
    document.querySelector("#shop__bg__player").style.height = `${heightDelta}px`
    if (window.shopunit.logging) console.info(`canvas dimenesions :: ${document.querySelector("#shop__components").style.height} x ${document.querySelector("#shop__components").offsetWidth}px`)
  },


  /**
   * Member function (adjustHotspots) in app which manages the positioning of elements.
   * @function adjustHotspots
   * @access public
   * @example
   * app.adjustHotspots()
   * @returns {null} no return value
   */
  adjustHotspots() {
    if (window.shopunit.logging) console.info("adjusting hotspots")
    document.querySelectorAll(".hotspot").forEach(hotspot => {
      if (window.shopunit.logging) console.info('Delta:Canvas dimensions ::', window.innerHeight/shopunit.maxHeight)
      if (window.shopunit.logging) console.info('Delta:hotspot position ::', hotspot.dataset.valignmax*(window.innerHeight/shopunit.maxHeight))
      if (window.shopunit.logging) console.info('Cached:hotspot position ::', hotspot.dataset.valignmax)
      if (window.shopunit.logging) console.info('Pre:hotspot position ::', parseInt(hotspot.style.top))
      const maxDelta    = hotspot.dataset.valignmax * ((window.innerHeight/shopunit.maxHeight)/10)
      const resolution  = hotspot.dataset.valignmax % 25
      const limiter     = hotspot.dataset.valignmax % 50
        window.innerWidth < 480
          ? parseInt(hotspot.style.top) < 25
              ? hotspot.style.top = `${ parseInt(hotspot.style.top) - (maxDelta * (resolution*1.75)) }%`
              : parseInt(hotspot.style.top) < 50
                  ? hotspot.style.top = `${ parseInt(hotspot.style.top) - (maxDelta * (resolution*1.5)) }%`
                  : parseInt(hotspot.style.top) < 75
                      ? hotspot.style.top = `${ parseInt(hotspot.style.top) - (maxDelta * (resolution*1.25)) }%`
                      : parseInt(hotspot.style.top) < 100
                        ? hotspot.style.top = `${ parseInt(hotspot.style.top) - (maxDelta * (resolution*.25)) }%`
                        : ''
          : ''
      if (window.shopunit.logging) console.info('Post:hotspot position ::', parseInt(hotspot.style.top))
    })
  },


  /**
   * Member function (init) in app which manages the app initialization.
   * @function initialize
   * @access public
   * @param {string} macro Ad Macro string
   * @param {element} elem DOM Element
   * @example
   * app.initialize()
   * @returns {null} no return value
   */
  initialize(macro, elem) {
    shopunit.flexFontInit()
    shopunit.flexFontRefresh()
    shopunit.preloadImages()
    shopunit.clickThroughLink(macro, elem)
  },


  /**
   * Member function (flexFontRefresh) in app which manages the dynamic font resize. This method actallu applies the newly caluclated font size.
   * @function flexFontRefresh
   * @access public
   * @param {null} None no parameter
   * @example
   * app.flexFontRefresh()
   * @returns {null} no return value
   */
  flexFontRefresh() {
    for (let i = 0; i < shopunit.flexFonts.length; i++) {
      const getFontPerc = shopunit.flexFonts[i].getAttribute('data-fontPerc')
      const relFontsize = document.getElementById('shopunit').offsetWidth * getFontPerc
      shopunit.flexFonts[i].style.fontSize = `${relFontsize}px`
    }
  },


  /**
   * Member function (flexFontInit) in app which manages the dynamic font resize.
   * @function flexFontInit
   * @access public
   * @param {null} None no parameter
   * @example
   * app.flexFontInit()
   * @returns {null} no return value
   */
  flexFontInit() {
    for (let i = 0; i < shopunit.flexFonts.length; i++) {
      const currFontSize = window.getComputedStyle(shopunit.flexFonts[i], null).fontSize
      const fontPerc = parseInt(currFontSize) / 640
      shopunit.flexFonts[i].setAttribute('data-fontPerc', fontPerc)
    }
  },


  /**
   * Member function (configClickThrough) in app which manages the clickThrough routing logic.
   * @function clickThroughConfig
   * @access public
   * @param {string} url Desired click-through URL.
   * @example
   * app.configClickThrough()
   * @returns {null} no return value
   */
  clickThroughConfig(url) {
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
  },


  /**
   * Member function (preloadImages) in app which manages the event app image preloading.
   * @function preloadImages
   * @access public
   * @param {null} None no parameter
   * @example
   * app.preloadImages()
   * @returns {null} no return value
   */
  preloadImages() {
    const imgs = document.getElementsByTagName('img')
    const imgArr = []
    let imgLoaded = 0
    let i
    let j

    for (i = 0; i < imgs.length; i++) {
      imgArr.push(imgs[i].src)
    }

    const imgTotal = imgArr.length

    for (j = 0; j < imgTotal; j++) {
      const image = new Image()
      image.src = imgArr[j]
      image.onload = function() {
        imgLoaded++
        if (imgLoaded === imgTotal) {
          shopunit.app.classList.add('banner--ready')
        }
      }
    }
  },


  /**
   * Member function (linkClickThrough) in app which manages the clickThrough setup logic.
   * @function clickThroughLink
   * @access public
   * @param {string} macro Ad Macro string.
   * @param {element} elem DOM Element
   * @example
   * app.linkClickThrough()
   * @returns {null} no return value
   */
  clickThroughLink(macro, elem) {
    const clickTag = macro
    const clickArea = document.getElementById(elem)
    if (window.shopunit.logging) console.info('clickArea:', elem)
    function clickThrough() {
      setTimeout(() => {
        shopunit.clickThroughConfig(clickTag)
      }, StateGlobal.timing.destinationDelay)
    }
    clickArea.addEventListener('click', clickThrough)
    clickArea.addEventListener('touchstart', clickThrough)
  }

}


window.mapDeviceRatio = () => {
  shopunit.auditDimensions()
  shopunit.adjustDimensions()
  shopunit.adjustHotspots()
}

window.addEventListener('resize', () => {
  if (window.shopunit.logging) console.info('adjust hotspots (resize)')
  shopunit.adjustDimensions()
})

window.addEventListener('hotspots--ready', () => {
  if (window.shopunit.logging) console.info('adjust hotspots (hotspot--ready)')
  window.mapDeviceRatio()
})

window.addEventListener('DOMContentLoaded', () => {
  if (window.shopunit.logging) console.info('Application Initialized')
  if (window.shopunit.logging) console.info('Cycle Delay: ', window.cycleDelay || StateGlobal.timing.cycleDelay)
  if (window.shopunit.logging) console.info('Cycle Duration: ', window.cycleDuration || StateGlobal.timing.cycleDuration)
  if (window.shopunit.logging) console.info('Panel Display Delay: ', window.panelDisplayDelay || StateGlobal.timing.panelDisplayDelay)
  if (window.shopunit.logging) console.info('Panel Type Delay: ', window.panelTypeDelay || StateGlobal.timing.panelTypeDelay)
  if (window.shopunit.logging) console.info('Product Open Delay: ', window.productOpenDelay || StateGlobal.timing.productOpenDelay)
  if (window.shopunit.logging) console.info('Product Resolve Delay: ', window.productResolveDelay || StateGlobal.timing.productResolveDelay)
  setTimeout(() => new ShopPlayer().initialize().resolve().execute(), 100)
})

window.shopunit         = shopunit
window.shopunit.logging = false
module.exports          = shopunit
