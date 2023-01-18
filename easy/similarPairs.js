function similarPairs(words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    words[i] = [...new Set(words[i].split('').sort())].join('');  
  }
  
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] === words[j]) count++;
    }
  }
  return count;
}

/* 
Runtime: 132ms (72%)
Memory: 48.4MB (80%)
 */

console.log(similarPairs(['aba', 'aabb', 'abcd', 'bac', 'aabc']));
