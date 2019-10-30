import { isOdd } from '../src/index';

describe('isOdd', () => {
  it('Should return true when int is odd', async () => {
    const number = 3;

    expect(isOdd(number)).toBe(true);
  });

  it('Should return true when int is odd and negative', async () => {
    const number = -3;

    expect(isOdd(number)).toBe(true);
  });

  it('Should return false when int is even', async () => {
    const number = 2;

    expect(isOdd(number)).toBe(false);
  });

  it('Should return false when int is even and negative', async () => {
    const number = -2;

    expect(isOdd(number)).toBe(false);
  });

  it('Should raise type error when float is passed in', async () => {
    const number = 3.5;

    expect(() => {
      isOdd(number)
    }).toThrow(TypeError);
  });

  it('Should raise type error when string is passed in', async () => {
    const number = '3.5';

    expect(() => {
      isOdd(number)
    }).toThrow(TypeError);
  });

  it('Should raise type error when array is passed in', async () => {
    const number = [1,2,3,4];

    expect(() => {
      isOdd(number)
    }).toThrow(TypeError);
  });
});
