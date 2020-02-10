import Ad from '/Users/reidal/_Core/_Work/Repos/creativeworks-templates/ads/360-multimedia-banner/uap-banner/assets/scripts/classes/Ad.js'
import { expect } from 'chai'
import sinon from 'sinon'
require('jsdom-global')()

global.console.warn   = () => {}
global.console.log    = () => {}
global.console.error  = () => {}

describe('The Ad Class', () => {

  it('should check the Ad parameters', () => {

    /* Arrange */
    let adCheckSpy = sinon.spy(Ad.prototype, 'adCheck')


    /* Act */
    let AdPackage = {
      "adVariant": "vertical",
      "adSize": "xl"
    }
    let ad360 = new Ad(AdPackage)


    /* Assert */
    expect(adCheckSpy.called).to.be.true


    /* Reset */
    adCheckSpy.restore()

  })

  it('should parse the Ad parameters', () => {

    /* Arrange */
    let adParseSpy = sinon.spy(Ad.prototype, 'adParse')
    let adCheckSpy = sinon.spy(Ad.prototype, 'adCheck')


    /* Act */
    let AdPackage = {
      "adVariant": "vertical",
      "adSize": "xl"
    }
    let ad360 = new Ad(AdPackage)


    /* Assert */
    expect(adCheckSpy.called).to.be.true
    expect(adParseSpy.called).to.be.true


    /* Reset */
    adCheckSpy.restore()
    adParseSpy.restore()

  })

  it('should recognize all valid Ad parameters', () => {

    /* Arrange */
    let adSizes    = ['xl']
    let adVariants = ['billboard', 'vertical']
    let adParseSpy = sinon.spy(Ad.prototype, 'adParse')
    let adCheckSpy = sinon.spy(Ad.prototype, 'adCheck')


    /* Act */
    adVariants.map(variant => {
      adSizes.map(size => {
        let AdPackage = {
          "adVariant": variant,
          "adSize": size
        }
        let ad360 = new Ad(AdPackage)
      })
    })


    /* Assert */
    expect(adCheckSpy.called).to.be.true
    expect(adParseSpy.called).to.be.true
    expect(adCheckSpy.callCount).to.equal(2)
    expect(adParseSpy.callCount).to.equal(2)


    /* Reset */
    adCheckSpy.restore()
    adParseSpy.restore()

  })

  it('should throw an error on empty Ad parameters', () => {

    /* Arrange */
    let adCheckSpy = sinon.spy(Ad.prototype, 'adCheck')
    let adParseSpy = sinon.spy(Ad.prototype, 'adParse')


    /* Act */
    try {
      let AdPackage = {}
      let ad360 = new Ad(AdPackage)
    }
    catch (e) {}


    /* Assert */
    expect(adCheckSpy.threw()).to.be.true
    expect(adParseSpy.threw()).to.be.true


    /* Reset */
    adCheckSpy.restore()
    adParseSpy.restore()

  })

  // it('should throw an error on incomplete Ad parameters', () => {
  //
  //   /* Arrange */
  //   let adCheckSpy = sinon.spy(Ad.prototype, 'adCheck')
  //   let adParseSpy = sinon.spy(Ad.prototype, 'adParse')
  //
  //
  //   /* Act */
  //   try {
  //     let AdPackage = {
  //       "adVariant": "vertical"
  //     }
  //     let ad360 = new Ad(AdPackage)
  //   }
  //   catch (e) {}
  //
  //
  //   /* Assert */
  //   expect(adCheckSpy.threw()).to.be.true
  //   expect(adParseSpy.threw()).to.be.true
  //
  //
  //   /* Reset */
  //   adCheckSpy.restore()
  //   adParseSpy.restore()
  //
  // })
  
  // it('should throw an error on incorrect Ad parameters', () => {
  //
  //   /* Arrange */
  //   let adCheckSpy = sinon.spy(Ad.prototype, 'adCheck')
  //   let adParseSpy = sinon.spy(Ad.prototype, 'adParse')
  //
  //
  //   /* Act */
  //   try {
  //     let AdPackage = {
  //       "adVariant": "collaboration",
  //       "adSize": "xxl"
  //     }
  //     let ad360 = new Ad(AdPackage)
  //   }
  //   catch (e) {}
  //
  //
  //   /* Assert */
  //   expect(adCheckSpy.threw()).to.be.true
  //   expect(adParseSpy.threw()).to.be.true
  //
  //
  //   /* Reset */
  //   adCheckSpy.restore()
  //   adParseSpy.restore()
  //
  // })

})
