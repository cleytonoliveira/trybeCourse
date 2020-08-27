const assert = require('assert')

const myList = [1, 2, 3]

// escreva swap abaixo
const swap = ([n1, n2, n3]) => [n3, n2, n1];

const swappedList = swap(myList)

assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1)