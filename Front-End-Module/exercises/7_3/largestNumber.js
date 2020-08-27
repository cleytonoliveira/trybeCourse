const assert = require('assert');

const getLargestNumber = (array) => {
  let largestNumber = array.slice().sort((a, b) => b - a);
  return largestNumber[0];
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

const output = getLargestNumber(parameter);
const unchangedArray = [45, 8, 2, 50, 1, 7, 99];

assert.strictEqual(typeof(getLargestNumber), 'function');
assert.strictEqual(output, result);
assert.deepStrictEqual(parameter, unchangedArray);