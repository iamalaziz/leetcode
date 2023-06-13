var compose = function (functions) {
  return function (x) {
    let curr = functions[functions.length - 1](x);
    for (let i = functions.length - 2; i >= 0; i--) {
      curr = functions[i](curr);
    }
    return curr;
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9

