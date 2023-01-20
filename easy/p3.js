var areOccurrencesEqual = function (s) {
  const freq = {}
  s.split('').forEach((l, i) => {
    freq[l] = freq[l] ? ++freq[l] : 1
  })

  let arr = Object.values(freq)
  for(let i of arr) {
    if(i !== arr[0]) return false
  }

  return true
};

console.log(areOccurrencesEqual('abaacbc'));

// Check if All Characters Have Equal Number of Occurrences
