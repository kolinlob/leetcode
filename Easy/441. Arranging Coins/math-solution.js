/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  return (Math.sqrt(2 * n + 1 / 4) - 1 / 2) >> 0;
};
