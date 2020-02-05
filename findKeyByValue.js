const findKeyByValue = function(object, value){
    const keys = Object.keys(object);
    for(let keyrun = 0; keyrun < keys.length; keyrun++){
        if(object[keys[keyrun]] === value){
            return keys[keyrun];
        }
    }
    return undefined;
}
const assertEqual = function(actual, expected) {
    if (actual !== expected) {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    } else {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    }
  };

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");