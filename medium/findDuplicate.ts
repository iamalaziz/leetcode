function findDuplicate(nums: number[]): number {
    // do not change array
    // constant space
    let count = 0;
    let curr = 0;//3
    for (let i: number = 0; i < nums.length; i++) {
        if(count == 2) return nums[i]
        
        if(count == 0){
            curr = nums[i]
        }

        if (nums[i] == curr) {
            count += 1;
        } else {
            count -= 1;
        }
    }
    return curr
}

console.log(findDuplicate([3,1,3,4,2]));
