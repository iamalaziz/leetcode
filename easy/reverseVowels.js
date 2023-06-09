var reverseVowels = function (s) {
  const vowels = 'AEUIOaeuio';
  const letters = [...s].filter((l) => {
    if (vowels.includes(l)) return l;
  });
  const res = [...s].map((l, index) => {
    if (vowels.includes(l)) {
      let last = letters.pop();
      return last;
    }
    return l;
  });
  return res.join('');
};

console.log(reverseVowels('aA')); // 'holle'
