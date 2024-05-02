const convertToCelsius = function(temp) {
  cels = (temp - 32) * 5 / 9;
  cels = Math.round(cels * 10) / 10;
  return cels;
};

const convertToFahrenheit = function(temp) {
  far = temp * 9 / 5 + 32;
  far = Math.round(far * 10) / 10;
  return far;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};