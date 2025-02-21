const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((total, currentItem) => total + currentItem);
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => total * currentItem,
  1);
};

const power = function(num, exponent) {
  return Math.pow(num, exponent);
};

const factorial = function(num) {
  let factorialResult = 1;
	while (num > 0) {
    factorialResult *= num;
    num--;
  }
  return factorialResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
