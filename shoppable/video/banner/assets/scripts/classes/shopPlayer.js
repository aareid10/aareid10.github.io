import Player from '@vimeo/player'
import StateGlobal from '../states/state.global'
import StateHotspots from '../data/hotspots.json'
import ShopHotspot from '../classes/shopHotspot'
import ShopPanel from '../classes/shopPanel'


export default class ShopPlayer {

  /**
   * Property (constructor) in ShopPlayer which creates the class object.
   * @classdesc This is a description of the ShopPlayer class. This module manages the ShopHotspot logic. This module requires the modules {@link module:StateGlobal} {@link module:ShopHotspots}.
   * @member {Function} ShopPlayer
   * @constructs
   * @requires module:@vimeo/player
   * @requires module:StateGlobal
   * @requires module:ShopHotspot
   * @param {null} None no parameter
   * @example
   * new ShopPlayer()
   * @returns {Class} ShopPlayer
   * @property {object}  ShopPlayer.state  - ShopHotspot state object
   * @author Alex Reid <https://github.com/aareid10>
   * @see {@link http://github.com|https://code.espn.com/CreativeWorks-Internal/creativeworks-templates/tree/master/ads/vertical-shoppable-banner|GitHub Repo}
   * @since 1.0.0
   */
  constructor() {
    this.state = {
      host: 'https://player.vimeo.com/video/',
      ready: new Event('vimeoplayer--ready')
    }
    this.state.hotspotList = window.hotspotsURL || window.hotspots || StateHotspots
    this.hooks = {
      vimeoplayer: document.querySelector('#shop__bg__player'),
      app: document.querySelector('#shopunit')
    }
  }



  /**
   * The initialize property. This sets up the background player.
   * @memberof ShopPlayer
   * @param {null} None no parameter
   * @return {null} None no parameter
   * @throws will never throw an error.
   * @since 1.0.0
   */
  initialize() {

    /**
     * vimeoplayer Listener - description.
     * @method
     * @param {module:ShopPlayer~event:vimeoplayer--ready} e - An Status event.
     * @listens module:ShopPlayer~event:vimeoplayer--ready
     * @since 1.0.0
     */
    this.hooks.vimeoplayer.addEventListener('vimeoplayer--ready', (e) => {
      setTimeout(() => {
        this.hooks.vimeoplayer.className = 'shop__bg__player--ready'
        return e.data
      }, 500)
    }, false)

    return this
  }



  /**
   * The initialize property. This adjusts and runs the background player.
   * @memberof ShopPlayer
   * @param {null} None no parameter
   * @return {null} None no parameter
   * @throws will never throw an error.
   * @since 1.0.0
   */
  resolve() {

    this.hooks.vimeoplayer.src  = this.state.host + this.state.hotspotList.video.id + this.state.hotspotList.video.params
    window.player               = new Player(this.hooks.vimeoplayer)

    /**
     * vimeoplayer--ready - Signal that the Vimeo Embed is ready to be displayed.
     * @event vimeoplayer--ready
     * @type {object}
     * @property {object} Vimeo Player Instance - updated property.
     * @since 1.0.0
     */
    this.hooks.vimeoplayer.dispatchEvent(this.state.ready)

    return this
  }



  /**
   * The reset property. This resets hotspots asssociated with the player.
   * @memberof ShopPlayer
   * @param {null} None no parameter
   * @return {null} None no parameter
   * @throws will never throw an error.
   * @since 1.0.0
   */
  reset() {
    document.querySelectorAll('.hotspot').forEach(item => item.remove())
    setTimeout(() => { new ShopHotspot().parse().populate() }, StateGlobal.timing.cycleDelay)
    this.state.cycleStart = new Date()
    if (window.shopunit.logging) console.warn('Hotspots Reset')
  }



  /**
   * The execute property. This tracks and maniplulates hotspots lifecycles in relation to the playback duration.
   * @memberof ShopPlayer
   * @param {null} None no parameter
   * @return {null} None no parameter
   * @throws will never throw an error.
   * @since 1.0.0
   */
  execute() {
    this.state.cycleStart = new Date()
    new ShopHotspot().parse().populate()
    new ShopPanel().handler()
    setInterval(() => {
      if (!this.isPaused()) {
        if (window.shopunit.logging) console.warn(`video not paused. time remaining ${this.state.remaining}. waiting....`)
        this.state.remaining = this.checkInterval()
        if (this.isFinshed()) {
          this.reset()
          if (window.shopunit.logging) console.warn('resetting....')
        }
      }
      else {
        if (window.shopunit.logging) console.warn(`video still paused. time remaining ${this.state.remaining} waiting....`)
        this.state.cycleStart = new Date(Date.now() - (StateHotspots.video.length - this.state.remaining))
      }
    }, StateGlobal.timing.cycleDelay)
  }



  /**
   * The isPaused property. This adjusts and runs the background player.
   * @memberof ShopPlayer
   * @param {null} None no parameter
   * @return {null}  whether or not the player is currently paused.
   * @throws will never throw an error.
   * @since 1.0.0
   */
  isPaused() {
    return this.hooks.app.classList.contains('banner--paused')
  }



  /**
   * The isFinshed property. This adjusts and runs the background player.
   * @memberof ShopPlayer
   * @param {null} None no parameter
   * @return {Boolean} whether or not the total playback time has been reached.
   * @throws will never throw an error.
   * @since 1.0.0
   */
  isFinshed() {
    return this.state.remaining <= 0
  }



  /**
   * The checkInterval property. This adjusts and runs the background player.
   * @memberof ShopPlayer
   * @param {null} None no parameter
   * @return {Number} Time remaining for the main player in milliseconds.
   * @throws will never throw an error.
   * @since 1.0.0
   */
  checkInterval() {
    return StateHotspots.video.length - ( new Date() - this.state.cycleStart )
  }


}
