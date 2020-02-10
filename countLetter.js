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

module.exports = countLetters;