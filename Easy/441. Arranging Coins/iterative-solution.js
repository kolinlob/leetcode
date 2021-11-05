/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let i = 1;
  while (i <= n) n -= i++;
  return i - 1;
};
