const { isFutureDate } = require('../index');

describe('isFutureDate', () => {
  it('should return false today is in the future', async () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Buffer the date as January is 0
    const date = now.getDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(false);
  });

  it('should return false that yesterday is in the future', async () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Buffer the date as January is 0
    const date = now.getDate() - 1;
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(false);
  });

  it('should return true that next month is in the future', async () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 2; // Buffer the date as January is 0
    const date = now.getDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(true);
  });

  it('should return true that next year is in the future', async () => {
    const now = new Date();
    const year = now.getFullYear() + 1;
    const month = now.getMonth() + 1; // Buffer the date as January is 0
    const date = now.getDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(true);
  });

  it('should return true that next year is in the future', async () => {
    const now = new Date();
    const year = now.getFullYear() + 1;
    const month = now.getMonth() + 1; // Buffer the date as January is 0
    const date = now.getDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(true);
  });

  it('should return true that next year is in the future when date object is passed in', async () => {
    const now = new Date();
    now.setFullYear(now.getFullYear() + 1);
    now.setMonth(now.getMonth() + 1);
    const isInFuture = await isFutureDate(now);

    expect(isInFuture).toBe(true);
  });

  it('should return true when time is greater then comparison', async () => {
    const now = new Date();
    now.setFullYear(now.getFullYear() + 1);
    now.setMonth(now.getMonth() + 1);
    const isInFuture = await isFutureDate(now, new Date());

    expect(isInFuture).toBe(true);
  });

  it('should raise error when time argument is not a valid type', async () => {
    expect(() => {isFutureDate({})}).toThrow(TypeError);
  });

  it('should raise error when compare argument is not a valid type', async () => {
    expect(() => {isFutureDate(new Date(), {})}).toThrow(TypeError);
  });
});
