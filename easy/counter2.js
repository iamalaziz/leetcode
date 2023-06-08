var createCounter = function (init) {
  let x = init;
  return {
    increment: function () {
      x++
      return x;
    },
    decrement: function () {
      x--
      return x;
    },
    reset: function () {
      x = init
      return x;
    },
  };
};

const counter = createCounter(0);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 4
console.log(counter.reset()); // 5
console.log(counter.reset()); // 5


