const sumAll = function(minimo, maximo) {
  if (!Number.isInteger(minimo) || !Number.isInteger(maximo)) return 'ERROR';
  if (minimo < 0) return 'ERROR';

  if (minimo > maximo) {
    let temp = minimo;
    minimo = maximo;
    maximo = temp;
  }

  let sumaTotal = 0;
  for (let i = minimo; i <= maximo; i++) {
    sumaTotal += i
  };
  return sumaTotal;
};

// Do not edit below this line
module.exports = sumAll;
