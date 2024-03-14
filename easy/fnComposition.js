var compose = function (functions) {
    if (functions.length == 0) return (x) => x;
    return function (x) {
        let curr = functions[functions.length - 1](x);
        console.log('curr:', curr);
        for (let i = functions.length - 2; i >= 0; i--) {
            curr = functions[i](curr);
            console.log('curr:', curr);
        }
        return curr;
    };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9
