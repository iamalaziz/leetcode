var join = function (arr1, arr2) {
    let res = {};

    for (let i = 0; i < arr1.length; i++) {
        res[arr1[i].id] = arr1[i];
    }

    for (let i = 0; i < arr2.length; i++) {
        if (res[arr2[i].id]) {
            for (const key in arr2[i]) {
                res[arr2[i].id][key] = arr2[i][key];
            }
        } else {
            res[arr2[i].id] = arr2[i];
        }
    }
    return Object.values(res);
};

console.log(
    join(
        [
            { id: 2, x: 3, y: 6 },
            { id: 1, x: 2, y: 3 }
        ],
        [
            { id: 2, x: 10, y: 20 },
            { id: 3, x: 0, y: 0 }
        ]
    )
);
