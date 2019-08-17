/**
 * quickSortArray
 * @param {array} list - Array of values of a single type
 * @return Array
 * @throws TypeError
 * @example
 * quickSortArray([10, 7, 1, 4])
 * quickSortArray(['banana', 'orange', 'apple'])
 */
export function quickSortArray(list) {
  if (!Array.isArray(list)) {
    throw TypeError('You must pass in an array');
  }
  // Only want to sort on one type in a list
  const isValid = new Set(list.map(item => typeof item)).size < 2;

  if (!isValid) {
    throw TypeError('You must pass in an array containing a single type');
  }

  // So more quick sorts can be added in the future
  switch (typeof list[0]) {
    case 'number':
      return list.sort((a, b) => {
        return a - b;
      });

    case 'string':
    default:
      return list.sort();
  }
}
