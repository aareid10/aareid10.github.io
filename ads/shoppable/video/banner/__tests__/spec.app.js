const fs 					= require('fs')
const path				= require("path")
const sinon 			= require('sinon')
const { JSDOM } 	= require('jsdom')
const App         = require('../assets/scripts/modules/app')
const markup 			= fs.readFileSync(path.join(__dirname, '../', 'index.html'), 'utf8')
const window 			= new JSDOM(`${markup}`).window


describe('in the App module', () => {

	it('Expect the shopHotspot constructor to be available', () => {
		expect(App).toBeTruthy()
	});

	it('Expect the class to Parse()', () => {
		const flexFontInit = sinon.spy(App, 'flexFontInit')
		App.flexFontInit()
		flexFontInit.restore()
		sinon.assert.calledOnce(flexFontInit)
	});

	it('Expect the class to Parse()', () => {
		const setClickThrough = sinon.spy(App, 'setClickThrough')
		App.setClickThrough()
		setClickThrough.restore()
		sinon.assert.calledOnce(setClickThrough)
	});

	it('Expect the class to Parse()', () => {
		const preloadImages = sinon.spy(App, 'preloadImages')
		App.preloadImages()
		preloadImages.restore()
		sinon.assert.calledOnce(preloadImages)
	});

});
