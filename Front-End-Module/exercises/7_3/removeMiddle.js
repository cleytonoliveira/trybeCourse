const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = words => {
  const middleIndex = Math.floor(words.length / 2);
  const removeQueen = [words[middleIndex]];
  words.splice(middleIndex, 1);
  return removeQueen;
};

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
