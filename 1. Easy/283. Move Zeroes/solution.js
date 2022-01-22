/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let z = 0;
  for (let i = 0; i < nums.length; i++) {
    while (nums[z] == 0) z++;
    if (z < nums.length) {
      [nums[i], nums[z]] = [nums[z], nums[i]];
      z++;
    }
  }
};
