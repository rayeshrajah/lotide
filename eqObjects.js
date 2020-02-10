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
       }else if(typeof obj1[search] === "object" && typeof obj2[search] === "object"){
         eqObjects(obj1[search], obj2[search]);
       }   
       else if(obj1[search] !== obj2[search]){
              return false;
          }else{
            return true; 
          }
      }
   };

module.exports = eqObjects;