const letterPositions = function(sentence) {
  sentence = sentence.replace(/\s+/g, "");
  const letterPos = {};
  for (let index = 0; index < sentence.length; index++) {
    if (letterPos[sentence[index]]) {
      letterPos[sentence[index]].push(index);
    } else {
      letterPos[sentence[index]] = [index];
    }
  }
  return letterPos;
};

module.exports = letterPositions;