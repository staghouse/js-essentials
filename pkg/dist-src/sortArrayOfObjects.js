/**
 * sortArrayOfObjects
 * @param {string} property - name of property to sort objects by
 * @param {array} arr - Array of objects to sort over
 * @param {boolean} desc - optional, default to descending order of objects
 * @return Array of objects, sorted by property
 * @throws TypeError
 * @example
 * sortArrayOfObjects('name', [{'name': 'Charles'}, {'name': 'Scott'}, {'name': 'Erik'}], true)
 */
export default function sortArrayOfObjects(property = undefined, arr = undefined, desc = false) {
  const isArray = Array.isArray(arr);
  let arrTypes = undefined;

  if (isArray && arr.length === 1) {
    return arr;
  }

  if (!isArray) {
    throw TypeError('You must pass in an array to sort');
  } else {
    arrTypes = Array.from(new Set(arr.map(obj => typeof obj)));
  }

  if (arrTypes.length > 1 || !arrTypes.includes('object')) {
    throw TypeError('You must pass in an array of only objects');
  }

  if (typeof property !== 'string') {
    throw TypeError('You must pass in a key as type string to sort your objects by');
  }

  const order = desc ? -1 : 1;
  return arr.sort((a, b) => {
    const x = a[property];
    const y = b[property]; // Magical stuff.

    return order * (x < y ? -1 : +(x > y));
  });
}