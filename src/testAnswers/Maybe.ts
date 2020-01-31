class Maybe<T> {
  innerValue: T;
  constructor(innerValue: T) {
    this.innerValue = innerValue;
  }

  map(cb: (arg: T) => T) {
    if (this.innerValue) {
      this.innerValue = cb(this.innerValue);
    }
  }

  getOrElse(arg: T) {
    if (this.innerValue) {
      return this.innerValue;
    }
    return arg;
  }
}

// Had to use the internet to help me with this bonus part.
class ImmutableMaybeTS<T> {
  private _innerValue: T;

  constructor(innerValue: T) {
    this._innerValue = innerValue;
  }

  map(cb: (arg: T) => T) {
    if (this._innerValue) {
      this._innerValue = cb(this._innerValue);
    }
  }

  getOrElse(arg: T) {
    if (this._innerValue) {
      return this._innerValue;
    }
    return arg;
  }
}

class ImmutableMaybeNonTS<T> {
  getInnerValue: () => T;
  setInnerValue: (value: T) => void;

  constructor(innerValue: T) {
    let _innerValue = innerValue;
    this.getInnerValue = () => _innerValue;
    this.setInnerValue = (value: T) => { _innerValue = value}
  }

  map(cb: (arg: T) => T) {
    const innerValue = this.getInnerValue();
    if (innerValue) {
      this.setInnerValue(cb(innerValue));
    }
  }

  getOrElse(arg: T) {
    const innerValue = this.getInnerValue();
    if (innerValue) {
      return innerValue;
    }
    return arg;
  }
}

export { Maybe, ImmutableMaybeTS, ImmutableMaybeNonTS };
