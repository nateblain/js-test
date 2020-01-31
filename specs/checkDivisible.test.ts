import checkDivisible from '../src/testAnswers/checkDivisible';

describe('checkDivisible', () => {
  it("should be true for a number divisible by 5", () => {
    expect(checkDivisible(20)).toEqual(true);
  });

  it("should be true for a number divisible by 3", () => {
    expect(checkDivisible(9)).toEqual(true);
  });

  it("should be false for a number not divisible by 5 or 3", () => {
    expect(checkDivisible(11)).toEqual(false);
  });
});
