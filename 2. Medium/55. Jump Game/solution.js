/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let reachable = 0,
    finish = nums.length - 1;

  for (let i = 0; i < finish; i++) {
    if (i > reachable) return false;

    reachable = Math.max(reachable, i + nums[i]);

    if (reachable >= finish) return true;
  }

  return reachable == finish;
};
