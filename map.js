const map = function(arr, funct){
  const results = [];
  for(let item of arr){
  results.push(funct(item));
  }return results;
}

module.exports = map;