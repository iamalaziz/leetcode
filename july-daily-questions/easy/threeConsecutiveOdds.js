/* 1550. Three Consecutive Odds */

console.time('Time: ');

var threeConsecutiveOdds = function (arr) {
    let i = 0;
    for (let n of arr) {
        if (n % 2 === 1) {
            i++;
            if (i === 3) return true;
        } else {
            i = 0;
        }
    }
    return false;
};

console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));

console.timeEnd('Time: ');
