const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }

    s = '';
    for (let i = 0; i < num; i++) {
        s += string;
    }
    return s;
};

// Do not edit below this line
module.exports = repeatString;
