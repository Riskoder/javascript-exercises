const add = function(...args) {
  return args.reduce((acumulador, numero) => acumulador + numero)
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numeros) {
  return numeros.reduce((acum, num) => acum + num, 0)
};

const multiply = function(arrayNumbers) {
  return arrayNumbers.reduce((acumulador, numero) => acumulador * numero, 1)
};

const power = function(number, power) {
	return Math.pow(number, power)
};

const factorial = function(numero) {
	if (numero <= 1) return 1;
  return numero * (factorial(numero - 1))
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
