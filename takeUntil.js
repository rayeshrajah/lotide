const takeUntil = function(arr, funct){
    const goodArr = [];
    for(const item of arr){
        if(!funct(item)){
        goodArr.push(item); 
        }else{
            break;
        }
    }return goodArr;
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results = takeUntil(data1, x => x < 0);
console.log(results);

assertArrayEquals(results, [1,2,5,7,2], true);

