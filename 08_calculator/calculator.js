const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(array) {
	return array.reduce((total, current) => {
    return total + current;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => {
    return total * current;
  }, 1);
};

const power = function(num, exponent) {
	return num ** exponent;
};

const factorial = function(num) {
	let fact = 1;
  for(let i = 1; i <= num; i++){
    fact *= i;
  }
  return fact;
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
