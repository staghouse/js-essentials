/**
 * quickSortArray
 * @param {array} list - Array of values of a single type
 * @param {object} config - object of values to change for list value types
 * @return Array
 * @throws TypeError
 * @example
 * quickSortArrayObjects([{date: '2099-01-01'}, {date: '1099-01-01'}], {type: 'date', 'property': 'releaseDate'})
 */
module.exports = (list, config = undefined) => {
  const options = {
    type: undefined,
    property: undefined,
    asc: true,
  };

  if (Array.isArray(list)) {
    if (list.length === 1) {
      return list;
    }

    if (config) {
      Object.assign(options, config);
    }

    const { type, property, asc } = options;
    const filtered = list.filter(item => Object.keys(item).includes(property));

    if (filtered.length > 0) {
      switch (type) {
        case 'date':
          return list.sort(function(a, b) {
            if (asc) {
              return new Date(b[property]) - new Date(a[property]);
            } else {
              return new Date(a[property]) - new Date(b[property]);
            }
          });

        default:
          throw TypeError('supplied config did not match available sorting');
      }
    } else {
      throw TypeError('no objects were passed in to sort');
    }
  } else {
    throw TypeError('You must pass in an array');
  }
};
