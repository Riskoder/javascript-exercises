const palindromes = function (str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;

// let alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const cleanString = string.toLowerCase().replace(alphanumerical, '')

// const reversedCleanString = cleanString.split('').reverse().join('')
