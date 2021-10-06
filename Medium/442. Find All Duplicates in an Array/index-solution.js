/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[Math.abs(nums[i]) - 1] < 0)
        res.push(Math.abs(nums[i]));
    else
        nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1];
  }

  return res;
};
