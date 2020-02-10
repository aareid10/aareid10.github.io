import Panorama from './Panorama'
import Typed from 'typed.js'
import icons from '../modules/icons'
const three     = require('three')
const panolens  = require('panolens')


export default class Media {
  /**
   * The packageMedia Class.
   * Property (constructor) in packageMedia which creates the class object.
   * @classdesc This is a description of the #CLASS# class.
   * @member {Function} packageMedia
   * @access public
   * @constructs
   * @requires {three}
   * @requires {panolens}
   * @param {null} None no parameter
   * @example
   * new packageMedia()
   * @returns {Class} packageMedia
   * @property {object}packageMedia.state - packageMedia state object
   * @author Alex Reid <https://github.com/aareid10>
   * @see {@link http://github.com|ProjectRepo}
   * @since 1.0.0
   */

  constructor(media) {
    this.state = {
      infospots: null,
      viewer: null,
      panoramas: [],
      media
    }
    this.hooks = {
      titleSlot: document.querySelector('#ad-panorama-title__context'),
      tourTrigger: document.querySelector('#ad-panorama-tour-trigger')
    }
    this.config = {
      controlButtons: ['fullscreen'],
      autoHideInfospot: false,
      autoRotateActivationDuration: 2500,
      autoRotateSpeed: 0.60,
      output: 'console'
    }
    this.typer = {
      typeSpeed: 50,
      showCursor: false,
      startDelay: 1500,
    }
    this.mediaInit()
  }

  debugging() {
    window.threesixtyPanorama = this.state;
    return true;
    /* * * * * * * * *
     * Tip - figure specific positions in 3d space using mouse cursor
     * setInterval(() => { this.state.viewer.outputPosition() }, 2000)
     * * * * * * * * */
  }

  dependencies() {
    if (three && panolens) console.warn('360°MediaBanner(); Dependencies: Loaded.')
    window.three = three
    window.panolens = panolens
    three.ImageUtils.crossOrigin = ''
    return true
  }

  media() {

    this.state.viewer = new panolens.Viewer(window.AdPackageConfig || this.config)

    this.mediaSetGaze(new three.Vector3(4392.83, -1091.74, -2106.09))

    this.state.media.forEach(panorama => {
      try {
        let panoramaInst = new Panorama(panorama)
        this.state.panoramas.push(panoramaInst)
        this.state.viewer.add(panoramaInst)
      } catch (e) {
        /* istanbul ignore next */
        console.warn(`[Error] this.state.viewer.add(new Panorama(panorama)) failed. ${e}`)
      }
    });

    return true;

  }

  mediaInit() {

    try {
      if (this.mediaCheck()) {
        this.dependencies()
        this.media()
        this.mediaLink()
        this.debugging()
      } else {
        /* istanbul ignore next */
        console.warn('[Error] mediaCheck() failed.')
      }
    } catch (e) {
      throw `[Error] mediaCheck() failed. ${e}`
    }

  }

  mediaLink() {

    let panoramaStack  = this.state.viewer.scene.children
    let panoramaUBound = panoramaStack.length - 1

    panoramaStack.forEach((panorama, idx) => {

      let prevSib
      let nextSib
      let nextVector = new three.Vector3(...panorama.portal)
      let prevVector = new three.Vector3(...panorama.portal.map(a => a-icons.dataImages.size))
      let linkLog = panorama => {
        panorama.children
        .filter(child => child.toPanorama instanceof Object)
        .map(link => link.toPanorama.title)
      }

      if (idx > 0 && idx < panoramaUBound) {
        prevSib = panoramaStack[idx-1]
        nextSib = panoramaStack[idx+1]
        panorama.link(
          prevSib,
          prevVector,
          icons.dataImages.size,
          icons.dataImages.backward
        )
        panorama.link(
          nextSib,
          nextVector,
          icons.dataImages.size,
          icons.dataImages.foreward
        )
        console.warn("new panaorama link: -> ", linkLog(panorama))
      }
      else if (idx > 0 && idx == panoramaUBound) {
        prevSib = panoramaStack[idx-1]
        panorama.link(
          prevSib,
          prevVector,
          icons.dataImages.size,
          icons.dataImages.backward
        )
        console.warn("new panaorama link: -> ", linkLog(panorama))
      }
      else if (idx == 0) {
        nextSib = panoramaStack[idx+1]
        panorama.link(
          nextSib,
          nextVector,
          icons.dataImages.size,
          icons.dataImages.foreward
        )
        console.warn("new panaorama link: -> ", linkLog(panorama))
      }

      this.mediaTour(panorama)

    })

  }

  mediaTour(panorama) {

    panorama.tour.intro = (paragraphs) => {

      panorama.children.forEach((infospot, idx) => {
          window[`tourstop${idx > 0 ? idx : 's'}`] = () => {
            let nextCopy    = Object.keys(paragraphs)[idx + 1]
            let nextFn      = window[`tourstop${idx+1}`]
            let dynParams   = Object.assign(this.typer, { strings: paragraphs[`${nextCopy}`] })
            if (idx <= Object.keys(paragraphs).length) dynParams.onComplete = nextFn
            new Typed( "#typed", dynParams)
            infospot.focus(1000)
          }
        })

      const initParams = Object.assign(
        this.typer,
        { strings: paragraphs.welcome, onComplete: window.tourstops }
      )
      new Typed( "#typed", initParams)

    }

    panorama.addEventListener('load', () => {

      console.warn(`360°MediaBanner()(Scene:${panorama.title});`)

      /* Update Panorama Tour */
      this.hooks.tourTrigger.classList.remove('running')
      this.hooks.tourTrigger.onclick = () => {
        this.hooks.tourTrigger.classList.add('running')
        panorama.tour.intro(panorama.tour.paragraphs)
      }

      /* Update Panorama Title */
      this.hooks.titleSlot.innerHTML = panorama.title

      /* Update Panorama Title Hooks */
      this.mediaLink()
      panorama.children.filter(a => a.toPanorama != null).map(a => {
        a.addEventListener("click", () => {
          this.hooks.titleSlot.innerHTML = a.toPanorama.title
        })
      })

    })

    panorama.addEventListener('progress', this.mediaProgress)

  }

  mediaCheck() {
    if (!this.state.media) throw '[Error] No media parameters given.';
    else if (this.state.media.length == 0) throw '[Error] Incorrect media parameters given.';
    else return true;
  }

  mediaSetGaze(target) {
    /**
    * Set line of sight for panolens camera.
    *
    * Panolens uses `THREE.OrbitControls` as a way to control the camera
    * so normal `THREE.PerspectiveCamera.rotation` does NOT work.
    *
    * @param  {THREE.Vector} target - Target to look at.
    */
    const { x, y, z } = target.normalize();
    console.warn(x, y, z);
    this.state.viewer.camera.position.set(x, -y, -z);

  }

  mediaProgress(event) {
    let maxwidth = document.querySelector('body').offsetWidth
    var progress = (event.progress.loaded/event.progress.total) * maxwidth
    if (progress < maxwidth && document.querySelector('#ad-panorama-progress').classList.contains('finish')) {
      document.querySelector('#ad-panorama-progress').classList.remove('finish')
    }
    setTimeout(() => {
      document.querySelector('#ad-panorama-progress').style.width = `${progress}px`
      if (progress === maxwidth) document.querySelector('#ad-panorama-progress').classList.add('finish')
    }, 5000)
  }

}
