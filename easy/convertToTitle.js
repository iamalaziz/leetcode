var convertToTitle = function (columnNumber) {
  let res = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  while (columnNumber > 0) {
    columnNumber--;
    let r = columnNumber % 26;
    res = letters[r] + res;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return res;
};

console.log(convertToTitle(702));

/*

26 - z
27 - aa - 27-1=26/26=1
28 - ab
52 - az

*/

