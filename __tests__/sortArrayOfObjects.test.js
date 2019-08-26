import { sortArrayOfObjects } from '../src/index';

describe('sortArrayOfObjects', () => {
  it('should return the only value in an array', () => {
    const input = [{ date: '2099-01-01' }];
    const expected = input;
    const output = sortArrayOfObjects('date', input);

    expect(output).toEqual(expected);
  });

  it('should return a sorted array of objects sorted by a date property in ascending order', () => {
    const input = [{ date: '2020-01-01' }, { date: '1995-07-13' }];
    const expected = [{ date: '1995-07-13' }, { date: '2020-01-01' }];
    const output = sortArrayOfObjects('date', input);

    expect(output).toEqual(expected);
  });

  it('should return a sorted array of objects sorted by a date property in descending order', () => {
    const input = [{ date: '1995-07-13' }, { date: '2020-01-01' }];
    const expected = [{ date: '2020-01-01' }, { date: '1995-07-13' }];
    const output = sortArrayOfObjects('date', input, true);

    expect(output).toEqual(expected);
  });

  it('should return a sorted array of objects sorted by a name property in ascending order', () => {
    const input = [{ name: 'Zamboni' }, { name: 'Abracadra' }];
    const expected = [{ name: 'Abracadra' }, { name: 'Zamboni' }];
    const output = sortArrayOfObjects('name', input);
    
    expect(output).toEqual(expected);
  });
  
  it('should return a sorted array of objects sorted by a name property in descending order', () => {
    const input = [{ name: 'Abracadra' }, { name: 'Zamboni' }];
    const expected = [{ name: 'Zamboni' }, { name: 'Abracadra' }];
    const output = sortArrayOfObjects('name', input, true);

    expect(output).toEqual(expected);
  });

  it('should return a TypeError for passing in an array with not only objects', () => {
    expect(() => {
      sortArrayOfObjects('date', [[], '', Date, String, Number, 5, 0.5]);
    }).toThrow(TypeError);
  });

  it('should return a TypeError for passing in a non-string property', () => {
    const input = [{ date: '2099-01-01' }, { date: '2099-01-01' }];

    expect(() => {
      sortArrayOfObjects({}, input);
    }).toThrow(TypeError);
  });

  it('should return a TypeError for not passing in an array', () => {
    expect(() => {
      sortArrayOfObjects();
    }).toThrow(TypeError);
  });
});
