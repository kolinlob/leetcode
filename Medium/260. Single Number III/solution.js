/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let xor = nums.reduce((a, c) => a ^ c, 0),
    r = 1,
    p = 0,
    q = 0;

  while ((r & xor) == 0) r <<= 1;

  for (let n of nums) {
    if ((n & r) !== 0) p ^= n;
    else q ^= n;
  }

  return [p, q];
};
