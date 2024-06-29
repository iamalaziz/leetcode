var getAncestors = function (n, edges) {
    let res = Array(n)
        .fill()
        .map(() => new Set());

    for (let [from, to] of edges) {
        res[to].add(from);
    }

    for (let ancestors of res) {
        for (let ancestor of ancestors) {
            for (let node of res[ancestor]) {
                ancestors.add(node);
            }
        }
    }

    return res.map((ancestors) => [...ancestors].sort((a, b) => a - b));
};

console.log(
    getAncestors(8, [
        [0, 3],
        [0, 4],
        [1, 3],
        [2, 4],
        [2, 7],
        [3, 5],
        [3, 6],
        [3, 7],
        [4, 6]
    ])
);
