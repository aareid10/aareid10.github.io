class RecurringTimer {
  constructor(callback, delay) {

    var timerId, start, remaining = delay

    this.pause = function() {
      window.clearTimeout(timerId)
      remaining -= new Date() - start
    }

    var resume = function() {
      start = new Date()
      timerId = window.setTimeout(function() {
        remaining = delay
        resume()
        callback()
      }, remaining)
    }

    this.resume = resume
  }
}

class Timer {
  constructor (callback, delay) {
      var timerId, start, remaining = delay
      this.pause = function() {
          window.clearTimeout(timerId)
          remaining -= new Date() - start
      }
      this.resume = function() {
          start = new Date()
          window.clearTimeout(timerId)
          timerId = window.setTimeout(callback, remaining)
      }
      this.resume()
  }
}

export {
  RecurringTimer,
  Timer
}
