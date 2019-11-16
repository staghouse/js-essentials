/**
 * quickSortArray
 * @param {array} arr - Array of values of a single type
 * @return Array
 * @throws TypeError
 * @example
 * quickSortArray([10, 7, 1, 4])
 * quickSortArray(['banana', 'orange', 'apple'])
 */
export default function quickSortArray(arr) {
  if (!Array.isArray(arr)) {
    throw TypeError('You must pass in an array');
  }
  // Only want to sort on one type in a arr
  const isValid = new Set(arr.map(item => typeof item)).size < 2;

  if (!isValid) {
    throw TypeError('You must pass in an array containing a single type');
  }

  // So more quick sorts can be added in the future
  switch (typeof arr[0]) {
    case 'number':
      return arr.sort((a, b) => {
        return a - b;
      });

    case 'string':
    default:
      return arr.sort();
  }
}
