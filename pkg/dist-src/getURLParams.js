/**
 * getURLParams
 * @param {number} url - string or URL instance
 * @return object with key/val
 * @throws TypeError
 * @example
 * getURLParmas('http://www.placecage.com?height=100&width=200')
 */
export function getURLParams(url = undefined) {
  const typeOfUrl = typeof url;
  const paramsObj = {};
  let params = undefined;

  if (typeOfUrl !== 'undefined' && (typeOfUrl === 'string' || url instanceof URL)) {
    url = new URL(url);
    params = new URLSearchParams(url.search);
    params.forEach(function (value, key) {
      paramsObj[key] = value;
    });
    return paramsObj;
  } else {
    throw TypeError('url must be of type String or URL');
  }
}