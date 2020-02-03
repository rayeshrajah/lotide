const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("🛑🛑🛑Assertion Failed: " + actual + " !== " + expected);
  } else {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  }
};
const sum = function(a, b) {
  return a + b;
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(sum(3, 6), 9);
