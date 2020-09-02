const verify = require('./password-verification');
const assert = require('assert');

assert.equal(typeof verify, 'function');
assert(!verify('12345678'));
assert(!verify(null));
assert(!verify('gandalfthegray'));
assert(!verify('YOUSHALLNOTPASS'));
assert(verify('G4nd4lfTh3Wh1t3'));
