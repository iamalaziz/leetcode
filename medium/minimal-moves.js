var minMoves = function (target, maxDoubles, moves = 0) {
    while (maxDoubles > 0 && target / 2 > 1) {
        target % 2 == 0
            ? (target /= 2)
            : ((target = Math.trunc(target / 2)), moves++);

        moves++;
        maxDoubles--;
    }
    return (moves += target - 1);
};

console.log(minMoves(10, 4));

// 100, 3 => 50, 25, 12, 11+1+1+1+1+1
// 100, 4 => 50, 25, 12, 6 1
