function commonCharacters(words) {
  let firstWord = words[0];
  const res = [];
  for (let letter of firstWord) {
    if (doesExist(letter, words)) {
      words = words.map(function (x) {
        return x.replace(letter, '');
      });
      res.push(letter);
    }
  }

  return res;
}

function doesExist(l, words) {
  for (let word of words) {
    if (!word.includes(l)) {
      return false;
    }
  }

  return true;
}

console.log(commonCharacters(['cool', 'lock', 'cook']));
