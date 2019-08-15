const { getActualMonth } = require('../index');

describe('getActualMonth', () => {
  it('should return a string month based on an int value', () => {
    const month = 3;
    const expected = 'April'
    const output = getActualMonth(month);

    expect(output).toBe(expected);
  })
})
