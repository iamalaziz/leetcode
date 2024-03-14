var checkPerfectNumber = function (num, sum = 0) {
    for (let i = 1; i <= Math.trunc(num / 2); i++) {
        num % i === 0 && (sum += i);
    }
    return num === sum;
};

console.log(checkPerfectNumber(28));
