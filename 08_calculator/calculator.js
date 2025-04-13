const add = function(value1, value2) {
	return value1 + value2
};

const subtract = function(value1, value2) {
	return value1 - value2
};

const sum = function(numList) {
  let sum = 0
	numList.forEach(number => {
    sum = sum + number
  })
  return sum
};

const multiply = function(numList) {
  if(numList.length === 0) 
    return 0
  let sum = 1;
  numList.forEach(number => {
    sum = sum * number
  })
  return sum
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
