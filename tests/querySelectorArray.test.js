const { querySelectorArray } = require('../index');

describe('querySelectorArray', () => {
  it('should return an array', () => {
    const expected = 'length'; // array has length but not object
    const output = querySelectorArray('.test');

    expect(output).toHaveProperty(expected);
  });

  it('should return an array even without a . selector', () => {
    const expected = 'length'; // array has length but not object
    const output = querySelectorArray('test');

    expect(output).toHaveProperty(expected);
  });

  it('should throw an error when no string is passed', () => {
    expect(() => {
      querySelectorArray();
    }).toThrow(TypeError);
  });
});
