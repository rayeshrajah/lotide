const eqArrays = function(arr, arr2){
  for(let item in arr){
    if(Array.isArray(item)){
      return eqArrays(arr[item], arr2[item]);
    }else if(arr[item] !== arr2[item]){
          return false;
    }else{
         return true; 
        }
      }
}

module.exports = eqArrays;