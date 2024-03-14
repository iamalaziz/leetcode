var kidsWithCandies = function (candies, extraCandies) {
    const max = Math.max(...candies);
    return candies.map((c) => (c + extraCandies >= max ? true : false));
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
