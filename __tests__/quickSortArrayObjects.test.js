import { quickSortArrayObjects } from '../src/index';

describe('quickSortArrayObjects', () => {
  it('should return the only value in an array', () => {
    const input = [{ date: '2099-01-01' }];
    const expected = input;
    const output = quickSortArrayObjects(input);

    expect(output).toEqual(expected);
  });

  it('should return a sorted array of objects sorted by recent releaseDate property', () => {
    const config = {
      type: 'date',
      property: 'releaseDate',
    };
    const input = [
      {
        releaseDate: '1995-07-13',
      },
      {
        releaseDate: '2020-01-01',
      },
    ];
    const expected = [
      {
        releaseDate: '2020-01-01',
      },
      {
        releaseDate: '1995-07-13',
      },
    ];
    const output = quickSortArrayObjects(input, config);

    expect(output).toEqual(expected);
  });

  it('should return a sorted array of objects sorted by oldest releaseDate property', () => {
    const config = {
      type: 'date',
      property: 'releaseDate',
      asc: false,
    };
    const input = [
      {
        releaseDate: '2020-01-01',
      },
      {
        releaseDate: '1995-07-13',
      },
    ];
    const expected = [
      {
        releaseDate: '1995-07-13',
      },
      {
        releaseDate: '2020-01-01',
      },
    ];
    const output = quickSortArrayObjects(input, config);

    expect(output).toEqual(expected);
  });

  it('should return a TypeError for passing in no objects', () => {
    expect(() => {
      quickSortArrayObjects([[], '', Date, String, Number, 5, 0.5]);
    }).toThrow(TypeError);
  });

  it('should return a TypeError for not passing in an array', () => {
    expect(() => {
      quickSortArrayObjects();
    }).toThrow(TypeError);
  });

  it('should return a TypeError for passing in invalid configuration', () => {
    const config = {
      type: 'array',
    };
    const input = [
      {
        releaseDate: '1995-07-13',
      },
      {
        releaseDate: '2020-01-01',
      },
    ];
    expect(() => {
      quickSortArrayObjects(input, config);
    }).toThrow(TypeError);
  });
});
