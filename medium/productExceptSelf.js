var productExceptSelf = function (nums) {
  let n = nums.length;
  const res = new Array(n);

  res[0] = 1;
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return res;
};

console.log(productExceptSelf([5, 3, 2, 6])); // 36, 60, 90, 30

// 1 ,  5, 15,   30,
// 36, 12  6,    1,
