var merge = function (nums1, m, nums2, n) {
    const index = nums1.length - n;
    for (let i = index; i < nums1.length; i++) {
        nums1[i] = nums2[i - index];
    }
    return nums1.sort((a, b) => a - b);
};


console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))


