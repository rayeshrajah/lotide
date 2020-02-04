const assertArrayEquals = function (arr, arr2){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr2[i]){
        console.log(`🛑🛑🛑Assertion Failed: Array is not identical.`);
        process.exit();
        }
    }
    console.log(`✅✅✅Assertion Passed: Array is Identical.`)
  };

  assertArrayEquals([1, 2, 3], [1, 2, 3]);
  assertArrayEquals(["1", "2", "3"], ["1", "2", "3"]);
  assertArrayEquals(["1", "2", "3"], ["1", "2", 3])