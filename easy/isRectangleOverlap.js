var isRectangleOverlap = function (rec1, rec2) {
    if (rec1[2] <= rec2[0] || rec1[3] <= rec2[1]) {
        return false;
    }
    if (rec1[0] >= rec2[2] || rec1[1] >= rec2[3]) {
        return false;
    }

    return true;
};

console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]));

/*
Runtime: O(1)
Memory: O(1)
*/
