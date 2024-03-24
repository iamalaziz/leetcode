function isPerfectSquare(num: number): boolean {
    if (num < 1) return false;

    let left: number = 1;
    let right: number = num;
    // 1, 2, 3, 4,  5,  6,  7,  8, ... num(16)
    // 1, 4, 9, 16, 25, 36, 49, 64 ...
    // 16
    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // 8
        let square = mid * mid; //64

        if (square == num) {
            return true;
        } else if (square > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}

console.log(isPerfectSquare(4));
