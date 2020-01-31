import { filter, moreFunctionalFilter } from '../src/testAnswers/filter';

describe('filter', () => {
  const numbers = [0, 1, 2, 0, 0, 3, 4];
  const numbersFilterResult = [1, 2, 3, 4];
  const numberFilterCb = (num: number) => num !== 0;
  const spanishPhrase = "viva o benfica!";
  const lamePhrase = "soccer is lame"
  const phrases = [lamePhrase, spanishPhrase];
  const phrasesFilterResult = [spanishPhrase];
  const pharsesFilterCb = (phrase: string) => phrase !== lamePhrase;

  it("should correctly filter an array using the filter function", () => {
    expect(filter(numbers, numberFilterCb)).toEqual(numbersFilterResult);
    expect(filter(phrases, pharsesFilterCb)).toEqual(phrasesFilterResult);
  });

  it("should correctly filter an array using the moreFunctionalFilter function", () => {
    expect(moreFunctionalFilter(numbers, numberFilterCb)).toEqual(numbersFilterResult);
    expect(moreFunctionalFilter(phrases, pharsesFilterCb)).toEqual(phrasesFilterResult);
  });
});
