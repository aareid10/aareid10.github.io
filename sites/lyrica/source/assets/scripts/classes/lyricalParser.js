const ndjsonStream = require('can-ndjson-stream')


export default class Parser {

  constructor() {
    this.state = {
      source: null,
      stream: null,
      poulated: false,
      dataset: [],
      signals: {
        parsing: new Event('signal--parsing-complete')
      }
    }
  }


  inititalize() {
    return new Promise(resolve => {
      fetch(this.state.source)
      .then(res => ndjsonStream(res.body))
      .then(stream => {
        this.state.stream = stream.getReader()
        resolve()
      })
    })
  }


  process() {
    return new Promise(resolve => {
      this.traverse(false, resolve)
    })
  }


  traverse(_items, resolve) {
    if (_items && _items.done) return this.signal(resolve)
    if (_items && !this.state.poulated) this.state.dataset.push(_items.value)
    this.state.stream
    this.state.stream.read().then( _items => (this.traverse(_items, resolve)))
  }


  signal(resolve) {
    this.state.poulated = true
    window.dispatchEvent(this.state.signals.parsing)
    resolve()
  }


  get data() {
    return this.state.dataset
  }

}
