const countLetters = function(sentence) {
  sentence = sentence.replace(/\s+/g, "");
  const results = {};
  for (const letter of sentence) {
    results[letter] = 0;
  }
  for (const letter of sentence) {
    results[letter] += 1;
  }
  return results;
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const result1 = countLetters("hello");
//console.log();

assertEqual(result1.l, 2);
