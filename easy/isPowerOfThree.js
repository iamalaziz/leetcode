var isPowerOfThree = function (n) {
    if (n == 1) return true;
    if (n % 3 !== 0 || n < 1) return false;
    return isPowerOfThree(n / 3);
};

console.log(isPowerOfThree(45));

/*
Time: O(n^(1/3))
Space: O(1)
*/
