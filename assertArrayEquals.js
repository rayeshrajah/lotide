const eqArray = function(arr, arr2) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr2[i]){
            return false
        }
    }
    return true;
}
  

const assertArrayEquals = function(arr, arr2, expected) {
    if (eqArray(arr, arr2) === expected) {
        console.log(`✅✅✅Assertion Passed: ${arr} === ${arr2}`);
    } else {
        console.log(`🛑🛑🛑Assertion Failed: ${arr} !== ${arr2}`);
    }
};

assertArrayEquals([1, 2, 3], [1, 2, 3], true)
assertArrayEquals([1, 2, 3], [1, 2, 4], false)
assertArrayEquals([1, 2, 3], [4], true)