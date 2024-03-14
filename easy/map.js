var map = function (arr, fn) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        const num = fn(arr[i], i);
        res.push(num);
    }
    return res;
};

function plusone(n) {
    return n + 1;
}
function plusI(n, i) {
    return n + i;
}
function constant() {
    return 42;
}
const newArray = map([1, 2, 3], constant); // [2,3,4]

console.log(newArray);
