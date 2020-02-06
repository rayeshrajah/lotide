const map = function(arr, funct){
    const results = [];
    for(let item of arr){
    results.push(funct(item));
    }return results;
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

const words = ["ground", "control", "to", "major", "tom"];

const results = map(words, word => word[0])
console.log(results);

assertArrayEquals(results, ['g', 'c', 't', 'm', 't'], true);