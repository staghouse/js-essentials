import { isFutureDate } from '../src/index';

describe('isFutureDate', () => {
  it('should return true that a tomorrow String is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate() + 1;
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(true);
  });

  it('should return false that a today String is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(false);
  });

  it('should return false that a today String is in the future when compared against new Date', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time, new Date());

    expect(isInFuture).toBe(false);
  });

  it('should return false that a today Date instance is passed in', async () => {
    const isInFuture = await isFutureDate(new Date());

    expect(isInFuture).toBe(false);
  });

  it('should return false that a yesterday String is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate() - 1;
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(false);
  });

  it('should return true that a next month String is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 2;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(true);
  });

  it('should return true that a next year String is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear() + 1;
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(true);
  });

  it('should return false that a last year and next month String against a today Date is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear() - 1;
    const month = now.getUTCMonth() + 2;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time, new Date());

    expect(isInFuture).toBe(false);
  });

  it('should return true that a this year and tomorrow String against a today Date is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate() + 1;
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time, new Date());

    expect(isInFuture).toBe(true);
  });

  it('should return false that this year but last month String against a today Date is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth();
    const date = now.getUTCDate() + 1;
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time, new Date());

    expect(isInFuture).toBe(false);
  });

  it('should return true that next year via Date is passed in', async () => {
    const now = new Date();
    now.setUTCFullYear(now.getUTCFullYear() + 1);
    now.setUTCMonth(now.getUTCMonth() + 1);
    const isInFuture = await isFutureDate(now);

    expect(isInFuture).toBe(true);
  });

  it('should return false when a today String is compared against a future String', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFutureDate(time, '9999-01-01');

    expect(isInFuture).toBe(false);
  });

  it('should raise error when no time is passed', () => {
    expect(() => {
      isFutureDate();
    }).toThrow(TypeError);
  });

  it('should raise error when now argument is not a valid type', () => {
    expect(() => {
      isFutureDate({});
    }).toThrow(TypeError);
  });

  it('should raise error when compare argument is not a valid type', () => {
    expect(() => {
      isFutureDate(new Date(), {});
    }).toThrow(TypeError);
  });
});
