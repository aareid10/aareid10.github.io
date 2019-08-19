import feedEngine from '@classes/feedEngine'
import renderEngine from '@classes/renderEngine'


const fs 	      = require('fs')
const path	    = require("path")
const { JSDOM } = require('jsdom')
const markup 	  = fs.readFileSync(path.join(__dirname, '../../', 'index.html'), 'utf8')
const window 	  = new JSDOM(`${markup}`).window


describe('The renderEngine Class', () => {

  const feeder    = new feedEngine()
  const renderer  = new renderEngine()

  describe('The renderAthletes property', () => {

    it('it should inject markup for athletes based on the template node', async() => {

      const showcase          = window.document.querySelector('#gwt_content')
      const template          = window.document.querySelector('#athlete_card')
      const showcaseStatePre  = [...showcase.childNodes]
      let ballot              = await feeder.collectBallot()
      let athletes            = feeder.collectAthletes(ballot.athletes)
      let athletesItr         = await athletes.entries()
      let showcaseStatePost   = await renderer.renderAthletes(
        athletesItr,
        template,
        showcase,
        renderer.renderValues,
        renderer.renderAttrs
      )
      console.warn(`
        it should inject markup for athletes based on the template node ::
        showcaseStatePre:${JSON.stringify(showcaseStatePre)}
        showcaseStatePre:${JSON.stringify(showcaseStatePost)}
      `)
      expect(showcaseStatePre).not.toStrictEqual(showcaseStatePost)
    })

  })

})
