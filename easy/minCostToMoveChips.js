function minCostToMoveChips(position) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  return Math.min(evenCount, oddCount);
}
console.log(minCostToMoveChips([2,2,2,3,3,3,3,4,4,4,5,5]));