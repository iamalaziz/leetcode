var findMatrix = function (nums) {
    let res = [];
    let hashMap = new Map();

    for (const num of nums) {
        hashMap.set(num, (hashMap.get(num) || 0) + 1);
    }

    nums.sort((a, b) => hashMap.get(b) - hashMap.get(a));

    for (const num of nums) {
        let added = false;

        for (const row of res) {
            if (!row.includes(num)) {
                row.push(num);
                added = true;
                break;
            }
        }

        if (!added) {
            res.push([num]);
        }
    }
    return res;
};

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));
