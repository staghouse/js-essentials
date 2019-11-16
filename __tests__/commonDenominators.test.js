import { commonDenominators } from '../src/index';

describe('commonDenominators', () => {
  it('should take no arguments and return []', () => {
    let output = commonDenominators();
    let expected = [];

    expect(output).toEqual(expected);
  });

  it('should take all invalid arguments and return []', () => {
    let output = commonDenominators('', {}, []);
    let expected = [];

    expect(output).toEqual(expected);
  });

  it('should take 1 and return [1]', () => {
    let output = commonDenominators(1);
    let expected = [1];

    expect(output).toEqual(expected);
  });

  it('should take a single number 8 and return [1, 2, 4, 8] ', () => {
    let output = commonDenominators(8);
    let expected = [1, 2, 4, 8];

    expect(output).toEqual(expected);
  });

  it('should take a repeat numbers 8 and return [1, 2, 4, 8] ', () => {
    let output = commonDenominators(8, 8);
    let expected = [1, 2, 4, 8];

    expect(output).toEqual(expected);
  });

  it('should take a lower decimal and 8 and return [1, 2, 4, 8] ', () => {
    let output = commonDenominators(7.9, 8);
    let expected = [1, 2, 4, 8];

    expect(output).toEqual(expected);
  });

  it('should take invalid arguments and 7 and 12 and return [1]', () => {
    let output = commonDenominators(7, 12, '', {}, []);
    let expected = [1];

    expect(output).toEqual(expected);
  });

  it('should take invalid arguments and 20 and 100 and return [1, 2, 4, 5, 10, 20]', () => {
    let output = commonDenominators(20, 100, '', {}, []);
    let expected = [1, 2, 4, 5, 10, 20];

    expect(output).toEqual(expected);
  });

  it('should take unsorted arguments and return [1, 2, 3, 6]', () => {
    let output = commonDenominators(12, 6, '', {}, []);
    let expected = [1, 2, 3, 6];

    expect(output).toEqual(expected);
  });

  it('should ignore negative numbers', () => {
    let output = commonDenominators(12, 6, -6);
    let expected = [1, 2, 3, 6];

    expect(output).toEqual(expected);
  });
});
