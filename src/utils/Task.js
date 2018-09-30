class Task {
  static rejected(x) {
    return new Task((_, reject) => reject(x));
  }

  static of (x) {
    return new Task((resolve, _) => resolve(x));
  }

  constructor(fork) {
    this.fork = fork;
  }

  map(fn) {
    return new Task((resolve, reject) => this.fork(compose(resolve, fn), reject));
  }

  ap(f) {
    return this.chain(fn => f.map(fn));
  }

  chain(fn) {
    return new Task((resolve, reject) => this.fork(x => fn(x).fork(reject, resolve), reject));
  }

  join() {
    return this.chain(identity);
  }
}

// module.exports = Task;