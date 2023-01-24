function findGCD(nums) {
  let sorted = nums.sort((a, b) => a - b);
  let smallest = sorted[0];
  let biggest = sorted[sorted.length - 1];
  for (i = smallest; i > 0; i--) {
    if (biggest % i == 0 && smallest % i == 0) {
      return i;
    }
  }
}

console.log(findGCD([2, 5, 6, 9, 10]));
