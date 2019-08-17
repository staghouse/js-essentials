/**
 * quickSortArray
 * @param {array} list - Array of values of a single type
 * @param {object} config - object of values to change for list value types
 * @return Array
 * @throws TypeError
 * @example
 * quickSortArrayObjects([{date: '2099-01-01'}, {date: '1099-01-01'}], {type: 'date', 'property': 'releaseDate'})
 */
module.exports = (list, { type, property, asc = true } = {}) => {
  let options = {
    type,
    property,
    asc,
  };

  if (!Array.isArray(list)) {
    throw TypeError('You must pass in an array');
  }

  if (list.length === 1) {
    return list;
  }

  const filtered = list.filter(item => Object.keys(item).includes(property));

  if (filtered.length > 0) {
    switch (options.type) {
      case 'date':
        return list.sort(function(a, b) {
          if (options.asc) {
            return new Date(b[options.property]) - new Date(a[options.property]);
          } else {
            return new Date(a[options.property]) - new Date(b[options.property]);
          }
        });

      default:
        throw TypeError('supplied config did not match available sorting');
    }
  } else {
    throw TypeError('no objects were passed in to sort');
  }
};
