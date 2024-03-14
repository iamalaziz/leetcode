var maxSubArray = function (nums) {
    let max = nums[0];
    let res = 0;

    for (let n of nums) {
        if (res < 0) {
            res = 0;
        }
        res += n;
        max = Math.max(max, res);
    }
    return max;
};

var secondSolution = function (nums) {
    let max = nums[0];
    let res = nums[0];

    for (let i = 1; i < nums.length; i++) {
        max = Math.max(nums[i], nums[i] + max);
        res = Math.max(max, res);
    }
    return res;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(secondSolution([5, 4, -1, 7, 8]));
