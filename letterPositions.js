const letterPositions = function(sentence) {
  sentence = sentence.replace(/\s+/g, "");
  const letterPos = {};
  for (let index = 0; index < sentence.length; index++) {
    if (letterPos[sentence[index]]) {
      letterPos[sentence[index]].push(index);
    } else {
      letterPos[sentence[index]] = [index];
    }
  }
  return letterPos;
};

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

assertArrayEquals(letterPositions('hello').e, [1], true);
console.log(letterPositions("Hello"));
