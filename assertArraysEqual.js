const eqArray = require('./eqArray');

const assertArrayEquals = function(arr, arr2, expected) {
  if (eqArray(arr, arr2) === expected) {
      console.log(`✅✅✅Assertion Passed: ${arr} === ${arr2}`);
  } else {
      console.log(`🛑🛑🛑Assertion Failed: ${arr} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;