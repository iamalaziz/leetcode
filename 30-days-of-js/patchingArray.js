console.time('Time Complexity')
var minPatches = function (nums, n) {
    let sum = 1;
    let i = 0; /* counter for nums */
    let count = 0; /* counter for patched numbers */

    while (sum <= n) {
        if (i < nums.length && nums[i] <= sum) {
            sum += nums[i];
            i+=1;
        } else {
            sum *= 2;
            count += 1;
        }
    }

    return count
};

console.log(minPatches([1, 5, 10], 20));

console.timeEnd('Time Complexity')
/* 
[1] to 20

1,2,4,8,16
*/