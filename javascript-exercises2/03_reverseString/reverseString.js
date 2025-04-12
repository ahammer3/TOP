const reverseString = function(string) {
    s = '';
    for (let i = string.length-1; i > -1; i--) {
        s += string[i];
    }

    return s;
};

// Do not edit below this line
module.exports = reverseString;
