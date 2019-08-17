import { querySelectorAllArray } from '../src/index';

describe('querySelectorArray', () => {
  it('should return an array', () => {
    const expected = 'length'; // array has length but not object
    const output = querySelectorAllArray('.test');

    expect(output).toHaveProperty(expected);
  });

  it('should return a TypeError when forgetting a period on the selector', () => {
    expect(() => {
      querySelectorAllArray('test');
    }).toThrow(TypeError);
  });

  it('should return an TypeError when no string is passed', () => {
    expect(() => {
      querySelectorAllArray();
    }).toThrow(TypeError);
  });
});
