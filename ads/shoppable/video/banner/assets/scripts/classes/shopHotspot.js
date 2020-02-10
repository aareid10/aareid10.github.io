import TypeIt from 'typeit'
import Player from '@vimeo/player'
import StateHotspots from '@data/hotspots.json'
import StateGlobal from '@states/state.global'


export default class ShopHotspot {

   /**
    * The ShopHotspot Class.
    * Property (constructor) in ShopHotspot which creates the class object. This module manages the ShopHotspot logic. This module requires the modules {@link module:StateGlobal} {@link module:TypeIt}.
    * @classdesc This is a description of the ShopHotspot class.
    * @member {Function} ShopHotspot
    * @access public
    * @constructs
    * @requires module:StateGlobal
    * @requires module:TypeIt
    * @param {null} None no parameter
    * @example
    * new ShopHotspot()
    * @returns {Class} ShopHotspot
    * @throws will never throw an error.
    * @property {object}  ShopHotspot.state        						  - ShopHotspot state object
    * @property {number}  ShopHotspot.state.initDrawDelay       - ShopHotspot init Draw Delay
    * @property {number}  ShopHotspot.state.cycleDelay        	- ShopHotspot cycle Delay
    * @property {number}  ShopHotspot.state.cycleDuration       - ShopHotspot cycle Duration
    * @property {number}  ShopHotspot.state.panelDisplayDelay   - ShopHotspot panel Display Delay
    * @property {object}  ShopHotspot.state.hooks        			  - ShopHotspot DOM elements
    * @property {element}  ShopHotspot.state.hooks.panel       	- DOM element for shopHotspot panel
    * @property {element}  ShopHotspot.state.hooks.product      - DOM element for shopHotspot product element
    * @property {element}  ShopHotspot.state.hooks.description 	- DOM element for shopHotspot product description
    * @property {element}  ShopHotspot.state.hooks.brand       	- DOM element for shopHotspot product brand
    * @property {element}  ShopHotspot.state.hooks.price       	- DOM element for shopHotspot product price
    * @property {element}  ShopHotspot.state.hooks.sale         - DOM element for shopHotspot product price sale attribute
    * @property {element}  ShopHotspot.state.hooks.link         - DOM element for shopHotspot link
    * @author Alex Reid <https://github.com/aareid10>
    * @see {@link http://github.com|https://code.espn.com/CreativeWorks-Internal/creativeworks-templates/tree/master/ads/vertical-shoppable-banner|GitHub Repo}
    * @since 1.0.0
    */
  constructor() {
    this.state = {
      ready: new Event('hotspots--ready'),
    }
    this.state.initDrawDelay = StateGlobal.timing.initDrawDelay
    this.state.cycleDelay = window.cycleDelay || StateGlobal.timing.cycleDelay
    this.state.cycleDuration = window.cycleDuration || StateGlobal.timing.cycleDuration
    this.state.panelDisplayDelay = window.panelDisplayDelay || StateGlobal.timing.panelDisplayDelay
    this.state.panelTypeDelay = window.panelTypeDelay || StateGlobal.timing.panelTypeDelay
    this.state.productOpenDelay = window.productOpenDelay || StateGlobal.timing.productOpenDelay
    this.state.productResolveDelay = window.productResolveDelay || StateGlobal.timing.productResolveDelay
    this.state.hotspotList = window.hotspotsURL || window.hotspots || StateHotspots
    this.state.hooks = {
      app: document.querySelector('#shopunit'),
      vimeoplayer: document.querySelector('#shop__bg__player'),
      hotspots: document.querySelector('#shop__hotspots'),
      panel: document.querySelector('#shop__panel'),
      product: document.querySelector('#shop__panel_product'),
      description: document.querySelector('#shop__panel_description'),
      brand: document.querySelector('#shop__panel_brand'),
      price: document.querySelector('#shop__panel_pricing #price'),
      sale: document.querySelector('#shop__panel_pricing #sale'),
      link: document.querySelector('#shop__panel_cta a')
    }
    window.lifecycles = {}
  }



  /**
   * Property (parse) in ShopHotspot which parses the hotspot data from a variety of sources. This will get data from a remote URL, a global object, or an embedded object within the source.
   * @function parse
   * @memberof ShopHotspot
   * @access public
   * @param {Class} ShopHotspot
   * @example
   * ShopHotspot.parse()
   * @returns {Class} ShopHotspot
   */
  parse() {
    switch (true) {
      case typeof this.state.hotspotList === 'string':
        fetch(this.state.hotspotList)
          .then(response => response.json())
          .then(records => {
            this.state.hotspotList = records
          })
        break
      default:
    }
    return this
  }



  /**
   * Property (introduce) in ShopHotspot which handles hotspot into animation transitions.
   * @function introduce
   * @memberof ShopHotspot
   * @access public
   * @param {Class} ShopHotspot
   * @example
   * ShopHotspot.introduce()
   * @returns {Class} ShopHotspot
   * @throws will never throw an error.
   * @since 1.0.0
   */
  introduce(hotspot, status) {
    hotspot.classList.add('shop__hotspot--loading')
    setTimeout(() => {
      if (status == 1) window.dispatchEvent(this.state.ready)
    }, StateGlobal.timing.initDrawDelay)
    setTimeout(() => {
      hotspot.classList.remove('shop__hotspot--loading')
      hotspot.classList.add('shop__hotspot--ready')
    }, StateGlobal.timing.initLoad)
  }



  /**
   * Property (populate) in ShopHotspot which populates hotspots into the DOM based on the parsed hotspot data.
   * @function populate
   * @memberof ShopHotspot
   * @access public
   * @param {Class} ShopHotspot
   * @example
   * ShopHotspot.populate()
   * @returns {Class} ShopHotspot
   * @throws will never throw an error.
   * @since 1.0.0
   */
  populate() {
    this.state.hotspotList.hotspots.map((hotspot, index) => {
      let status = this.state.hotspotList.hotspots.length - index
      setTimeout(() => {
        this.generate(
          'hotspot',
          `hotspot${index}`,
          hotspot.id,
          hotspot.polarity,
          hotspot.styles,
          hotspot.image,
          hotspot.url,
          this.state.hotspotList.video.length,
          JSON.stringify(hotspot.lifecycle),
          JSON.stringify(hotspot.meta),
          status
        )
      }, hotspot.pulseRate * Math.floor(Math.random() * this.state.hotspotList.hotspots.length))
    })
    return this
  }



  /**
   * The vimeoSDK property. This interfaces with the Vimeo player SDK.
   * @memberof vimeoSDK
   * @param {null} None no parameter
   * @return {null} None no parameter
   * @throws will never throw an error.
   * @since 1.0.0
   */
  vimeoSDK(player, hotspot, hotspotCycle) {

    const sdkLog = (msg, data) => {
      if (window.shopunit.logging) console.info('Vimeo Player SDK();', msg, data || '{}')
    }

    /* Cues */
    player.on('cuepoint', cue => {

      sdkLog('Video cuepoint hit.', cue)

      const hotspot =
        document.querySelector(`#${cue.data.active}`) ||
        document.querySelector(`#${cue.data.inactive}`)

      switch (Object.keys(cue.data)[0]) {
        case "active":
          hotspot.classList.remove('shop__hotspot--unloading')
          hotspot.classList.add('shop__hotspot--loading')
          setTimeout(() => {
            hotspot.classList.remove('shop__hotspot--unloading')
            hotspot.classList.add('shop__hotspot--ready')
          }, StateGlobal.timing.cycleHotspotDelay)
          break;

        case "inactive":
          hotspot.classList.remove('shop__hotspot--ready')
          hotspot.classList.add('shop__hotspot--unloading')
          break;
        default:
      }
    })

    JSON.parse(hotspotCycle).map((cycle, idx) => {

      switch (Object.keys(cycle)[0]) {
        case "active":
          player.addCuePoint(cycle.active, {active: hotspot.id})
          break;
        case "inactive":
          player.addCuePoint(cycle.inactive, {inactive: hotspot.id})
          break;
        default:
      }

    })

  }



  /**
   * Property (generate) in ShopHotspot which generates the inner-workings and respective logic of each hotspot.
   * @function generate
   * @memberof ShopHotspot
   * @access public
   * @param {Class} ShopHotspot
   * @example
   * ShopHotspot.generate('hotspot', hotspot${index}`, hotspot.id, hotspot.polarity, hotspot.styles, hotspot.image, hotspot.url, JSON.stringify(hotspot.meta))
   * @returns {null} no return value
   * @throws will never throw an error.
   * @since 1.0.0
   */
  generate(className, id, key, polarity, style, image, url, phase, lifecycle, meta, status) {

    const hotspot             = document.createElement('div')
    hotspot.className         = className
    hotspot.id                = id
    hotspot.key               = key
    hotspot.dataset.image     = image
    hotspot.dataset.url       = url
    hotspot.dataset.meta      = meta
    hotspot.dataset.polarity  = polarity
    hotspot.dataset.lifecycle = lifecycle
    hotspot.onclick = (event, self = this) => {
      meta = JSON.parse(hotspot.dataset.meta)
      self.state.hooks.link.href = hotspot.dataset.url
      self.state.hooks.product.alt = [hotspot.dataset.image.match(/[a-z]+.png/g)]
      self.state.hooks.product.src = hotspot.dataset.image
      self.state.hooks.brand.innerText = meta.brand
      self.state.hooks.price.innerText = meta.price
      self.state.hooks.sale.innerText = meta.sale ? 'Sale' : ''
      self.state.hooks.app.classList.add('banner--paused')
      this.animatePanel(hotspot)
      this.animateProduct()
      player.pause()
      Object.keys(window.lifecycles).map((timer) => { window.lifecycles[`${timer}`].pause() })
    }
    Object.keys(style).map(rule => (hotspot.style[`${rule}`] = style[`${rule}`]))
    this.introduce(hotspot, status)
    this.state.hooks.hotspots.appendChild(hotspot)
    if(window.player) this.vimeoSDK(window.player, hotspot, hotspot.dataset.lifecycle)

  }



  /**
   * Property (checkPanel) in ShopHotspot which checks if the panel is open.
   * @function checkPanel
   * @memberof ShopHotspot
   * @access public
   * @param {null} None
   * @example
   * ShopHotspot.
   * @returns {Boolean} returns boolean
   * @throws will never throw an error.
   * @since 1.0.0
   */
  checkPanel() {
    return this.state.hooks.panel.className.match('open') === null
  }



  /**
   * Property (checkProduct) in ShopHotspot which checks to if the product has been shown.
   * @function checkProduct
   * @memberof ShopHotspot
   * @access public
   * @param {null} None no parameter
   * @example
   * ShopHotspot.checkProduct()
   * @returns {Boolean} returns boolean
   * @throws will never throw an error.
   * @since 1.0.0
   */
  checkProduct() {
    return this.state.hooks.panel.className === 'opened'
  }



  /**
   * Property (checkPolarity) in ShopHotspot which checks the polarity of the hotspot.
   * @function checkPolarity
   * @memberof ShopHotspot
   * @access public
   * @param {Object} hotspot hotspot data object
   * @example
   * ShopHotspot.checkPolarity()
   * @returns {Boolean} returns boolean
   * @throws will never throw an error.
   * @since 1.0.0
   */
  checkPolarity(hotspot) {
    return hotspot.dataset.polarity === 'bot'
  }



  /**
   * Property (animatePanel) in ShopHotspot which triggers the panel animation.
   * @function animatePanel
   * @memberof ShopHotspot
   * @access public
   * @param {Object} hotspot hotspot data object
   * @example
   * ShopHotspot.animatePanel()
   * @returns {null} no return value
   * @throws will never throw an error.
   * @since 1.0.0
   */
  animatePanel(hotspot) {
    setTimeout(this.updatePanel(hotspot), this.state.panelDisplayDelay)
    new TypeIt('#shop__panel_description', {
      strings: [JSON.parse(hotspot.dataset.meta).description],
      speed: 10,
      loop: false,
      cursor: false,
      startDelay: this.state.panelTypeDelay
    }).go()
  }



  /**
   * Property (animateProduct) in ShopHotspot which triggers the product animation.
   * @function animateProduct
   * @memberof ShopHotspot
   * @access public
   * @param {null} None no parameter
   * @example
   * ShopHotspot.animateProduct()
   * @returns {null} no return value
   * @throws will never throw an error.
   * @since 1.0.0
   */
  animateProduct() {
    switch (this.checkProduct()) {
      case true:
        this.animateProductOn()
        break
      case false:
        this.animateProductOff()
        break
      default:
    }
  }



  /**
   * Property (animateProductOn) in ShopHotspot which triggers the 'ProductOn' state.
   * @function animateProductOn
   * @memberof ShopHotspot
   * @access public
   * @param {null} None no parameter
   * @example
   * ShopHotspot.animateProductOn()
   * @returns {null} no return value
   * @throws will never throw an error.
   * @since 1.0.0
   */
  animateProductOn() {
    this.state.hooks.product.className = 'closed'
    setTimeout(() => {
      this.state.hooks.product.className = 'open'
    }, this.state.productOpenDelay)
    setTimeout(() => {
      this.state.hooks.product.className += ' opened'
    }, this.state.productResolveDelay)
  }



  /**
   * Property (animateProductOff) in ShopHotspot which triggers the 'ProductOff' state.
   * @function animateProductOff
   * @memberof ShopHotspot
   * @access public
   * @param {null} None no parameter
   * @example
   * ShopHotspot.animateProductOff()
   * @returns {null} no return value
   * @throws will never throw an error.
   * @since 1.0.0
   */
  animateProductOff() {
    this.state.hooks.product.className = 'open'
    setTimeout(() => {
      this.state.hooks.product.className += ' opened'
    }, this.state.productOpenDelay)
  }



  /**
   * Property (updatePanel) in ShopHotspot which triggers the 'updatePanel' state.
   * @function updatePanel
   * @memberof ShopHotspot
   * @access public
   * @param {object} hotspot hotspot data object
   * @example
   * ShopHotspot.updatePanel()
   * @returns {null} no return value
   * @throws will never throw an error.
   * @since 1.0.0
   */
  updatePanel(hotspot) {
    this.state.hooks.panel.className = this.checkPanel()
      ? this.checkPolarity(hotspot)
        ? 'open-bottom'
        : 'open-top'
      : this.state.hooks.panel.className
  }


}
