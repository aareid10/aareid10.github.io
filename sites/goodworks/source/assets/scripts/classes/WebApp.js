import feedEngine from '@classes/feedEngine';
import renderEngine from '@classes/renderEngine';
import socialEngine from '@classes/socialEngine';
import pluginEngine from '@classes/pluginEngine';
import analyticsEngine from '@classes/analyticsEngine';
import interactiveEngine from '@classes/interactiveEngine';

export default class WebApp {
  /**
   * The webapp Class.
   * Property (constructor) in webapp which creates the class object.
   * @classdesc This is a description of the webapp class.
   * @member {Function} webapp
   * @access public
   * @constructs
   * @requires {Module/Class}
   * @param {null} None no parameter
   * @example
   * new webapp()
   * @returns {Class} webapp
   * @property {object} webapp.state - webapp state object
   * @author Alex Reid <https://github.com/aareid10>
   * @see {@link http://github.com|ProjectRepo}
   * @since 1.0.0
   */
  constructor() {
    this.state = {
      dataset: {}
    }
    this.attr = {
      feedEngine: new feedEngine(),
      renderEngine: new renderEngine(),
      socialEngine: new socialEngine(),
      pluginEngine: new pluginEngine(),
      analyticsEngine: new analyticsEngine(),
      interactiveEngine: new interactiveEngine()
    }
    this.status = {
      contestEnded: () => {
        const stausEndMsg           = document.createElement('div')
        const stausMsgHeadline      = document.createElement('h2')
        const stausMsgInfo          = document.createElement('h3')
        stausMsgHeadline.innerText  = 'The contest has ended as of 12.2019.'
        stausMsgInfo.innerText      = 'Please join us again next for next year\'s AllState Goodworks Team selection.'
        stausEndMsg.classList.add('status-message')
        stausEndMsg.appendChild(stausMsgHeadline)
        stausEndMsg.appendChild(stausMsgInfo)
        document.querySelector('#gwt_content').appendChild(stausEndMsg)
      }
    }
  }

  onReady(fn) {
    if (
      document.attachEvent
        ? document.readyState === "complete"
        : document.readyState !== "loading"
    ) {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

}
