const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};
const tail = function(arr) {
  let arr2 = [""];
  for (let i = 1; i < arr.length; i++) {
    arr2.push(arr[i]);
  }
  return arr2;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
