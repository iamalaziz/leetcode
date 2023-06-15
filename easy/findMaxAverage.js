var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxAverage = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    maxAverage = Math.max(maxAverage, sum);
  }

  return maxAverage / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

// console.log(findMaxAverage([-1], 1));
