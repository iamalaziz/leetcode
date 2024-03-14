var filter = function (arr, fn) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        const boolean = fn(arr[i], i);
        boolean && res.push(arr[i]);
    }
    return res;
};

function greaterThan10(n) {
    return n > 10;
}

const newArray = filter([0, 10, 20, 30], greaterThan10); // [20, 30]
console.log(newArray);
