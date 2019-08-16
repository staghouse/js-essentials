module.exports = function(list){
  const sortType = typeof list[0];

  if (sortType === 'number') {
    return list.sort((a, b) => {
      return a - b
    });
  } else if (sortType === 'string') {
    return list.sort();
  }
};
