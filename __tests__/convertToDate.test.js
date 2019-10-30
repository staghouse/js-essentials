import {convertToDate} from '../src/index';

describe('convertToDate', () => {
  it('Should return a date object when int is passed in', async () => {
    const date = 1572406609;

    expect(convertToDate(date) instanceof Date).toBe(true);
  });

  it('Should return a date object when unix time is passed in as string passed in', async () => {
    const date = '1572406609';

    expect(convertToDate(date) instanceof Date).toBe(true);
  });

  it('Should return a date object when string passed in', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const date_string = `${year}-${month}-${date}`;

    expect(convertToDate(date_string) instanceof Date).toBe(true);
  });

  it('Should return a date object when a date object is passed in', async () => {
    const now = new Date();

    expect(convertToDate(now) instanceof Date).toBe(true);
  });

  it('Should throw type error if array passed in', async () => {
    const date = [123,123,123];

    expect(() => {
      convertToDate(date);
    }).toThrow(TypeError);
  });
});
