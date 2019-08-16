const { isFutureDate } = require('../index');

describe('isFutureDate', () => {
  it('should return false today is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(false);
  });

  it('should return false today is in the future when compared against new Date', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time, new Date());

    expect(isInFuture).toBe(false);
  });

  it('should return false when a Date instance is passed in', async () => {
    const isInFuture = await isFutureDate(new Date());

    expect(isInFuture).toBe(false);
  });

  it('should return false that yesterday is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate() - 1;
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(false);
  });

  it('should return true that next month is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 2;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(true);
  });

  it('should return true that next year is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear() + 1;
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(true);
  });

  it('should return true that next year via Date is passed in', async () => {
    const now = new Date();
    now.setUTCFullYear(now.getUTCFullYear() + 1);
    now.setUTCMonth(now.getUTCMonth() + 1);
    const isInFuture = await isFutureDate(now);

    expect(isInFuture).toBe(true);
  });

  it('should return true when the comparison is a string in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time, '9999-01-01');

    expect(isInFuture).toBe(true);
  });

  it('should raise error when now argument is not a valid type', async () => {
    expect(() => {
      isFutureDate({});
    }).toThrow(TypeError);
  });

  it('should raise error when compare argument is not a valid type', async () => {
    expect(() => {
      isFutureDate(new Date(), {});
    }).toThrow(TypeError);
  });
});
