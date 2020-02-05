const flatten = function(arr) {
  let goodArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(Array.isArray(arr[i]) === true);
    if (Array.isArray(arr[i]) === true) {
      const innerArrayLength = arr[i].length;
      for (j = 0; j < innerArrayLength; j++) {
        goodArr.push(arr[i][j]);
      }
    } else {
      goodArr.push(arr[i]);
    }
  }
  return goodArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
