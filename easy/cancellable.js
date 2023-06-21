var cancellable = function (fn, args, t) {
  let cancelled = false;
  setTimeout(() => {
    if (!cancelled) {
      fn(...args);
    }
  }, t);
  return () => {
    cancelled = true;
  };
};

const result = [];
const fn = (x) => x * 5;
const args = [2],
  t = 49,
  cancelT = 50;
const log = (...argsArr) => {
  result.push(fn(...argsArr));
};

const cancel = cancellable(log, args, t);

setTimeout(() => {
  cancel();
  console.log(result); // [{"time":20,"returned":10}]
}, cancelT);
