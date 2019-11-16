/**
 * convertToDate
 * @param {number|string|Date} date - Date you want to cast
 * @return Date
 * @throws TypeError
 * @example
 * convertToDate(number|string|date)
 */
export function convertToDate(date) {
  if (date instanceof Date) {
    return date;
  }

  if (typeof date === 'string' || typeof date === 'number') {
    return new Date(date);
  }

  throw TypeError('You must pass in a primary argument of type Date, String, or Number');
}