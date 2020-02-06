const eqObjects = function (obj1, obj2){
   const keyAmount1 = Object.keys(obj1);
   const keyAmount2 = Object.keys(obj2);
   if(keyAmount1.length !== keyAmount2.length){
       return false
   }
       for(const search in obj1){ 
        console.log(search);
        console.log(obj1[search]);
        if(Array.isArray(obj1[search]) && Array.isArray(obj2[search] && (obj1[search].length === obj2[search].length))){
            eqArray(obj1[search],obj2[search]) 
        }else{
        if(obj1[search] !== obj2[search]){
               return false;
           }
       }
    }return true;
};
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
  

 
 const ab = { a: "1", b: "2" };
 const ba = { b: "2", a: "1" };
 assertEqual(eqObjects(ab, ba),true); // => true

 const abc = { a: "1", b: "2", c: "3" };
 assertEqual(eqObjects(ab, abc), false); // => false
  
 const cd = { c: "1", d: ["2", 3] };
 const dc = { d: ["2", 3], c: "1" };
 assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

