/**
 * getDOMSiblings
 * @param {DOM Node} element - DOM element to find siblings for
 * @return Array
 */
export default function getDOMSiblings(element) {
  if (!element) {
    throw SyntaxError('You must pass in a single argument');
  }

  if (typeof element !== 'object' || element.nodeType !== 1) {
    throw TypeError('You must pass in a single DOM Node');
  }

  let sibling = element.parentNode.firstChild;
  const siblings = [];

  for (null; sibling; sibling = sibling.nextSibling) {
    if (sibling.nodeType !== 1 || sibling === element) {
      continue;
    }

    siblings.push(sibling);
  }

  return siblings;
}
