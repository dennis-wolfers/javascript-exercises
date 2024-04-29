const palindromes = function (pal) {
    // remove white space and non-alphanumeric characters
    pal = pal.replace(/[\W_]/g, '').toLowerCase();
    // make a reversed version of the string
    reversed = pal.split('').reverse().join('');
    return pal === reversed;
};

// Do not edit below this line
module.exports = palindromes;
