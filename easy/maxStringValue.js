function maxStringValue(strs) {
  let max = 0;
  strs.forEach((str) => {
    if (/^\d+$/.test(str)) {
      if (Number(str) > max) {
        max = Number(str);
      }
    } else {
      if (str.length > max) {
        max = str.length;
      }
    }
  });

  return max;
}

console.log(maxStringValue(['alic3', 'bob', '3', '4', '000000']));
