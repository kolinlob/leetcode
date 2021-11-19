/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let z = x ^ y, c = 0;

  for (let i = 0; i < 32; i++)
    c += (z >> (31 - i)) & 1;

  return c;
};
