// NOT FINISHED

var removeDigit = function (number, digit) {
  let max = number.replace(digit, '');
  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      const result = number.slice(0, i) + number.slice(i + 1);

      max = Math.max(parseInt(max), parseInt(result));
    }
  }
  return max;
};

console.log(
  removeDigit(
    '2998589353917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471',
    '3'
  )
);
