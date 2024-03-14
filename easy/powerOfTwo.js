var isPowerOfTwo = function (n) {
    if (n < 1) return false;
    if (n == 1) return true;
    let p = 1;
    while (p < n) {
        p *= 2;
        if (p == n) return true;
    }
    return false;
};

console.log(isPowerOfTwo(17));
