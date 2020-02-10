const findKey = function(obj, funct){
  for(const keys in obj){
      if(funct(obj[keys])){
          return keys;
      }
  }
}

module.exports = findKey;