var addStrings = function (num1, num2) {
  num1.length > num2.length
    ? (num2 = "0".repeat(num1.length - num2.length) + num2)
    : (num1 = "0".repeat(num2.length - num1.length) + num1);
  let result = "";
  let extra = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
    let sum = +num1[i] + +num2[i] + extra;
    extra = 0
    console.log(sum, result, i);
    if (sum > 9) {
      result = `${sum % 10}` + result;
      extra = Math.trunc(sum / 10);
    } else {
      result = `${sum}` + result;
    }
  }
  if (extra > 0) result = extra.toString() + result;
  return result;
};
console.log(addStrings("456", "77"));
