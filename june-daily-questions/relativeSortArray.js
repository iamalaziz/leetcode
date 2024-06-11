var relativeSortArray = function (arr1, arr2) {
    let indexMap = new Map();

    arr2.forEach((n, i) => indexMap.set(n, i));

    arr1.sort((a, b) => {
        if (indexMap.has(a) && indexMap.has(b))
            return indexMap.get(a) - indexMap.get(b);
        if (indexMap.has(a)) return -1;
        if (indexMap.has(b)) return 1;

        return a - b;
    });
    return arr1;
};

console.log(
    relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);

// console.log(Array(3).fill(4))
