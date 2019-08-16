const { quickSortArray } = require('../index');

describe('quickSortArray', () => {
  it('should return a sorted array of numbers', () => {
    const input = [100, 2,4,6,8,10,1,3,5,7,9];
    const expected = [1,2,3,4,5,6,7,8,9,10,100];
    const output = quickSortArray(input);

    expect(output).toEqual(expected);
  });

  it('should return a the only value in an array', () => {
    const input = [3];
    const expected = [3];
    const output = quickSortArray(input);

    expect(output).toEqual(expected);
  });

  it('should return a the only value in an array', () => {
    const input = ['March', 'Jan', 'Feb', 'Dec'];
    const expected = ["Dec", "Feb", "Jan", "March"];
    const output = quickSortArray(input);

    expect(output).toEqual(expected);
  })
});
