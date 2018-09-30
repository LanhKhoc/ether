class IO {
  static of (value) {
    return new IO(value)
  }

  constructor (value) {
    if (typeof value !== 'function') {
      throw new Error('IO Monad required a function')
    }
    this.value = value
  }

  map (fn) {
    return new IO(() => fn( this.run() ))
  }

  ap (aFn) {
    return IO.of(() => aFn.run()(this.run()) )
  }

  chain (fnA) {
    return fnA(this.value())
  }

  run () {
    return this.value()
  }
}

// module.exports = IO;