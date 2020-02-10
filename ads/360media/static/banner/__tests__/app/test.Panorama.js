import Panorama from "/Users/reidal/_Core/_Work/Repos/creativeworks-templates/ads/360-multimedia-banner/uap-banner/assets/scripts/classes/Panorama.js"
import { expect } from 'chai'
import sinon from 'sinon'
require('jsdom-global')()


global.console.warn   = () => {}
global.console.log    = () => {}
global.console.error  = () => {}


describe('The Panorama Class', () => {

  it('should check the Panorama parameters', () => {


    /* Arrange */
    let panoramaInitSpy = sinon.spy(Panorama.prototype, 'panoramaInit')


    /* Act */
    let config = {
      bg: "panaorma.jpg",
      infospots: {
        sample: []
      },
    }
    let panorama360 = new Panorama(config)


    /* Assert */
    expect(panoramaInitSpy.called).to.be.true


    /* Restore */
    panoramaInitSpy.restore()

  })

  it('should throw an error on empty Panorama parameters', () => {


    /* Arrange */
    let panoramaInitSpy   = sinon.spy(Panorama.prototype, 'panoramaInit')
    let panoramaCheckSpy  = sinon.spy(Panorama.prototype, 'panoramaCheck')


    /* Act */
    try {
      let config = {}
      let panorama360 = new Panorama(config)
    }
    catch (e) {}


    /* Assert */
    expect(panoramaInitSpy.threw()).to.be.true
    expect(panoramaCheckSpy.threw()).to.be.true


    /* Restore */
    panoramaInitSpy.restore()
    panoramaCheckSpy.restore()

  })

  it('should throw an error on incomplete Panorama parameters', () => {


    /* Arrange */
    let panoramaInitSpy   = sinon.spy(Panorama.prototype, 'panoramaInit')
    let panoramaCheckSpy  = sinon.spy(Panorama.prototype, 'panoramaCheck')


    /* Act */
    try {
      let config = {
        bg: "panaorma.jpg"
      }
      let panorama360 = new Panorama(config)
    }
    catch (e) {}


    /* Assert */
    expect(panoramaInitSpy.threw()).to.be.true
    expect(panoramaCheckSpy.threw()).to.be.true


    /* Restore */
    panoramaInitSpy.restore()
    panoramaCheckSpy.restore()

  })

  it('should throw an error on incorrect Panorama parameters', () => {


    /* Arrange */
    let panoramaInitSpy   = sinon.spy(Panorama.prototype, 'panoramaInit')
    let panoramaCheckSpy  = sinon.spy(Panorama.prototype, 'panoramaCheck')


    /* Act */
    try {
      let config = {
        bg: "",
        infospots: {}
      }
      let panorama360 = new Panorama(config)
    }
    catch (e) {}


    /* Assert */
    expect(panoramaInitSpy.threw()).to.be.true
    expect(panoramaCheckSpy.threw()).to.be.true


    /* Restore */
    panoramaInitSpy.restore()
    panoramaCheckSpy.restore()

  })

})
