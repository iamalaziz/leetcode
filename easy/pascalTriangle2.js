function generate(n, a = n - 1) {
    if (n == 0) return [1];
    let res = [1, n];
    while (a > 0) {
        res.push((a * res[res.length - 1]) / res.length);
        a--;
    }
    return res;
}
console.log(generate(5));
// Runtime: 95ms
