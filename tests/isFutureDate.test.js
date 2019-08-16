const { isFutureDate } = require('../index');

describe('isFutureDate', () => {
  it('should return false today is in the future', async () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Buffer the date as January is 0
    const day = now.getDate();
    const time = `${year}-${month}-${day}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(false);
  });

  it('should return false that yesterday is in the future', async () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Buffer the date as January is 0
    const day = now.getDate() - 1;
    const time = `${year}-${month}-${day}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(false);
  });

  it('should return true that next month is in the future', async () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 2; // Buffer the date as January is 0
    const day = now.getDate();
    const time = `${year}-${month}-${day}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(true);
  });

  it('should return true that next year is in the future', async () => {
    const now = new Date();
    const year = now.getFullYear() + 1;
    const month = now.getMonth() + 1; // Buffer the date as January is 0
    const day = now.getDate();
    const time = `${year}-${month}-${day}`;
    const isInFuture = await isFutureDate(time);

    expect(isInFuture).toBe(true);
  });
});
