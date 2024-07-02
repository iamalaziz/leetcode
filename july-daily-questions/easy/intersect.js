function intersect(nums1, nums2) {
    // I will use the first arg as an array with fewer elements
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }

    const res = [];

    let hashMap = new Map();

    for (let n of nums1) {
        if (hashMap.has(n)) hashMap.set(n, hashMap.get(n) + 1);
        else hashMap.set(n, 1);
    }

    for (let n of nums2) {
        console.log(n)
        if (hashMap.has(n) && hashMap.get(n) > 0) {
            hashMap.set(n, hashMap.get(n) - 1);
            res.push(n);
        }
    }

    return res;
}


console.log(intersect([3,1,2], [1,1]))