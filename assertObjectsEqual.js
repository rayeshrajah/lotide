const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(obj1, obj2, expected){
  const inspect = require('util').inspect;
  if(eqObjects(obj1, obj2)){
      console.log(`✅✅✅Assertion Passed: ${inspect(obj1)} === ${inspect(obj1)}`);
  } else {
      console.log(`🛑🛑🛑Assertion Failed: ${inspect(obj1)} !== ${inspect(obj1)}`);
  }
}

module.exports = assertObjectsEqual;