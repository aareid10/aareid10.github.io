import Media from '/Users/reidal/_Core/_Work/Repos/creativeworks-templates/ads/360-multimedia-banner/uap-banner/assets/scripts/classes/Media.js'
import { expect } from 'chai'
import td from 'testdouble'
import sinon from 'sinon'
require('jsdom-global')()


global.console.warn   = () => {}
global.console.log    = () => {}
global.console.error  = () => {}
const panolens        = require("panolens")


describe('The Media Class', () => {

  beforeEach(() => {
    let mediaLinkStub = sinon.stub(Media.prototype, 'mediaLink').callsFake(() => {})
  })

  afterEach(() => {
    Media.prototype.mediaLink.restore()
  })

  it('should check for Media dependencies', () => {

    /* Arrange */
    let mediaStub     = sinon.stub(Media.prototype, 'media').returns(true)
    let mediaCheckSpy = sinon.spy(Media.prototype, 'mediaCheck')


    /* Act */
    let MediaPackage = [
      {
        bg: "panaorma1.jpg",
        infospots: {
          sample: () => new Object
        }
      },
      {
        bg: "panaorma2.jpg",
        infospots: {
          sample: () => new Object
        }
      },
      {
        bg: "panaorma3.jpg",
        infospots: {
          sample: () => new Object
        }
      }
    ]
    let ad360 = new Media(MediaPackage)


    /* Assert */
    expect(mediaCheckSpy.called).to.be.true


    /* Reset */
    mediaStub.restore()
    mediaCheckSpy.restore()

  })

  it('should fail on incomplete Media dependencies', () => {

    /* Arrange */
    let mediaStub     = sinon.stub(Media.prototype, 'media').returns(true)
    let mediaCheckSpy = sinon.spy(Media.prototype, 'mediaCheck')


    /* Act */
    try {
      let ad360 = new Media()
    } catch (e) {  }


    /* Assert */
    expect(mediaCheckSpy.threw()).to.be.true


    /* Reset */
    mediaStub.restore()
    mediaCheckSpy.restore()

  })

  it('should fail on incorrect Media dependencies', () => {

    /* Arrange */
    let mediaStub     = sinon.stub(Media.prototype, 'media').returns(true)
    let mediaCheckSpy = sinon.spy(Media.prototype, 'mediaCheck')


    /* Act */
    try {
      let MediaPackage = []
      let ad360 = new Media(MediaPackage)
    } catch (e) {  }


    /* Assert */
    expect(mediaCheckSpy.threw()).to.be.true


    /* Reset */
    mediaStub.restore()
    mediaCheckSpy.restore()

  })

  it('should create the panorama media stack', () => {

    /* Arrange */
    let mediaSpy      = sinon.spy(Media.prototype, 'media')
    let panolensStub  = sinon.stub(panolens, 'Viewer').callsFake(() => {
      class Viewer {
        add(givenObj) {
          return givenObj
        }
      }
    })


    /* Act */
    try {
      let MediaPackage = [
        {
          bg: "panaorma1.jpg",
          infospots: {
            sample: () => new Object
          }
        },
        {
          bg: "panaorma2.jpg",
          infospots: {
            sample: () => new Object
          }
        },
        {
          bg: "panaorma3.jpg",
          infospots: {
            sample: () => new Object
          }
        }
      ]
      let ad360 = new Media(MediaPackage)
    }
    catch (e) {}


    /* Assert */
    expect(mediaSpy.called).to.be.true
    expect(panolensStub.called).to.be.true


    /* Reset */
    mediaSpy.restore()

  })

  it('*should link each panorama media stack', () => {

    /* Arrange */
    let panolensStub  = sinon.stub(panolens, 'ImagePanorama').callsFake(() => {
      return class ImagePanorama {
        add() {
          return new Object
        }
        link(destination, vector, iconSize, iconImg) {
          return new panolens.Infospot(destination, vector, iconSize, iconImg)
        }
      }
    })

    // let mediaLinkSpy = sinon.spy(Media.prototype, 'mediaLink')


    /* Act */
    try {
      let MediaPackage = [
        {
          bg: "panaorma1.jpg",
          infospots: {
            sample: () => new Object
          }
        },
        {
          bg: "panaorma2.jpg",
          infospots: {
            sample: () => new Object
          }
        },
        {
          bg: "panaorma3.jpg",
          infospots: {
            sample: () => new Object
          }
        }
      ]
      let ad360 = new Media(MediaPackage)
    }
    catch (e) {}


    /* Assert */
    // expect(panolensStub.called).to.be.true
    // expect(mediaLinkSpy.called).to.be.true


    /* Reset */
    panolensStub.restore()

  })

})
