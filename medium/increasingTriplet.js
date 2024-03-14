var increasingTriplet = function (nums) {
    let temp1 = Infinity;
    let temp2 = Infinity;

    for (let num of nums) {
        if (num <= temp1) {
            temp1 = num;
        } else if (num <= temp2) {
            temp2 = num;
        } else {
            return true;
        }
    }
    return false;
};

console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
