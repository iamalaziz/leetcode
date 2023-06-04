var createCounter = function (n) {
  let count = n
  return function () {
      var result = count;
      count++;
      return result;
  };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());