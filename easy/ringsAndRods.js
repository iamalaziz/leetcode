var countPoints = function (rings) {
  const obj = {};
  let count = 0;
  for (let i = 0; i < rings.length; i += 2) {
    obj[rings[i + 1]] = obj[rings[i + 1]]
      ? obj[rings[i + 1]] + rings[i]
      : rings[i];
  }

  Object.entries(obj).forEach((line) => {
    if (line[1].includes('R') && line[1].includes('G') && line[1].includes('B')) {
      count++
    }
  });
  return count;
};
console.log(countPoints('B0R0G0R9R0B0G0'));
