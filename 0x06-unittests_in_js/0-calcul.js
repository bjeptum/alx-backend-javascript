// Calculate Number

function calculateNumber(a, b) {
    const roundA = a < 0 ? Math.floor(a) : Math.round(a);
    const roundB = b < 0 ? Math.floor(b) : Math.round(b);

    return roundA + roundB;
}

module.exports = calculateNumber;
