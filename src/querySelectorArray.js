/**
 * quickSoryArray
 * @param {string} el - DOM element class name
 * @return Array of class based elements
 * @throws TypeError
 * @example
 * querySelectorArray('.my-element')
 * querySelectorArray('my-element')
 */
module.exports = el => {
  if (typeof el === 'string') {
    let $el = el;

    if ($el && $el[0] !== '.') {
      $el = `.${$el}`;
    }

    if (document) {
      return Array.from(document.querySelectorAll($el));
    }
  } else {
    throw TypeError('el must be of type string');
  }
};
