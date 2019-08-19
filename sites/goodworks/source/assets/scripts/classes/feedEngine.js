export default class feedEngine {
  /**
   * The feedEngine Class.
   * Property (constructor) in feedEngine which creates the class object.
   * @classdesc This is a description of the feedEngine class.
   * @member {Function} feedEngine
   * @access public
   * @constructs
   * @requires {Module/Class}
   * @param {null} None no parameter
   * @example
   * new feedEngine()
   * @returns {Class} feedEngine
   * @property {object} feedEngine.state - feedEngine state object
   * @author Alex Reid <https://github.com/aareid10>
   * @see {@link http://github.com|ProjectRepo}
   * @since 1.0.0
   */
  constructor() {
    this.state = {
      feed: 'https://allstate-goodworks-cms.herokuapp.com/api/ballots?active=1&populate=athletes,school,experience,position'
    }
  }

  collectBallot() {
    const feed = this.state.feed
    return new Promise(function(resolve) {
      fetch(feed)
      .then(res => res.json())
      .then(data => {
        resolve(data)
      })
    })
  }

  collectAthletes(dataset) {
    let athleteMap = new Map()
    for (let [key, value] of Object.entries(dataset)) athleteMap.set(value.sortName, value)
    return athleteMap
  }

}
