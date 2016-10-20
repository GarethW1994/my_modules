var assert = require('assert');

var isTuesday = require('./tuesday');

assert.equal(isTuesday('Tuesday'), true);
assert.equal(isTuesday('tuesday'), true);

assert.equal(isTuesday('Friday'), false);
assert.equal(isTuesday('October'), false);
