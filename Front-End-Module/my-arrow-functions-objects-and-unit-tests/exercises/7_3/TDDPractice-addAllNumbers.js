const assert = require('assert');
// escreva a função addAllnumbers aqui
const addAllnumbers = numbers => {
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    count += numbers[index];
  }
  return count;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);