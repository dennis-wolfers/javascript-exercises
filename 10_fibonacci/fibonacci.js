const fibonacci = function(num) {
    num = parseInt(num);
    // return "OOPS" for negative numbers
    if (num < 0) {
        return "OOPS";
    }
    if (num === 0) {
        return 0;
    }

    let prev = 0, curr = 1, next;
    for (let i = 2; i <= num; i++) {
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
