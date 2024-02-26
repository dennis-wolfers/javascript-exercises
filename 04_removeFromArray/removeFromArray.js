const removeFromArray = function(array, ...values) {
    let newArray = [];

    for (let value of values) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== value) {
                newArray.push(array[i]);
            }
        }
        array = newArray;
        newArray = [];
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
