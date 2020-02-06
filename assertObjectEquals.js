const assertObjectEquals = function(obj1, obj2, expected){
    const inspect = require('util').inspect;
    if(eqObjects(obj1, obj2)){
        console.log(`✅✅✅Assertion Passed: ${inspect(obj1)} === ${inspect(obj1)}`);
    } else {
        console.log(`🛑🛑🛑Assertion Failed: ${inspect(obj1)} !== ${inspect(obj1)}`);
    }
}
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

 assertObjectEquals({a: 2, b:3, c:4 }, {b:3, a:2, c:4}, false);
