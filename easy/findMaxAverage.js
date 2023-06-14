var findMaxAverage = function (nums, k) {
  let res = 0;
  for (let i = 0; i < nums.length - k + 1; i++) {
    let s = nums.slice(i, i + k).reduce((acc, n) => acc + n, 0);
    if (s > res) {
      res = s;
    }
  }
  res = parseFloat((res / k).toFixed(5));
  return res;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
