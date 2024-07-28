const repeatString = function(word, times) {
  if (times < 0) return 'ERROR'

  let finalWord = ''
  for (let i = 0; i < times; i++) {
    finalWord += word
  };
  return finalWord
};

// Do not edit below this line
module.exports = repeatString;
