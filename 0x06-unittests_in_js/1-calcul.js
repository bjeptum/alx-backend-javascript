// Combined descriptions

function calculateNumber(type, a, b) {
  const roundA = Math.round(a);
  const roundB = Math.round(b);

  // Perform the correct operation based on type
  if (type === 'SUM') {
    return roundA + roundB;
  } else if (type === 'SUBTRACT') {
    return roundA - roundB;
  } else if (type === 'DIVIDE') {
    if (roundB === 0) {
      return 'Error';  // Return 'Error' if b is 0
    }
    return roundA / roundB;
  } else {
    throw new Error('Invalid type');
  }
}

module.exports = calculateNumber;
