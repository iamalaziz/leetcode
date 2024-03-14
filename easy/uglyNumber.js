var isUgly = function (n) {
    if (n == 1) return true;
    if (n <= 0) return false;
    let arr = [2, 3, 5];
    let i = 0;

    while (i < 3) {
        if (n % arr[i] == 0) {
            n /= arr[i];
        } else {
            i++;
        }
    }
    if (n === 1) return true;
    return false;
};

console.log(isUgly(14));
