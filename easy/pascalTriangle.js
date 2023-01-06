function pascalTriangle(n) {
  if (n === 1) return [[1]];
  let res = [[1]];
  for (let i = 2; i <= n; i++) {
    let next = nextArr(res[res.length-1])
    res.push(next)
  }
  return res;
}
console.log(pascalTriangle(5));

function nextArr(arr) {
  let res = [1];
  for (let i = 0; i < arr.length - 1; i++) {
    res.push(arr[i] + arr[i + 1]);
  }
  res.push(1);
  return res;
};