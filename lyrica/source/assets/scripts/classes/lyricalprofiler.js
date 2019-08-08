import Parser from '@classes/lyricalParser'
import Analyser from '@classes/lyricalAnalyser'

import ReactDOM from 'react-dom'
import React from 'react'
import Display from '@components/Display';


export default class LyricalProfiler {

  constructor() {
    this.state    = {}
    this.Parser   = new Parser()
    this.Analyser = new Analyser()
  }


  async initialize(dataSource) {
    this.Parser.state.source = dataSource
    await this.Parser.inititalize()
    await this.Parser.process()
  }


  renderResults(category) {

    switch (category) {
      case "primarySections":
          ReactDOM.render(
            <Display artists={this.Analyser.state.results.prolific.primaryArtists} category={category}/>,
            document.querySelector('#lyricalProfiler__primaryartists_display')
          )
        break;
    case "anySections":
        ReactDOM.render(
          <Display artists={this.Analyser.state.results.prolific.actualArtists} category={category}/>,
          document.querySelector('#lyricalProfiler__actualartists_display')
        )
      break;
    case "uniqueWords":
        ReactDOM.render(
          <Display artists={this.Analyser.state.results.prolific.uniqueWords} category={category}/>,
          document.querySelector('#lyricalProfiler__uniqueness_display')
        )
      break;
      default:
        throw 'LyricalProfiler.renderResults ERR: Incorrect parameter(s)'
    }

  }


  enableResults() {
    const header   = document.querySelector('header')
    const msg      = document.querySelector('#init_msg')
    const triggers = document.querySelectorAll('.trigger')
    msg.remove()
    header.classList.remove('loading')
    triggers.forEach(trigger => {
      trigger.classList.remove('disabled')
    })
  }

}
