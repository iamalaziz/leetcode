var once = function (fn) {
    let i = 0;
    return function (...args) {
        if (i == 0) {
            i++;
            return fn(...args);
        }
        return undefined;
    };
};

let fn = (a, b, c) => a + b + c;

let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); //
