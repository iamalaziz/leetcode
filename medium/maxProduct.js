var maxProduct = function (nums) {
    if (nums.length === 0) return 0;

    let max = nums[0];
    let min = nums[0];
    let res = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            let temp = max;
            max = min;
            min = temp;
        }

        max = Math.max(nums[i], max * nums[i]);
        min = Math.min(nums[i], min * nums[i]);

        res = Math.max(res, max);
    }
    return res;
};

console.log(maxProduct([2, 3, -7, -2, -4]));
