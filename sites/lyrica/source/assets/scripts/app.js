
/* The Parcel build tool doesn't always play nicely with Dot-Env */
try { require('dotenv').config({ path: '../../.env' }) }
catch (e) { console.log('Enviroment loaded.') }


/* Output raw analysis results to console */
function logAnalysis() {
  console.log('======== LYRICA RAW ANALYSIS RESULTS ========');
  Object.keys(Lyrica.Analyser.state.results.prolific).map(category => {
    if (category == 'primaryArtists') console.log('Category :: ======== Primary Lyrical Sections ========')
    if (category == 'actualArtists') console.log('Category :: ======== Actual Lyrical Sections ========')
    if (category == 'uniqueWords')  console.log('Category :: ======== Unique Words ========')
    Lyrica.Analyser.state.results.prolific[`${category}`].map((result, idx) => {
      if (category == 'primaryArtists') console.log(`Artist RAnk #${idx+1} — ${result[0]} :: ${result[1]} Primary Lyrical Sections`)
      if (category == 'actualArtists') console.log(`Artist RAnk #${idx+1} — ${result[0]} :: ${result[1]} Actual Lyrical Sections`)
      if (category == 'uniqueWords') console.log(`Artist RAnk #${idx+1} — ${result[0]} :: ${result[1]} Unique Words`)
    })
  })
  console.log('======== LYRICA RAW ANALYSIS RESULTS ========');
}


/* Execute */
window.addEventListener('DOMContentLoaded', () => {


  const autorun = confirm('Would you like to autorun this demonstration?')


  window.addEventListener('signal--parsing-complete', (e) => {


    /* Enable analysis trigger once data stream loads */
    Lyrica.enableResults()


    /* Analyis A: by Primary Artist */
    document.querySelector('#trigger__primaryartists').addEventListener('click', () => {
      global.addEventListener('signal--analysis--primaryArtist-complete', () => {
        Lyrica.renderResults("primarySections")
        document.querySelector('#trigger__primaryartists').remove()
      })
      Lyrica.Analyser.lyricalAnalysisA(Lyrica.Parser.data)
    })


    /* Analyis A: Autorun */
    autorun && document.querySelector('#trigger__primaryartists').click()


    /* Analyis A: by Actual Artist */
    document.querySelector('#trigger__actualartists').addEventListener('click', () => {
      global.addEventListener('signal--analysis--actualArtist-complete', () => {
        Lyrica.renderResults("anySections")
        document.querySelector('#trigger__actualartists').remove()
      })
      Lyrica.Analyser.lyricalAnalysisB(Lyrica.Parser.data)
    })


    /* Analyis B: Autorun */
    autorun && document.querySelector('#trigger__actualartists').click()


    /* Analyis C: by Number of Unique Words */
    document.querySelector('#trigger__uniquewords').addEventListener('click', () => {
      global.addEventListener('signal--analysis--uniqueWords-complete', () => {
        Lyrica.renderResults("uniqueWords")
        document.querySelector('#trigger__uniquewords').remove()
      })
      Lyrica.Analyser.lyricalAnalysisC(Lyrica.Parser.data)
      logAnalysis()
    })


    /* Analyis C: Autorun */
    autorun && document.querySelector('#trigger__uniquewords').click() && logAnalysis()


  }),


  /* secure source by loading from enviroment varibles */
  Lyrica.initialize(process.env.GENIUS_SONG_DATA)


})
