import MicroModal from 'micromodal'
import 'slick-carousel'
import $ from 'jquery';
window.$ = window.jQuery = $;


export default class pluginEngine {
  /**
   * The pluginEngine Class.
   * Property (constructor) in pluginEngine which creates the class object.
   * @classdesc This is a description of the pluginEngine class.
   * @member {Function} pluginEngine
   * @access public
   * @constructs
   * @requires {Module/Class}
   * @param {null} None no parameter
   * @example
   * new pluginEngine()
   * @returns {Class} pluginEngine
   * @property {object} pluginEngine.state - pluginEngine state object
   * @author Alex Reid <https://github.com/aareid10>
   * @see {@link http://github.com|ProjectRepo}
   * @since 1.0.0
   */
  constructor() {

    this.state = {

      Slick: {
        config: {
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1
        },
        hooks: {
          slickContent: $('#gwt_content'),
          slickContentNode: document.querySelector('#gwt_content')
        },
        actions: {
          slickBreakpoint : () => window.outerWidth <= this.state.Slick.slickBreakpoint,
          slickActive     : () => this.state.Slick.hooks.slickContent.hasClass('slick-initialized'),
          slickDeactivate : () => this.state.Slick.hooks.slickContent.slick('unslick'),
          slickActivate   : () => {
            this.state.Slick.hooks.slickContent.slick(this.state.Slick.config)
            document.querySelectorAll('.card .athlete_name').forEach(el => {
              el.innerText = this.state.Slick.actions.slickTruncate(el.innerText)
            })
          },
          slickTruncate   : (str, length, ending) => {
            if (length == null) length = 15
            if (ending == null) ending = '...'
            return str.length > length ? str.substring(0, length - ending.length) + ending : str
          }
        },
        slickBreakpoint: 768,
      },

      MicroModal: {
        hooks: {
          modalTriggers: null,
          modalBioScreen: document.querySelector('#modal_bio_screen'),
          modalAthleteImg: document.querySelector('#athlete_image'),
          modalAthleteName: document.querySelector('#athlete_name'),
          modalAthleteSchool: document.querySelector('#athlete_school'),
          modalAthletePosition: document.querySelector('#athlete_meta_position--value'),
          modalAthleteYear: document.querySelector('#athlete_meta_year--value')
        },
        actions: {
          update: (source) => {
            this.state.MicroModal.hooks.modalAthleteName.innerText     = source.parentNode.getAttribute('name')
            this.state.MicroModal.hooks.modalAthleteSchool.innerText   = source.parentNode.getAttribute('school')
            this.state.MicroModal.hooks.modalAthletePosition.innerText = source.parentNode.getAttribute('position')
            this.state.MicroModal.hooks.modalAthleteYear.innerText     = source.parentNode.getAttribute('year')
            this.state.MicroModal.hooks.modalBioScreen.innerText       = source.parentNode.getAttribute('bio')
            this.state.MicroModal.hooks.modalAthleteImg.src            = source.parentNode.querySelector('.athlete_image').src
            // TODO: update share buttons
            // TODO: add fade in animation to modal image
          }
        }
      }

    }

  }

  activateSlick() {
    this.state.Slick.actions.slickBreakpoint() && this.state.Slick.actions.slickActivate()
    window.addEventListener('resize', (evt) => {
      this.state.Slick.actions.slickBreakpoint()
        ? !this.state.Slick.actions.slickActive() && this.state.Slick.actions.slickActivate()
        : this.state.Slick.actions.slickActive() && this.state.Slick.actions.slickDeactivate()
    })
  }

  activateModal() {
    this.state.MicroModal.hooks.modalTriggers = document.querySelectorAll('.athlete__bio_btn')
    this.state.MicroModal.hooks.modalTriggers.forEach(btn => {
      btn.addEventListener('click', () => {
        this.state.MicroModal.actions.update(btn)
      })
    })
    MicroModal.init()
  }

}
