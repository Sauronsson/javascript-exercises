// Brought this in, as it let a user define their own precision. Seemed better than base javascript options
function round(num, precision) {
  const factor = Math.pow(10, precision)
  return Math.round(num * factor) / factor
}

const convertToCelsius = function(temperature) {
  return round((temperature-32)*(5/9), precision=1)
};

const convertToFahrenheit = function(temperature) {
  return round((temperature*(9/5)+32), precision=1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
