/**
 * getActualMonth
 * @param {number} number - number of the month from Date()
 * @return String of month
 * @throws TypeError
 * @example
 * getActualMonth(6)
 */
module.exports = (number = undefined) => {
  if (typeof number !== 'undefined' && Number(number)) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[number];
  } else {
    throw TypeError('number must be of type Number');
  }
};
