/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let xor = x ^ y, count = 0;

  while (xor) {
    count += xor & 1;
    xor >>= 1;
  }

  return count;
};
