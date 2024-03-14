var sortBy = function (arr, fn) {
    arr.sort((a, b) => {
        return fn(a) - fn(b);
    });
    return arr;
};

console.log(
    sortBy(
        [
            [3, 4],
            [5, 2],
            [10, 1]
        ],
        (fn = (x) => x[1])
    )
);
