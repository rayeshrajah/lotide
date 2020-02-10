const middle = function(arr){
  let tempArr = [];
  if(arr.length === 1 || arr.length === 2){
      return [];
  }
  else if(arr.length % 2 !== 0){
       tempArr.push(arr[(arr.length - 1) / 2]);
  }
  else if(arr.length % 2 === 0){
      tempArr.push(arr[((arr.length - 2)/2)]);
      tempArr.push(arr[((arr.length)/2)]);
       
  }
  return tempArr;
}

module.exports = middle;