var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  let i = 0;
  while (i < flowerbed.length) {
    if (
      flowerbed[i] == 0 &&
      (i == 0 || flowerbed[i - 1] == 0) &&
      (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)
    ) {
      console.log(i);
      console.log(count);
      flowerbed[i] = 1;
      count += 1;
      if (count >= n) {
        return true;
      }
    }
    i++;
  }
  return count >= n;
};

console.log(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 0));


console.log(canPlaceFlowers([0,0,1,0,1], 1));
