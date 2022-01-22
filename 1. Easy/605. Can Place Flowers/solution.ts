function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let planted = 0,
    i = 0;

  while (i < flowerbed.length) {
    if (
      (flowerbed[i - 1] == 0 || i == 0) &&
      flowerbed[i] == 0 &&
      (flowerbed[i + 1] == 0 || i == flowerbed.length - 1)
    ) {
      planted += 1;
      flowerbed[i] = 1;
    }
    if (planted >= n) return true;
    i++;
  }

  return false;
}
