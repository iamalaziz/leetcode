Array.prototype.groupBy = function (fn) {
    let res = {};
    for (const i of this) {
        let key = fn(i);

        if (key in res) {
            res[key].push(i);
        } else {
            res[key] = [i];
        }
    }
    return res;
};

const myFunc = function (n) {
    return String(n > 5);
};

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array.groupBy(myFunc)); // {"1":[1],"2":[2],"3":[3]}
