const removeFromArray = function(intArray, ...searchValues) {
    return intArray.filter(num => !searchValues.includes(num))
};

// Do not edit below this line
module.exports = removeFromArray;
