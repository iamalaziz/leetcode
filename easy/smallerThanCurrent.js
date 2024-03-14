var smallerNumbersThanCurrent = function (nums) {
    return nums.map((num) => {
        let count = 0;
        nums.forEach((n) => {
            if (num > n) count++;
        });
        return count;
    });
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
