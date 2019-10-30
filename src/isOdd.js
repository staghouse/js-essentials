/**
 * isOdd
 * @param {number} number - Value to check if odd
 * @return Boolean
 * @example
 * isOdd(3)
 */
export function isOdd(number) {
  if (!isFinite(number) || !!(number % 1)) {
    throw TypeError('Must provide a valid whole number');
  }

  return (Math.abs(number) ^ 1) === 2;
}
