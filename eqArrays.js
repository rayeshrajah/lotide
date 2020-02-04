const assertEqual = function(actual, expected) {
    if (actual !== expected) {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    } else {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    }
  };
  
const eqArray = function(arr, arr2){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr2[i]){
            return false
        }
    }return true;
  }

  assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true);
  assertEqual(eqArray(["1", "2", "3"], ["1", "2", "3"]), true);
  assertEqual(eqArray(["1", "2", "3"], ["1", "2", 3]), false);
  