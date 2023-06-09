var reverseWords = function (s) {
  return s.split(' ').filter(w => w != '').reverse().join(' ');

};

console.log(reverseWords('a good   example'));
