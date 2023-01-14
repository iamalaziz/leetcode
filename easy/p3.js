function aliceWins(n) {
  let divisors = [];
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      divisors.push(i);
    }
  }
  let nimSum = divisors.reduce((a, b) => a ^ b, 0);
  return nimSum != 0;
}
// NOT FINISHED