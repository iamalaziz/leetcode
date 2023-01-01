var distinctPrimeFactors = function (nums) {
  const primeFactors = {};
  for (let num of nums) {
    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        primeFactors[i] = (primeFactors[i] || 0) + 1;
        num /= i;
      }
    }
  }
  return Object.keys(primeFactors).length;
};
console.log(distinctPrimeFactors([2, 14, 19, 19, 5, 13, 18, 10, 15, 20]));
