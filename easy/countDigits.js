const countDigits = (n, count = 0) => {
  [...n.toString()].forEach(d => n % +d == 0 && count++);
  return count;
}
console.log(countDigits(1248));