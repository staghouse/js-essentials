const { querySelectorArray } = require('../index');

describe('querySelectorArray', () => {
  it('should return an array', () => {
    const expected = 'length'; // array has length but not object
    const output = querySelectorArray('.test');

    expect(output).toHaveProperty(expected);
  })

  it('should return an array even without a . selector', () => {
    const expected = 'length'; // array has length but not object
    const output = querySelectorArray('test');

    expect(output).toHaveProperty(expected);
  })

  it('should return an empty array when no args are passed', () => {
    const expected = 0
    const output = querySelectorArray();

    expect(output).toHaveLength(expected);
  })
})
