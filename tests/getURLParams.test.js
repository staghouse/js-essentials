const { getURLParams } = require('../index');

describe('getURLParams', () => {
  it('should return an object of URL query params', () => {
    const url = 'https://www.placecage.com?height=100&width=200';
    const expected = {
      height: "100",
      width: "200"
    }
    const output = getURLParams(url);

    expect(output).toEqual(expected);
  })
})
