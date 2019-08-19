export default class renderEngine {
  /**
   * The renderEngine Class.
   * Property (constructor) in renderEngine which creates the class object.
   * @classdesc This is a description of the renderEngine class.
   * @member {Function} renderEngine
   * @access public
   * @constructs
   * @requires {Module/Class}
   * @param {null} None no parameter
   * @example
   * new renderEngine()
   * @returns {Class} renderEngine
   * @property {object} renderEngine.state - renderEngine state object
   * @author Alex Reid <https://github.com/aareid10>
   * @see {@link http://github.com|ProjectRepo}
   * @since 1.0.0
   */
  constructor() {
    this.state = {
      hooks: {
        showcase: document.querySelector('#gwt_content'),
        template: document.querySelector('#athlete_card')
      }
    }
  }

  renderValues(nodeInstance, athleteInstance) {
    nodeInstance.querySelector('.athlete_name').innerText                   = `${athleteInstance.name.first} ${athleteInstance.name.last}`
    nodeInstance.querySelector('.athlete_school').innerText                 = athleteInstance.school.name || athleteInstance.school.abbreviation
    nodeInstance.querySelector('.athlete_meta_position--value').innerText   = athleteInstance.position.abbreviation || athleteInstance.position.name
    nodeInstance.querySelector('.athlete_meta_year--value').innerText       = athleteInstance.experience.name || athleteInstance.experience.abbreviation
    nodeInstance.querySelector('.athlete_image').src                        = athleteInstance.playerPic.secure_url
    nodeInstance.querySelector('.card').id                                  = `athlete-${athleteInstance.slug}`
  }

  renderAttrs(nodeInstance, athleteInstance) {
    nodeInstance.querySelector('.card').setAttribute('entry', athleteInstance._id)
    nodeInstance.querySelector('.card').setAttribute('name', `${athleteInstance.name.first} ${athleteInstance.name.last}`)
    nodeInstance.querySelector('.card').setAttribute('school', athleteInstance.school.name || athleteInstance.school.abbreviation)
    nodeInstance.querySelector('.card').setAttribute('position', athleteInstance.position.abbreviation || athleteInstance.position.name)
    nodeInstance.querySelector('.card').setAttribute('year', athleteInstance.experience.name || athleteInstance.experience.abbreviation)
    nodeInstance.querySelector('.card').setAttribute('bio', athleteInstance.bio)
    nodeInstance.querySelector('.card [type="checkbox"]').onclick = (e) => {
      alert(`vote for ${athleteInstance.name.first} ${athleteInstance.name.last} - ${athleteInstance._id}`)
      e.path[0].parentNode.nextSibling.nextSibling.innerText = 'VOTED!'
      document.querySelectorAll('.card [type="checkbox"]').forEach(el => el.remove())
      document.querySelectorAll('.card .custom_checkbox__wrapper').forEach(el => el.style.background = '#63b3ed')
    }
  }

  renderAthletes(athletes, template, showcase) {

    return new Promise((resolve) => {

      function athleteGeneration(itr, template, showcase, fxValues, fxAttrs) {
        let segment = itr.next()
        if (!segment.done) {
          let instance = template.content.cloneNode(true)
          fxValues(instance, segment.value[1])
          fxAttrs(instance, segment.value[1])
          showcase.appendChild(instance)
          athleteGeneration(itr, template, showcase, fxValues, fxAttrs)
        }
        else {
          template.remove()
          resolve(showcase.childNodes)
        }
      }

      athleteGeneration(
        athletes,
        template,
        showcase,
        this.renderValues,
        this.renderAttrs
      )
      this.renderCoach()

    })

  }

  renderCoach() {
    const coachCard = document.querySelector('#athlete-dabo-swinney')
    coachCard.id    = coachCard.id.replace('athlete', 'coach')
    this.state.hooks.showcase.prepend(coachCard)
  }

}
