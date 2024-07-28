const removeFromArray = function(array, ...numbers) {
  return array.filter(elemento => !numbers.includes(elemento))
};

// Do not edit below this line
module.exports = removeFromArray;
