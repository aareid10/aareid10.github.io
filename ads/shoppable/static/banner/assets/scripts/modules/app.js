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

import StateGlobal from '@states/state.global';
import ShopHotspot from '@classes/shopHotspot';
import ShopPanel from '@classes/shopPanel';

const shopunit = {
  app: document.querySelector('#shopunit'),
  flexFonts: document.querySelectorAll('.flexFont'),

  /**
   * Member function (init) in app which manages the app initialization.
   * @function initialize
   * @access public
   * @param {string} macro Ad Macro string
   * @param {element} elem DOM Element
   * @example
   * app.init()
   * @returns {null} no return value
   */
  initialize(macro, elem) {
    shopunit.flexFontInit();
    shopunit.flexFontRefresh();
    shopunit.preloadImages();
    shopunit.clickThroughLink(macro, elem);
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
      const getFontPerc = shopunit.flexFonts[i].getAttribute('data-fontPerc');
      const relFontsize = document.getElementById('shopunit').offsetWidth * getFontPerc;
      shopunit.flexFonts[i].style.fontSize = `${relFontsize}px`;
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
      const currFontSize = window.getComputedStyle(shopunit.flexFonts[i], null).fontSize;
      const fontPerc = parseInt(currFontSize) / 640;
      shopunit.flexFonts[i].setAttribute('data-fontPerc', fontPerc);
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
        event.preventDefault();
        if (shopunit.dfpAdID !== undefined) {
          if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
            window.parent.app.ads.clickThrough(`${url}?ord=${shopunit.cacheBust}`, shopunit.dfpAdID);
          } else {
            window.parent.app.ads.clickThrough(url, shopunit.dfpAdID);
          }
        } else if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
          window.parent.app.ads.clickThrough(`${url}?ord=${shopunit.cacheBust}`);
        } else {
          window.parent.app.ads.clickThrough(url);
        }
      } else {
        window.open(url, '_blank');
      }
    } else if (typeof mraid !== 'undefined') {
      mraid.open(url);
    } else {
      window.open(url, '_blank');
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
    const imgs = document.getElementsByTagName('img');
    const imgArr = [];
    let imgLoaded = 0;
    let i;
    let j;

    for (i = 0; i < imgs.length; i++) {
      imgArr.push(imgs[i].src);
    }

    const imgTotal = imgArr.length;

    for (j = 0; j < imgTotal; j++) {
      const image = new Image();
      image.src = imgArr[j];
      image.onload = function() {
        imgLoaded++;
        if (imgLoaded === imgTotal) {
          shopunit.app.classList.add('banner--ready');
        }
      };
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
    const clickTag = macro;
    const clickArea = document.getElementById(elem);
    if (window.shopunit.logging) console.warn('clickArea:', elem);
    clickArea.addEventListener('click', clickThrough);
    function clickThrough() {
      setTimeout(() => {
        shopunit.clickThroughConfig(clickTag);
      }, StateGlobal.timing.destinationDelay);
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  if (window.shopunit.logging) console.warn('Application Initialized');
  if (window.shopunit.logging) console.warn('Cycle Delay: ', window.cycleDelay || StateGlobal.timing.cycleDelay);
  if (window.shopunit.logging)
    console.warn('Cycle Duration: ', window.cycleDuration || StateGlobal.timing.cycleDuration);
  if (window.shopunit.logging)
    console.warn('Panel Display Delay: ', window.panelDisplayDelay || StateGlobal.timing.panelDisplayDelay);
  if (window.shopunit.logging)
    console.warn('Panel Type Delay: ', window.panelTypeDelay || StateGlobal.timing.panelTypeDelay);
  if (window.shopunit.logging)
    console.warn('Product Open Delay: ', window.productOpenDelay || StateGlobal.timing.productOpenDelay);
  if (window.shopunit.logging)
    console.warn('Product Resolve Delay: ', window.productResolveDelay || StateGlobal.timing.productResolveDelay);
  new ShopHotspot().parse().populate();
  new ShopPanel().handler();
});
window.shopunit = shopunit;
window.shopunit.logging = false;
module.exports = shopunit;
