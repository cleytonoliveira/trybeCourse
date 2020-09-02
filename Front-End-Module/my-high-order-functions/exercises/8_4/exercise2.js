const assert = require('assert')
const { totalmem } = require('os')

// escreva sum abaixo
const sum = (...numbers) => {
  let tot = 0
  numbers.forEach(number => tot += number);
  return tot;
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
