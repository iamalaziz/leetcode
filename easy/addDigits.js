var addDigits = function (num) {
  if (num < 10) return num;
  num = [...num.toString()].reduce((total, curr) => total + +curr, 0);
  return addDigits(num);
};
console.log(addDigits(38));
// Runtime: 109
