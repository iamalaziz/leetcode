var mergeAlternately = function (word1, word2) {
  let res = '';
  let big = word1.length - word2.length >= 0 ? word1 : word2;
  let small = word1.length - word2.length < 0 ? word1 : word2;
  let n = 0;

  while (n < small.length) {
    res += word1[n] + word2[n];
    n++;
  }
  res += big.slice(small.length);
  return res;
};

console.log(mergeAlternately('ab', 'pqrs'));
