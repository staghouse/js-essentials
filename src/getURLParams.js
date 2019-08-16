module.exports = (url) => {
  if (typeof url !== 'string' || !(url instanceof URL)) {
    throw TypeError('url must be of type String or URL');
  }

  const { search } = new URL(url);
  const params = new URLSearchParams(search);

  const paramsObj = {};
  params.forEach(function(value, key) {
    paramsObj[key] = value;
  });

  return paramsObj;
};
