module.exports = function(list) {
  // So more quick sorts can be added in the future
  switch (typeof list[0]) {
    case 'number':
      return list.sort((a, b) => {
        return a - b;
      });
    default:
      return list.sort();
  }
};
