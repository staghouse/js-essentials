/**
 * isFutureDate
 * @param {string|Date} when - when to compare against now
 * @param {string|Date} against - when to compare against the first argument
 * @return Boolean
 * @throws TypeError
 * @example
 * isFutureDate('2019-10-10', '2020-01-01')
 */
export function isFutureDate(when, against) {
  const typeOfWhen = typeof when;
  const typeOfAgainst = typeof against;

  let now = undefined
  let then = undefined;

  if(!when){
    throw TypeError('You must pass in a primary comparison type of Date or String');
  } else {
    if (typeOfWhen === 'string') {
      now = new Date(when);
    } else if (when instanceof Date) {
      now = when;
    } else {
      throw TypeError('You must pass in an primary comparison type of Date or String');
    }

    if (!against) {
      then = new Date();
    } else {
      if (typeOfAgainst === 'string') {
        then = new Date(against);
      } else if (against instanceof Date) {
        then = against;
      } else {
        throw TypeError('You must pass in a secondary comparison type of Date or String');
      }
    }
  }

  return then < now;
}
