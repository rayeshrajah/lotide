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

assertArrayEquals(middle([1,2,3,4,5]), [3], true);
assertArrayEquals(middle([1,2,3,4,5,6]), [3], false);
assertArrayEquals(middle([1,2,3,4,5,6]), [3,4], true);