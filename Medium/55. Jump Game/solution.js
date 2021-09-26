/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let reach = 0,
    maxJump = 0,
    fin = nums.length - 1;

  for (let i = 0; i < fin; i++) {
    if (i <= reach) {
      maxJump = Math.max(maxJump, i + nums[i]);
      reach = maxJump;

      if (maxJump >= fin)
        return true;
    }
  }

  return reach == fin;
};
