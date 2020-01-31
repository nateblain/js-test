import { Maybe } from '../src/testAnswers/Maybe';

describe('Maybe', () => {
  it("should properly instantiate Maybe with the correct innerValue", () => {
    const maybeDefinedInner = new Maybe(41);
    const maybeUndefinedInner = new Maybe(undefined);

    expect(maybeDefinedInner.innerValue).toEqual(41);
    expect(maybeUndefinedInner.innerValue).toEqual(undefined);
  });

  it("should properly call the map method", () => {
    const maybeDefinedInner = new Maybe(41);
    const maybeUndefinedInner = new Maybe(undefined);
    const mapCb = (a: number) => a + 1;

    maybeDefinedInner.map(mapCb);
    expect(maybeDefinedInner.innerValue).toEqual(42);

    maybeUndefinedInner.map(mapCb);
    expect(maybeUndefinedInner.innerValue).toEqual(undefined);
  });

  it("should properly call the getOrElse method", () => {
    const maybeDefinedInner = new Maybe(41);
    const maybeUndefinedInner = new Maybe(undefined);

    expect(maybeDefinedInner.getOrElse(0)).toEqual(41);
    expect(maybeUndefinedInner.getOrElse(0)).toEqual(0);
  });
});
