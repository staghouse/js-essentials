/**
 * querySelectorAllArray
 * @param {string} el - DOM element class name
 * @return Array of class based elements
 * @throws TypeError
 * @example
 * querySelectorArray('.my-element')
 */
export default function querySelectorAllArray(el) {
  if (typeof el !== 'string') {
    throw TypeError('el must be of type string');
  }

  if (el[0] !== '.') {
    throw TypeError('el must include a period prepended to the selector');
  }

  return Array.from(document.querySelectorAll(el));
}
