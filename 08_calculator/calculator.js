const add = function(value1, value2) {
	return value1 + value2
};

const subtract = function(value1, value2) {
	return value1 - value2
};

const sum = function(numList) {
  return numList.reduce(((total, number) => total + number), 0)
};

const multiply = function(numList) {
  return numList.reduce(((acc, number) => acc*number), 1)
};

const power = function(value1, value2) {
  let sum = 1
	for(let i = 0; i < value2; i++ ){
    sum = value1 * sum
  }
  return sum
};

const factorial = function(value) {
	let sum = 1
  for(let i = 1; i <= value; i++){
    sum = sum * i 
  }
  return sum
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
