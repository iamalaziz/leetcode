var longestSubsequence = function (arr, difference) {
    const counts = {};
    let maxCount = 1;

    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]] = (counts[arr[i]] || 0) + 1;
        console.log(counts);
        const prev = arr[i] - difference;
        const next = arr[i] + difference;
        if (prev in counts) {
            counts[arr[i]] = Math.max(counts[arr[i]], counts[prev] + 1);
        }
        if (next in counts) {
            counts[arr[i]] = Math.max(counts[arr[i]], counts[next] + 1);
        }
        maxCount = Math.max(maxCount, counts[arr[i]]);
    }

    return maxCount;
};
console.log(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2));
