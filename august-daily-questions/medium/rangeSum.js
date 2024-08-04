var rangeSum = function (nums, n, left, right) {
        let sumsArray = [];
        const modulo = 10 ** 9 + 7;

        for (let i = 0; i < n; i++) {
                let sum = 0;
                for (let j = i; j < n; j++) {
                        sum += nums[j];
                        sumsArray.push(sum);
                }
        }

        sumsArray.sort((a, b) => a - b);
        console.log(sumsArray)
        let res = 0;

        for (let i = left - 1; i < right; i++) {
                res = (res + sumsArray[i]) % modulo;
        }

        return res;
};

console.log(rangeSum([1, 2, 3, 4], 4, 1, 5));
