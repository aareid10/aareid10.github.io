export default class Ad {
  /**
   * The packageAd Class.
   * Property (constructor) in packageAd which creates the class object.
   * @classdesc This is a description of the packageAd class.
   * @member {Function} packageAd
   * @access public
   * @constructs
   * @param {null} None no parameter
   * @example
   * new packageAd()
   * @returns {Class} packageAd
   * @property {object} packageAd.state - packageAd state object
   * @author Alex Reid <https://github.com/aareid10>
   * @see {@link http://github.com|ProjectRepo}
   * @since 1.0.0
   */

  constructor(adPackage) {
    this.adVariants = ['billboard', 'vertical'];

    try {
      this.adVariant = adPackage.adVariant;
      this.adSize = adPackage.adSize;
      this.panolensViewer = document.querySelector('body');
    } catch (e) {
      /* istanbul ignore next */
      console.warn(e);
    }

    this.adParse(this.adVariant, this.adSize);
  }

  adParse(adVariant, adSize) {
    try {
      if (this.adCheck()) {
        switch (adVariant) {
          case 'billboard':
            this.panolensViewer.classList.add('billboard-ad');
            break;

          case 'vertical':
            this.panolensViewer.classList.add('vertical-ad');
            switch (adSize) {
              case 'xl':
                this.panolensViewer.classList.add('xl');
                break;
            }
            break;
        }
      } else {
        /* istanbul ignore next */
        console.warn('[Error] adCheck() failed.');
      }
    } catch (e) {
      throw `[Error] adCheck() failed. ${e}`;
    }
  }

  adCheck() {
    if (!this.adVariant) throw '[Error] No ad parameters given.';
    else if (!this.adVariant) throw '[Error] Incomplete ad parameters given.';
    else if (!this.adVariants.includes(this.adVariant))
      throw '[Error] Incorrect ad parameters given.';
    else return true;
  }
}
