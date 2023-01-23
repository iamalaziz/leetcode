function removeStars(s) {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    s[i] !== '*' ? res.push(s[i]) : res.pop();
  }
  return res.join('')
}

console.log(removeStars('erase*****'));
