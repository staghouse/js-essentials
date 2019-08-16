const { strings } = require('../../index');

describe('isString', () => {
  it('should return true if value is string', () => {
    expect(strings.isString('testing')).toEqual(true);
  });

  it('should return false if value is not string', () => {
    expect(strings.isString(123)).toEqual(false);
  });
});
