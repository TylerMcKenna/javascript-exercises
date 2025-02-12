const convertToCelsius = function(farenheitTemp) {
  const convertedFarenheitValue = (farenheitTemp - 32) * (5/9);
  return Math.round(convertedFarenheitValue * 10) / 10;
};

const convertToFahrenheit = function(celciusTemp) {
  const convertedCelciusValue = (celciusTemp * (9/5) + 32);
  return Math.round(convertedCelciusValue * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
