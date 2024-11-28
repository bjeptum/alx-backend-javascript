// Ccalculate number test

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should round 1 and 3 to 1 and 3, and return 4', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round 1 and 3.7 to 1 and 4, and return 5', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round 1.2 and 3.7 to 1 and 4, and return 5', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round 1.5 and 3.7 to 2 and 4, and return 6', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should round 0.1 and 0.5 to 0 and 1, and return 1', function() {
    assert.strictEqual(calculateNumber(0.1, 0.5), 1);
  });

  it('should round -0.5 and 1.2 to -1 and 1, and return 0', function() {
    assert.strictEqual(calculateNumber(-0.5, 1.2), 0);
  });

  it('should round -0.6 and -1.3 to -1 and -1, and return -2', function() {
    assert.strictEqual(calculateNumber(-0.6, -1.3), -2);
  });
});
