import { getActualMonth } from '../src/index';

describe('getActualMonth', () => {
  it('should take a number return the proper string month', () => {
    const month = 3;
    const expected = 'April';
    const output = getActualMonth(month);

    expect(output).toBe(expected);
  });

  it('should take a string number and return the proper string month', () => {
    const month = "3";
    const expected = 'April';
    const output = getActualMonth(month);

    expect(output).toBe(expected);
  });

  it('should return a TypeError when dont pass in a string or number', () => {
    expect(() => {
      getActualMonth();
    }).toThrow(TypeError);
  });
});
