function missingNumber(nums: number[]): number {
    let sum = 0;
    for (const num of nums) sum += num;

    const len = nums.length;
    return (len * (len + 1)) / 2 - sum;
}

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
