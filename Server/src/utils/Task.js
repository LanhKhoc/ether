const R = require('ramda');

class Task {
  static rejected(x) {
    return new Task((reject, _) => reject(x));
  }

  static of (x) {
    return new Task((_, resolve) => resolve(x));
  }

  constructor(fork) {
    this.fork = fork;
  }

  map(fn) {
    return new Task((reject, resolve) => this.fork(reject, R.compose(resolve, fn)));
  }

  ap(f) {
    return this.chain(fn => f.map(fn));
  }

  chain(fn) {
    return new Task((reject, resolve) => this.fork(reject, x => fn(x).fork(reject, resolve)));
  }

  join() {
    return this.chain(R.identity);
  }
}

module.exports = Task;