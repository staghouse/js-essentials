const { getURLParams } = require('../index');

describe('getURLParams', () => {
  it('should return an object of URL query params', () => {
    const url = 'https://www.placecage.com?height=100&width=200';
    const expected = {
      height: '100',
      width: '200',
    };
    const output = getURLParams(url);

    expect(output).toEqual(expected);
  });

  it('should return an a TypeError when not passing in nothing', () => {
    expect(() => {getURLParams()}).toThrow(TypeError);
  });

  it('should return an a TypeError when not passing in a string or URL instance', () => {
    expect(() => {getURLParams({})}).toThrow(TypeError);
  });
});
