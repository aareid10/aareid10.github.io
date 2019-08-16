import WebApp from '@classes/WebApp';

window.App = new WebApp()


App.onReady(() => {

  App.attr.feedEngine.collectBallot().then(ballot => {

    if (ballot) {
      App.state.dataset.ballot   = ballot
      App.state.dataset.athletes = App.attr.feedEngine.collectAthletes(ballot.athletes)
      App.attr.renderEngine.renderAthletes(
        App.state.dataset.athletes.entries(),
        App.attr.renderEngine.state.hooks.template,
        App.attr.renderEngine.state.hooks.showcase,
        App.attr.renderEngine.renderValues,
        App.attr.renderEngine.renderAttrs
      )
      .then(() => {
        App.attr.pluginEngine.activateModal()
        App.attr.pluginEngine.activateSlick()
      })
    }

    else if (!ballot) {
      App.status.contestEnded()
    }

  })

})
