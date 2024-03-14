var lastStoneWeight = function (stones) {
    while (stones.length > 0) {
        stones.sort((a, b) => b - a);
        if (stones.length === 1) return stones[0];
        if (stones[0] === stones[1]) {
            stones.splice(0, 2);
        } else if (stones[0] > stones[1]) {
            stones[0] -= stones[1];
            stones.splice(1, 1);
        } else {
            stones[1] -= stones[0];
            stones.splice(0, 1);
        }
    }
    return 0;
};

console.log(lastStoneWeight([7, 6, 7, 6, 9]));
