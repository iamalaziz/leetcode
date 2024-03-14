var isMonotonic = function (nums) {
    let isIncreasing = null;
    let diff = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - nums[i + 1] > 0) {
            isIncreasing = 0;
        } else if (nums[i] - nums[i + 1] < 0) {
            isIncreasing = 1;
        }
    }
    let res = true;
    if (isIncreasing === 1) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] - nums[i + 1] > 0) {
                console.log(nums[i], nums[i + 1]);
                res = false;
            }
        }
        return res;
    } else if (isIncreasing === 0) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] - nums[i + 1] < 0) {
                res = false;
            }
        }
        return res;
    } else if (isIncreasing === null) return true;
    return false;
};
console.log(isMonotonic([5, 5, 5, 5]));
