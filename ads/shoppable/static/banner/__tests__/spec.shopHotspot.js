import ShopHotspot from '../assets/scripts/modules/shopHotspot';

const fs 					= require('fs')
const path				= require("path")
const sinon 			= require('sinon')
const { JSDOM } 	= require('jsdom')
const markup 			= fs.readFileSync(path.join(__dirname, '../', 'index.html'), 'utf8')
const window 			= new JSDOM(`${markup}`).window
const setup 			= () => {
	const shopHotspot = new ShopHotspot()
	sinon.stub(shopHotspot.state, 'hooks').value({
		panel: window.document.querySelector('#shop__panel'),
		close: window.document.querySelector('#shop__panel_close'),
		cta: window.document.querySelector('#shop__panel_cta'),
		link: window.document.querySelector('#shop__panel_cta a')
	})
	return shopHotspot
}

describe('in the ShopHotspot module', () => {

	console.log(setup().state);

	it('Expect the shopHotspot constructor to be available', () => {
		const shopHotspot = setup()
		expect(shopHotspot).toBeTruthy()
	});

	it('Expect the class to parse()', () => {
		const shopHotspot = setup()
		const parse 			= sinon.spy(shopHotspot, 'parse')
		shopHotspot.parse()
		parse.restore()
		sinon.assert.calledOnce(parse)
	});

	it('Expect the class to populate()', () => {
		const shopHotspot = setup()
		const populate 		= sinon.spy(shopHotspot, 'populate')
		shopHotspot.populate()
		populate.restore()
		sinon.assert.calledOnce(populate)
	});

});
