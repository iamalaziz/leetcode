var differenceOfSum = function (nums) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);
    let digits = nums
        .join('')
        .split('')
        .reduce((acc, curr) => acc + +curr, 0);
    return sum - digits;
};

console.log(differenceOfSum([1, 15, 6, 3]));
