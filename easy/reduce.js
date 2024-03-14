var reduce = function (nums, fn, init) {
    let res = init;
    for (let i = 0; i < nums.length; i++) {
        res = fn(res, nums[i]);
    }
    return res;
};

function sum(accum, curr) {
    return accum + curr;
}

const res = reduce([1, 2, 3, 4], sum, 0);

console.log(res);
