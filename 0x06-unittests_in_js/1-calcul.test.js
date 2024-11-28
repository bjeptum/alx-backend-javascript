// Test for combined descriptions

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  // Test for SUM operation
  describe('SUM operation', function() {
    it('should round 1.4 and 4.5 to 1 and 5, and return 6', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should round 0.2 and 1.7 to 0 and 2, and return 2', function() {
      assert.strictEqual(calculateNumber('SUM', 0.2, 1.7), 2);
    });
  });

  // Test for SUBTRACT operation
  describe('SUBTRACT operation', function() {
    it('should round 1.4 and 4.5 to 1 and 5, and return -4', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should round 10.6 and 4.4 to 11 and 4, and return 7', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 10.6, 4.4), 7);
    });
  });

  // Test for DIVIDE operation
  describe('DIVIDE operation', function() {
    it('should round 1.4 and 4.5 to 1 and 5, and return 0.2', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should round 10.5 and 2.4 to 10 and 2, and return 5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 10.5, 2.4), 5);
    });

    it('should return "Error" when dividing by 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  // Edge case: Invalid type
  describe('Invalid type', function() {
    it('should throw an error for an invalid type', function() {
      assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), /Invalid type/);
    });
  });
});
