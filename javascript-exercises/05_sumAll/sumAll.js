const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return 'ERROR';
    }

    s = 0
    if (a > b) {
        for (let i = b; i <= a; i++) {
            s += i;
        }
    } else {
        for (let i = a; i <= b; i++) {
            s += i;
        }
    }

    return s;
};

// Do not edit below this line
module.exports = sumAll;
