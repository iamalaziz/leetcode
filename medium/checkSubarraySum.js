var checkSubarraySum = function (nums, k) {
    let map = { 0: -1 };
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        r = sum % k;
        if (map[r] === undefined) {
            map[r] = i;
        } else if (i - map[r] > 1) {
            return true;
        }
    }

    return false;
};

console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));
