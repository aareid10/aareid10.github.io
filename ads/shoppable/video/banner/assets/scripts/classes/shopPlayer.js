import Player from '@vimeo/player'
import StateGlobal from '@states/state.global'
import StateHotspots from '@data/hotspots.json'
import ShopHotspot from '@classes/shopHotspot'
import ShopPanel from '@classes/shopPanel'


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
      ready: new Event('vimeoplayer--ready'),
      reset: new Event('vimeoplayer--reset')
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
    this.vimeoSDK(window.player)

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
   * The vimeoSDK property. This interfaces with the Vimeo player SDK.
   * @memberof vimeoSDK
   * @param {null} None no parameter
   * @return {null} None no parameter
   * @throws will never throw an error.
   * @since 1.0.0
   */
  vimeoSDK(player) {

    var sdkLog = (msg, data) => {
      if (window.shopunit.logging) console.info('Vimeo Player SDK();', msg, data || '{}')
    }

      /* * * * * * * * *
      *
      * EVENTS
      *
      * * * * * * * * */

        /* Native */
        player.on('loadstart', () => sdkLog('Video loading started.'))
        player.on('loadeddata', () => sdkLog('Video init load completed.'))
        player.on('canplay', () => sdkLog('Video ready for initial playback.'))
        player.on('canplaythrough', () => sdkLog('Video ready for full playback.'))
        player.on('play', () => sdkLog('Video playback initiated.'))
        player.on('playing', () => sdkLog('Video playback stated.'))
        player.on('pause', () => sdkLog('Video playback paused.'))
        player.on('ended', data => sdkLog('Video ended', data))

        /* Media */
        player.on('loaded', data => sdkLog('Video load sucessful.', data))
        player.on('bufferstart', () => sdkLog('Video preload, buffering, or seeking started.'))
        player.on('bufferend', () => sdkLog('Video preload, buffering, or seeking ended.'))

      /* * * * * * * * *
      *
      *  METHODS
      *
      * * * * * * * * */

        /* Getters */
        player.getVideoTitle().then(title => sdkLog('title:', title))
        player.getDuration().then(duration => sdkLog('getDuration:', duration))

        /* Setters */
        player.setVolume(0)
        player.setLoop(true)
        player.setAutopause(false)

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
    new ShopHotspot().parse().populate()
    new ShopPanel().handler()
    window.player.on('ended', () => {
      window.player.setCurrentTime(0)
    })
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
