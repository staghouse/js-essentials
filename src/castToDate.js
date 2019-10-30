/**
 * isFutureDate
 * @param {number|string|Date} date - Date you want to cast
 * @return Date
 * @throws TypeError
 * @example
 * isFutureDate('2019-10-10', '2020-01-01')
 */
export function castToDate(date) {
  if (date instanceof Date) {
    return date;
  }

  if (typeof date === 'string' || typeof date === 'number') {
    return new Date(date);
  }

  throw TypeError('You must pass in a primary comparison type of Date, String, or Int');
}
