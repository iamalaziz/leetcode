function maxCount(nums) {
    let positives = 0;
    let negatives = 0;
    for (let num of nums) {
        if (num < 0) {
            negatives++;
        } else if (num > 0) {
            positives++;
        }
    }
    return positives > negatives ? positives : negatives;
}
console.log(maxCount([5, 20, 66, 1314]));
