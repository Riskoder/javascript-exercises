const fibonacci = function(num) {

  if (num  == 0) return 0;
  if (num < 0) return 'OOPS';

  let prev = 1, current = 1;
  for (let i = 3; i <= num; i++) {
    let next = prev + current;
    prev = current;
    current = next;
  };
  return current;
};

// Do not edit below this line
module.exports = fibonacci;

// fb = [0, 1];
// for (let i = 2; i <= num; i++) {
//   fb[i] = fb[i - 1] + fb[i - 2];
