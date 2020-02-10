import StateGlobal from '@states/state.global';

export default class ShopPanel {
  /**
   * The ShopPanel Class.
   * Property (constructor) in ShopPanel which creates the class object. This class manages the ShopPanel logic. This module requires the modules {@link module:StateGlobal}
   * @classdesc This is a description of the ShopPanel class.
   * @member {Function} ShopPanel
   * @access public
   * @constructs
   * @requires module:StateGlobal
   * @param {null} None no parameter
   * @example
   * new ShopPanel()
   * @returns {Class} ShopPanel
   * @property {object}  ShopPanel.state        						- ShopPanel state object
   * @property {number}  ShopPanel.state.initDrawDelay      - ShopPanel init Draw Delay
   * @property {number}  ShopPanel.state.cycleDelay        	- ShopPanel cycle Delay
   * @property {number}  ShopPanel.state.cycleDuration      - ShopPanel cycle Duration
   * @property {number}  ShopPanel.state.panelDisplayDelay  - ShopPanel panel Display Delay
   * @property {object}  ShopPanel.state.hooks        			- ShopPanel DOM elements
   * @property {element}  ShopPanel.state.hooks.panel       - DOM element for shopPanel
   * @property {element}  ShopPanel.state.hooks.close       - DOM element for shopPanel close button
   * @property {element}  ShopPanel.state.hooks.cta        	- DOM element for shopPanel cta
   * @property {element}  ShopPanel.state.hooks.link        - DOM element for shopPanel cta link
   * @author Alex Reid <https://github.com/aareid10>
   * @see {@link http://github.com|https://code.espn.com/CreativeWorks-Internal/creativeworks-templates/tree/master/ads/vertical-shoppable-banner|GitHub Repo}
   * @since 1.0.0
   */
  constructor() {
    this.state = {};
    this.state.initDrawDelay = StateGlobal.timing.initDrawDelay;
    this.state.cycleDelay = window.cycleDelay || StateGlobal.timing.cycleDelay;
    this.state.cycleDuration = window.cycleDuration || StateGlobal.timing.cycleDuration;
    this.state.panelDisplayDelay = window.panelDisplayDelay || StateGlobal.timing.panelDisplayDelay;
    this.state.hooks = {
      panel: document.querySelector('#shop__panel'),
      close: document.querySelector('#shop__panel_close'),
      cta: document.querySelector('#shop__panel_cta'),
      link: document.querySelector('#shop__panel_cta a')
    };
  }

  /**
   * Property (handler) in ShopPanel which manages the event ShopPanel event handlers.
   * @function handler
   * @memberof ShopPanel
   * @access public
   * @param {null} None no parameter
   * @example
   * ShopPanel.handler()
   * @returns {null} no return value
   */
  handler() {
    this.state.hooks.close.onclick = () => this.handleClose();
    this.state.hooks.cta.onclick = e => this.handleCta(e);
  }

  /**
   * Property (handleCta) in ShopPanel which registers the cta event handler.
   * @function handleCta
   * @memberof ShopPanel
   * @access public
   * @param {event} e event object
   * @example
   * ShopPanel.handleCta(e)
   * @returns {null} no return value
   */
  handleCta(e) {
    e.preventDefault();
    this.state.hooks.cta.className = this.checkPanel() ? 'selected' : '';
    this.checkPanel() ? setTimeout(this.resolveCta(this.state), this.state.panelClickOutDelay) : '';
  }

  /**
   * Property (handleClose) in ShopPanel which registers the close event handler.
   * @function handleClose
   * @memberof ShopPanel
   * @access public
   * @param {null} None no parameter
   * @example
   * ShopPanel.handleClose()
   * @returns {null} no return value
   */
  handleClose() {
    this.checkClose() ? this.state.hooks.close.setAttribute('class', 'selected') : '';
    setTimeout(this.resolveClose(this.state), this.state.panelDisplayDelay);
  }

  /**
   * Property (resolveCta) in ShopPanel which triggers the cta resolve state.
   * @function resolveCta
   * @memberof ShopPanel
   * @access public
   * @param {object} state state object
   * @example
   * ShopPanel.resolveCta(state)
   * @returns {null} no return value
   */
  resolveCta(state) {
    state.hooks.cta.className = '';
    window.open(state.hooks.link.href);
  }

  /**
   * Property (resolveClose) in ShopPanel which triggers the close resolve state.
   * @function resolveClose
   * @memberof ShopPanel
   * @access public
   * @param {object} state state object
   * @example
   * ShopPanel.resolveClose(state)
   * @returns {null} no return value
   */
  resolveClose(state) {
    state.hooks.panel.className = this.checkPolarity() ? 'closed-bottom' : 'closed-top';
    state.hooks.close.setAttribute('class', '');
  }

  /**
   * Property (checkPanel) in ShopPanel which checks if the panel is open.
   * @function checkPanel
   * @memberof ShopPanel
   * @access public
   * @param {null} None no parameter
   * @example
   * ShopPanel.checkPanel()
   * @returns {Boolean} returns boolean
   */
  checkPanel() {
    return this.state.hooks.panel.className.match('open') !== null;
  }

  /**
   * Property (checkPolarity) in ShopPanel which checks the polarity of the hotspot.
   * @function checkPolarity
   * @memberof ShopPanel
   * @access public
   * @param {null} None no parameter
   * @example
   * ShopPanel.checkPolarity()
   * @returns {Boolean} returns boolean
   */
  checkPolarity() {
    return this.state.hooks.panel.className.match('bottom') !== null;
  }

  /**
   * Property (checkCta) in ShopPanel which checks the state of the cta animation.
   * @function checkCta
   * @memberof ShopPanel
   * @access public
   * @param {null} None no parameter
   * @example
   * ShopPanel.checkCta()
   * @returns {Boolean} returns boolean
   */
  checkCta() {
    return this.state.hooks.cta.className !== 'selected';
  }

  /**
   * Property (checkClose) in ShopPanel which checks the state of the close animation.
   * @function checkClose
   * @memberof ShopPanel
   * @access public
   * @param {null} None no parameter
   * @example
   * ShopPanel.checkClose()
   * @returns {Boolean} returns boolean
   */
  checkClose() {
    return this.state.hooks.close.className !== 'selected';
  }
}
