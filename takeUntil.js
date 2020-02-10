const takeUntil = function(arr, funct){
  const goodArr = [];
  for(const item of arr){
      if(!funct(item)){
      goodArr.push(item); 
      }else{
          return goodArr;
      }
  }
};

module.exports = takeUntil;