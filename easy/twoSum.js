var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        let r = target - nums[i];
        if (nums.slice(i + 1).includes(r)) {
            return [i, nums.slice(i + 1).indexOf(r) + i + 1];
        }
    }
};

console.log(twoSum([1, 2, 3, 4, 5], 6));
