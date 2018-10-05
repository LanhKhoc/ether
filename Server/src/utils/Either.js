class Either {
  static of (value) {
    return new Right(value);
  }

  static toEither (value) {
    return value === null || value === undefined ? new Left(value) : new Right(value);
  }

  static encase (leftValue, rightFn) {
    try {
      return Right.of(rightFn());
    }
    catch(e) {
      return Left.of(leftValue ? leftValue : e);
    }
  }

  constructor (value) {
    if (this.constructor === Either) {
      throw new Error('Either should not be used as constructor.')
    }
    this.value = value;
  }

  bimap (leftFn, rightFn) {
    return this.isRight ? Right.map(rightFn) : Left.of(leftFn(this.value));
  }

  alt (alternative) {
    if (Either.isEither(alternative)) {
      return this.isRight ? this : alternative
    }
    throw new Error('Either#alt expects an Either as an argument')
  }

  unsafeGet() {
    return this.isLeft
      ? new TypeError('Can\'t extract the value of an Error.\n\nError does not contain a normal value - it contains an error.\nYou might consider switching from Result#unsafeGet to Result#getOrElse,\nor some other method that is not partial.\n      ')
      : this.value;
  }

  getOrElse(_default) {
    return this.isLeft ? _default : this.value;
  }

  fold(fnL, fnR) {
    return this.isLeft ? fnL(this.value) : fnR(this.value);
  }

  join() {
    return this.value;
  }
}


class Right extends Either {
  get isRight() { return true; }
  get isLeft() { return false; }

  map (fn) {
    return new Right(fn(this.value));
  }

  ap (aFn) {
    return aFn.chain(fn => Right.of(fn(this.value)));
  }

  chain (fnA) {
    return fnA(this.value);
  }

  filter(fn) {
    return fn(this.value) ? this : new Left();
  }
}


class Left extends Either  {
  get isRight() { return false; }
  get isLeft() { return true; }

  static of (value) {
    return new Left(value);
  }

  map (_) {
    return this;
  }

  ap (_) {
    return this;
  }

  chain (_) {
    return this;
  }

  filter(_) {
    return this;
  }
}

// module.exports = Either;