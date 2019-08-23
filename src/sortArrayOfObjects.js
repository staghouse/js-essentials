export function sortArrayOfObjects(property = undefined, arr = undefined, desc = false) {
  const isArray = Array.isArray(arr);

  if (isArray && arr.length === 1) {
    return arr;
  }

  if (!isArray) {
    throw TypeError('You must pass in an array to sort');
  }

  const arrTypes = Array.from(new Set(arr.map(obj => typeof obj)));

  if (arrTypes[0] !== 'object') {
    throw TypeError('You must pass in an array of only objects');
  }

  if (typeof property !== 'string') {
    throw TypeError('You must pass in a key as type string to sort your objects by');
  }

  const order = desc ? -1 : 1;

  return arr.sort((a, b) => {
    a = a[property] || a;
    b = b[property] || b;

    return order * (a < b ? -1 : +(a > b));
  });
}