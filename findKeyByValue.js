const findKeyByValue = function(object, value){
  const keys = Object.keys(object);
  for(let keyrun = 0; keyrun < keys.length; keyrun++){
      if(object[keys[keyrun]] === value){
          return keys[keyrun];
      }
  }
  return undefined;
}

module.exports = findKeyByValue;