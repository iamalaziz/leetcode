var pivotIndex = function (nums) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);

    let leftSum = 0;
    let rightSum = sum - nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === rightSum) return i;

        leftSum += nums[i];
        rightSum -= nums[i + 1];
    }
    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

// i = 1 => 0 vs 27
// i = 7 => 1 vs 20
