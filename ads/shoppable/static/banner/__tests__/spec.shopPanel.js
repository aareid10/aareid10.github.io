import ShopPanel from '../assets/scripts/modules/shopPanel';

const fs 					= require('fs')
const path				= require("path")
const sinon 			= require('sinon')
const { JSDOM } 	= require('jsdom')
const markup 			= fs.readFileSync(path.join(__dirname, '../', 'index.html'), 'utf8')
const window 			= new JSDOM(`${markup}`).window

function setup(){
	const shopPanel = new ShopPanel()
	sinon.stub(shopPanel.state, 'hooks').value({
		panel: window.document.querySelector('#shop__panel'),
		close: window.document.querySelector('#shop__panel_close'),
		cta: window.document.querySelector('#shop__panel_cta'),
		link: window.document.querySelector('#shop__panel_cta a')
	})
	sinon.stub(shopPanel.state.hooks.panel, 'className').value('open-bottom')
	sinon.stub(shopPanel.state.hooks.cta, 'className').value('initial')
	sinon.stub(shopPanel.state.hooks.close, 'className').value('initial')
	return shopPanel
}

describe('In the ShopPanel module', () => {

	console.log(setup().state)

	it('Expect the ShopPanel constructor to be available', () => {
		const shopPanel = setup()
		expect(shopPanel).toBeTruthy()
	})

	it('Expect the class to call Handler()', () => {
		const shopPanel 										= setup()
		const handler 											= sinon.spy(shopPanel, 'handler')
		const handleCta 										= sinon.spy(shopPanel, 'handleCta')
		const handleClose 									= sinon.spy(shopPanel, 'handleClose')
		const resolveCta 										= sinon.spy(shopPanel, 'resolveCta')
		const resolveClose 									= sinon.spy(shopPanel, 'resolveClose')
		const checkPanel 										= sinon.spy(shopPanel, 'checkPanel')
		const checkClose 										= sinon.spy(shopPanel, 'checkClose')

		shopPanel.state.hooks.cta.onclick 	= shopPanel.handleCta
		shopPanel.state.hooks.close.onclick = shopPanel.handleClose

		shopPanel.handler()
		shopPanel.state.hooks.cta.click()
		shopPanel.state.hooks.close.click()

		sinon.assert.calledOnce(shopPanel.handler)
		sinon.assert.calledOnce(shopPanel.handleCta)
		sinon.assert.calledOnce(shopPanel.handleClose)
		sinon.assert.calledOnce(shopPanel.checkPanel)
		sinon.assert.calledOnce(shopPanel.checkClose)
		expect(shopPanel.checkPanel()).toBeTruthy()

		const handleCtaSpyCall 		= shopPanel.handler.getCall(0)
		handler.restore()

	})

	it('Expect the class to call checkPanel()', () => {
		const shopPanel 	= setup()
		const checkPanel 	= sinon.spy(shopPanel, 'checkPanel')
		shopPanel.checkPanel()
		sinon.assert.calledOnce(checkPanel)
		expect(shopPanel.checkPanel()).toBeTruthy()
		checkPanel.restore()
	})

	it('Expect the class to call checkPolarity()', () => {
		const shopPanel 			= setup()
		const checkPolarity 	= sinon.spy(shopPanel, 'checkPolarity')
		shopPanel.checkPolarity()
		sinon.assert.calledOnce(checkPolarity)
		expect(shopPanel.checkPolarity()).toBeTruthy()
		checkPolarity.restore()
	})

	it('Expect the class to call checkCta()', () => {
		const shopPanel = setup()
		const checkCta 	= sinon.spy(shopPanel, 'checkCta')
		shopPanel.checkCta()
		sinon.assert.calledOnce(checkCta)
		expect(shopPanel.checkCta()).toBeTruthy()
		checkCta.restore()
	})

	it('Expect the class to call checkClose()', () => {
		const shopPanel 	= setup()
		const checkClose 	= sinon.spy(shopPanel, 'checkClose')
		shopPanel.checkClose()
		sinon.assert.calledOnce(checkClose)
		expect(shopPanel.checkClose()).toBeTruthy()
		checkClose.restore()
	})

})
