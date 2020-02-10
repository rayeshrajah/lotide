const without = function(arr, arr2){
  let goodArr = [];
  for(let i = 0; i < arr.length; i++){
      if(arr[i] !== arr2[0]){
          goodArr.push(arr[i]);
      }
  }
  return goodArr;
}

module.exports = without;