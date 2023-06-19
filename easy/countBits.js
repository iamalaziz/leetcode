var countBits = function (n) {
  let res = [];
  for (let i = 0; i <= n; i++) {
    res.push(i.toString(2).split('1').length - 1);
  }
  return res;
};

console.log(countBits(5));
