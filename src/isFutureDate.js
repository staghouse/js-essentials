/**
 * isFutureDate
 * @param {string|number|Date} now - now to comparison with: "current now"
 * @param {string|number|Date} future - now to comparison again: "not current now"
 * @return Boolean
 * @throws TypeError
 * @example
 * isFutureDate('2019-10-10', '2020-01-01')
 */
export function isFutureDate(now, future) {
  const typeOfNow = typeof now;
  const typeOfFuture = typeof future;
  const today = new Date();

  let isFutureDate = undefined;
  let isFuture = undefined;
  let isPast = undefined;
  let comparison = undefined;

  if (!future) {
    comparison = new Date();
  } else {
    if (typeOfFuture === 'string' || typeOfFuture === 'number') {
      comparison = new Date(future);
    } else if (future instanceof Date) {
      comparison = future;
    } else {
      throw TypeError('future must be of type String or Date');
    }
  }

  if (typeOfNow === 'string' || typeOfNow === 'number') {
    now = new Date(now);
  } else if (!(now instanceof Date)) {
    throw TypeError('now must be of type string, number or Date');
  }

  const pastYear = today.getUTCFullYear() > now.getUTCFullYear();
  const pastMonth = today.getUTCMonth() > now.getUTCMonth();
  const pastDate = today.getUTCDate() > now.getUTCDate();
  isPast = pastYear || pastMonth || pastDate;

  const futureYear = now.getUTCFullYear() > comparison.getUTCFullYear();
  const futureMonth = now.getUTCMonth() > comparison.getUTCMonth();
  const futureDate = now.getUTCDate() > comparison.getUTCDate();
  isFuture = futureYear || futureMonth || futureDate;

  isFutureDate = isPast
    ? false
    : !!isFuture // ESLint likes to do this :shrug:

  return isFutureDate;
}
