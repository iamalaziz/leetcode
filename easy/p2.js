"Third Maximum Number";

var thirdMax = function (nums) {
  nums.sort((a, b) => a - b).reverse();
  let count = 2;
  let i = 0;
  let currentBiggest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < currentBiggest && count > 0) {
      currentBiggest = nums[i];
      count--;
    }
  }
  if (count == 0) return currentBiggest;
  else {
    return nums[0];
  }
};

console.log(thirdMax([3, 3, 3, 11, 2]));
