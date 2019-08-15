let quickSortArray;

quickSortArray = function(list){
  if (list.length < 2) {return list;}

  let pivot = list[0];
  let left = [];
  let right = [];

  for (let i = 1, total = list.length; i < total; i++){
    if (list[i] < pivot)
    {left.push(list[i]);}
    else
    {right.push(list[i]);}
  }

  return [
    ...quickSortArray(left),
    pivot,
    ...quickSortArray(right)
  ];
}

module.exports = quickSortArray;
