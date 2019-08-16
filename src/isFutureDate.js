/**
 * isFutureDate
 * @param {string|number|Date} time - time to compare with: "current time"
 * @param {string|number|Date} comparison - time to compare again: "not current time"
 * @return Boolean
 * @throws TypeError
 * @example
 * isFutureDate('2019-10-10', '2020-01-01')
 */
module.exports = (time, comparison) => {
  let now;
  let typeOfTime = typeof time;
  let typeOfComparison = typeof comparison;

  if (!comparison) {
    now = new Date();
  } else {
    if (typeOfComparison === 'string' || typeOfComparison === 'number') {
      now = new Date(comparison);
    } else if (comparison instanceof Date) {
      now = comparison;
    } else {
      throw TypeError('comparison must be of type String or Date');
    }
  }

  if (typeOfTime === 'string' || typeOfTime === 'number') {
    time = new Date(time);
  } else if (!(time instanceof Date)) {
    throw TypeError('time must be of type String or Date');
  }

  // This/next year and next month or
  // This/next year and this/next month but not today
  return (
    time.getDate() > now.getDate() ||
    time.getMonth() > now.getMonth() ||
    time.getFullYear() > now.getFullYear()
  );
};
