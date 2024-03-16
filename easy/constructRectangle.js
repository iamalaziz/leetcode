var constructRectangle = function (area) {
    let res = [area, 1];
    for (i = 2; i <= area; i++) {
        if (area % i === 0 && area / i >= i) {
            res = [area / i, i];
        }
    }
    return res;
};

console.log(constructRectangle(122122));
