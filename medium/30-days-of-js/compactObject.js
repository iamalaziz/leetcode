const compactObject = (obj) => {
    let res = [];
    for (let key of obj) {
        if (key) {
            res.push(key);
        }
    }
    return res;
};

// console.log(compactObject({ a: null, b: [false, 1] }));

let test = Boolean(null)

console.log(test)