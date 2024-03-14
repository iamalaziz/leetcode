var intersect = function (nums1, nums2) {
    let res = [];
    for (const n of nums1) {
        if (nums2.includes(n) && !res.includes(n)) {
            res.push(n);
        }
    }
    return res;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
