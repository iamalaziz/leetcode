var minSwaps = function (nums) {
        let total = 0;
        let zeros = 0;

        for (let n of nums) {
                if (n === 1) total++;
        }

        /// calculate 0 in the initial subarray
        for (let i = 0; i < total; i++) {
                if (nums[i] === 0) {
                        zeros++;
                }
        }
        
        let swaps = zeros
        nums = [...nums, ...nums];

        for (i = total; i < nums.length; i++) {
                console.log(i)
                if (nums[i - total] === 0 && nums[i] === 1) {
                        zeros--;
                } else if(nums[i - total] === 1 && nums[i] === 0){
                        zeros++
                }

        }
        
        if(zeros < swaps) swaps = zeros

        return swaps;
};

console.log(minSwaps([0,1,1,1,0,0,1,1,0]))
// [0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0]