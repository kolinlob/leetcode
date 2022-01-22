/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let ones = 0;

  for (let i = 0; i < 32; i++)
    if ((n >> (31 - i)) & 1)
        ones++;

  return ones;
};
