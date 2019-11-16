/**
 * getActualMonth
 * @param {number} num - number of the month from Date()
 * @return String of month
 * @throws TypeError
 * @example
 * getActualMonth(6)
 */
export function getActualMonth(num = undefined) {
  const number = Number(num);

  if (!isNaN(number)) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[number];
  } else {
    throw TypeError('number must be of type string or number');
  }
}