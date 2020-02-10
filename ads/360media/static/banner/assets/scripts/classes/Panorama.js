const three = require('three');
const panolens = require('panolens');
import icons from '../modules/icons'

export default class Panorama {
  /**
   * The packagePanorama Class.
   * Property (constructor) in packagePanorama which creates the class object.
   * @classdesc This is a description of the packagePanorama class.
   * @member {Function} packagePanorama
   * @access public
   * @constructs
   * @requires {Module/Class}
   * @param {null} None no parameter
   * @example
   * new packagePanorama()
   * @returns {Class} packagePanorama
   * @property {object} packagePanorama.state - packagePanorama state object
   * @author Alex Reid <https://github.com/aareid10>
   * @see {@link http://github.com|ProjectRepo}
   * @since 1.0.0
   */

  constructor(config) {
    this.title      = config.title;
    this.portal     = config.portal;
    this.tour       = config.tour;
    this.background = config.bg;
    this.infospots  = config.infospots;
    return this.panoramaInit(this.title, this.portal, this.background, this.infospots, this.tour);
  }

  panoramaInit(title, portal, background, infospots, tour) {
    try {
      if (this.panoramaCheck()) {
        const panorama = new panolens.ImagePanorama(background)
        Object.keys(infospots).forEach(infospot => {
          panorama.add(
            this.panoramaPop(...infospots[`${infospot}`])
          )
        })
        panorama.title  = title
        panorama.portal = portal
        panorama.tour   = tour
        return panorama;
      }
      /* istanbul ignore next */
      console.warn('[Error] panoramaCheck() failed.')
    }
    catch (e) {
      throw `[Error] panoramaCheck() failed. ${e}`
    }
  }

  panoramaPop(x, y, z, title) {
    var infospot = new panolens.Infospot(icons.dataImages.size, icons.dataImages.media)
    infospot.position.set(x, y, z)
    infospot.addHoverText(title)
    infospot.setElementStyle('color', this, '#f2d398')
    return infospot
  }

  panoramaCheck() {
    if (!this.background && !this.infospots) throw '[Error] No ad parameters given.';
    else if (!this.background || !this.infospots) throw '[Error] Incomplete ad parameters given.';
    else if (this.background.length == 0 || Object.keys(this.infospots).length == 0)
      throw '[Error] Incorrect panorama configuration given.';
    else return true;
  }

}
