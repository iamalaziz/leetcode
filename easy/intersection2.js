var intersect = function (nums1, nums2) {
  let res = [];
  for (const n of nums1) {
    if (nums2.includes(n)) {
      const x = nums2.splice(nums2.indexOf(n), 1);
      res.push(...x)
    }
  }
  return res;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
