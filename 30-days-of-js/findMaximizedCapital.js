const {
    MinPriorityQueue,
    MaxPriorityQueue
} = require('@datastructures-js/priority-queue');

var findMaximizedCapital = function (k, w, profits, capital) {
    let capitals_asc = new MinPriorityQueue();
    let profits_asc = new MaxPriorityQueue();
    for (let i = 0; i < profits.length; i++) {
        capitals_asc.enqueue([capital[i], profits[i]], capital[i]);
    }

    console.log(capitals_asc);
};

console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]));
