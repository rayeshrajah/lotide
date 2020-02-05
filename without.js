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

const without = function(arr, arr2){
    let goodArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr2[0]){
            goodArr.push(arr[i]);
        }
    }
    return goodArr;
}

assertArrayEquals(without(["hello", "bye", "me"],["me"]),["hello", "bye"],true);