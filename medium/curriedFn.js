const curry = (fn) => {
  return function curried(...args) {
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curried(...args, ...newArgs);
      };
    }
  };
};

function sum(a, b, c) {
  return a + b + c;
}

const csum = curry(sum);

console.log(csum(1)(2)(3)); // Output: 6
console.log(csum(1)(2, 3)); // Output: 6
// console.log(csum(1, 2)(3));     // Output: 6
// console.log(csum(1, 2, 3));
