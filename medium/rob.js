var rob = function (nums) {
    if (nums.length < 3) return Math.max(...nums);

    const houses = [nums[0], Math.max(nums[0], nums[1])];

    for (let i = 2; i < nums.length; i++) {
        houses.push(
            Math.max(houses[i - 2] + nums[i], nums[i] + (houses[i - 3] || 0))
        );
    }
    return Math.max(houses[houses.length - 1], houses[houses.length - 2]);
};

var betterSolution = function (nums) {
    if (nums.length < 3) return Math.max(...nums);

    let max = Math.max(nums[0], nums[1]);
    let secondMax = nums[0];

    for (let i = 2; i < nums.length; ++i) {
        let temp = Math.max(max, secondMax + nums[i]);
        secondMax = max;
        max = temp;
    }
    return max;
};
console.log(rob([2, 1, 2, 1, 1, 2, 1, 2, 1, 2]));
console.log(betterSolution([2, 1, 2, 1, 1, 2, 1, 2, 1, 2]));
// 2 1 2 1 1 2 1 2 1 2
// 2 1
