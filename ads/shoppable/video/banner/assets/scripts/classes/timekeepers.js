class RecurringTimer {
  constructor(callback, delay) {
    let timerId;
    let start;
    let remaining = delay;

    this.pause = function() {
      window.clearTimeout(timerId);
      remaining -= new Date() - start;
    };

    const resume = function() {
      start = new Date();
      timerId = window.setTimeout(function() {
        remaining = delay;
        resume();
        callback();
      }, remaining);
    };

    this.resume = resume;
  }
}

class Timer {
  constructor(callback, delay) {
    let timerId;
    let start;
    let remaining = delay;
    this.pause = function() {
      window.clearTimeout(timerId);
      remaining -= new Date() - start;
    };
    this.resume = function() {
      start = new Date();
      window.clearTimeout(timerId);
      timerId = window.setTimeout(callback, remaining);
    };
    this.resume();
  }
}

export { RecurringTimer, Timer };
