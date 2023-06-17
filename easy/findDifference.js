var findDifference = function (nums1, nums2) {
  const answer = [[], []];
  nums1.forEach(n => !nums2.includes(n) && !answer[0].includes(n) &&  answer[0].push(n))
  nums2.forEach(n => !nums1.includes(n) && !answer[1].includes(n) && answer[1].push(n))
  return answer
};

// Better solution

var fn = function(nums1, nums2) {
  const ans1 = new Set(nums1)
  const ans2 = new Set(nums2)

  const res1 = [...ans1].filter(n => !ans2.has(n))
  const res2 = [...ans2].filter(n => !ans1.has(n))
  return [res1, res2]
}
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
console.log(fn([1, 2, 3, 3], [1, 1, 2, 2]));
