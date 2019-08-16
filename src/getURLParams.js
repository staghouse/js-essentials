/**
 * getURLParams
 * @param {number} url - string or URL instance
 * @return object with key/val
 * @throws TypeError
 * @example
 * getURLParmas('http://www.placecage.com?height=100&width=200')
 */
module.exports = (url = undefined) => {
  const typeOfUrl = typeof url;

  if (typeOfUrl !== 'undefined' && (typeOfUrl === 'string' || url instanceof URL)) {
    if (typeOfUrl === 'string') {
      url = new URL(url);
    }

    const params = new URLSearchParams(url.search);

    const paramsObj = {};
    params.forEach(function(value, key) {
      paramsObj[key] = value;
    });

    return paramsObj;
  } else {
    throw TypeError('url must be of type String or URL');
  }
};
